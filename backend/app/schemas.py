from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str
class AnalysisCreate(BaseModel):
    user_id: int
    job_description: str
    ats_score: float
    matched_skills: str
    missing_skills: str
    suggestions: str