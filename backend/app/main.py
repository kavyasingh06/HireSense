from fastapi import FastAPI, UploadFile, File, Form, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.interview import router as interview_router
from app.evaluator import router as evaluator_router
from app.database import Base, engine, get_db
from app.auth import router as auth_router
from app.models import Analysis
from app.resume import (
    extract_text_from_pdf,
    extract_text_from_docx,
    calculate_final_score,
    generate_suggestions,
)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="HireSense AI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "https://hire-sense-livid.vercel.app",
        "https://hire-sense-bkusv90mj-kavyasingh06s-projects.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(interview_router, prefix="/interview", tags=["Interview"])
app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(evaluator_router, prefix="/evaluator", tags=["Evaluator"])

@app.get("/")
def root():
    return {"message": "HireSense AI backend running"}


@app.post("/analyze")
async def analyze_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...),
    user_id: int = Form(...),
    db: Session = Depends(get_db)
):
    if file.filename.endswith(".pdf"):
        resume_text = extract_text_from_pdf(file)
    elif file.filename.endswith(".docx"):
        resume_text = extract_text_from_docx(file)
    else:
        return {"error": "Unsupported file format"}

    ats_score, matched_skills, missing_skills, jd_skills = calculate_final_score(
        resume_text, job_description
    )

    suggestions = generate_suggestions(ats_score, missing_skills)

    analysis = Analysis(
        user_id=user_id,
        job_description=job_description,
        ats_score=ats_score,
        matched_skills=", ".join(matched_skills),
        missing_skills=", ".join(missing_skills),
        suggestions=" | ".join(suggestions),
    )

    db.add(analysis)
    db.commit()

    return {
        "ats_score": ats_score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "total_jd_skills": len(jd_skills),
        "suggestions": suggestions,
        "message": "Analysis complete"
    }