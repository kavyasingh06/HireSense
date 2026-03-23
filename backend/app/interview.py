from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class InterviewRequest(BaseModel):
    job_description: str

@router.post("/generate")
def generate_interview(data: InterviewRequest):
    jd = data.job_description.lower()

    questions = [
        "Tell me about yourself.",
        "Why are you interested in this role?",
    ]

    if "python" in jd:
        questions.append("Explain your experience with Python projects.")
    if "fastapi" in jd:
        questions.append("How have you used FastAPI in backend development?")
    if "sql" in jd or "postgresql" in jd:
        questions.append("How do you design and optimize database queries?")
    if "machine learning" in jd:
        questions.append("Explain a machine learning project you have worked on.")
    if "deep learning" in jd:
        questions.append("What deep learning frameworks have you used and why?")
    if "docker" in jd:
        questions.append("How have you used Docker in your workflow?")

    return {"questions": questions}