from pydantic import BaseModel, EmailStr, Field


class UserCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=6, max_length=128)


class UserLogin(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=6, max_length=128)
    
class AnalysisCreate(BaseModel):
    user_id: int
    job_description: str
    ats_score: float
    matched_skills: str
    missing_skills: str
    suggestions: str