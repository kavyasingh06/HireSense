from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class EvaluateRequest(BaseModel):
    answer: str

@router.post("/evaluate")
def evaluate_answer(data: EvaluateRequest):
    answer = data.answer.strip()
    word_count = len(answer.split())

    feedback = []

    if word_count < 20:
        feedback.append("Your answer is too short. Add more detail.")
    else:
        feedback.append("Good answer length.")

    if any(word in answer.lower() for word in ["built", "developed", "implemented", "designed"]):
        feedback.append("Good use of action-oriented language.")
    else:
        feedback.append("Use stronger action verbs like built, developed, or designed.")

    if any(char.isdigit() for char in answer):
        feedback.append("Nice use of measurable impact.")
    else:
        feedback.append("Add measurable impact like percentages, speedups, or outcomes.")

    score = min(100, max(30, word_count * 2))

    return {
        "score": score,
        "feedback": feedback
    }