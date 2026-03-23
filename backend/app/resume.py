import re
import pdfplumber
from docx import Document
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity


COMMON_SKILLS = {
    "python", "java", "c++", "javascript", "typescript", "html", "css",
    "react", "next.js", "node.js", "fastapi", "flask", "django",
    "sql", "sqlalchemy", "mysql", "postgresql", "mongodb", "sqlite",
    "docker", "kubernetes", "git", "github", "rest", "rest api", "api", "apis",
    "machine learning", "deep learning", "tensorflow", "pytorch",
    "pandas", "numpy", "scikit-learn", "opencv", "langchain",
    "llm", "rag", "nlp", "data structures", "algorithms", "problem solving",
    "backend", "backend systems", "data preprocessing", "model training", "evaluation"
}


def clean_text(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-zA-Z0-9+.#\s]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def extract_text_from_pdf(file):
    text = ""
    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            text += (page.extract_text() or "") + "\n"
    return clean_text(text)


def extract_text_from_docx(file):
    doc = Document(file.file)
    text = "\n".join([para.text for para in doc.paragraphs])
    return clean_text(text)


def calculate_text_similarity(resume_text, jd_text):
    resume_text = clean_text(resume_text)
    jd_text = clean_text(jd_text)

    if not resume_text or not jd_text:
        return 0

    vectorizer = CountVectorizer().fit_transform([resume_text, jd_text])
    similarity = cosine_similarity(vectorizer)[0][1]
    return round(similarity * 100, 2)


def extract_skills(text):
    text = clean_text(text)
    found_skills = set()

    for skill in COMMON_SKILLS:
        if skill in text:
            found_skills.add(skill)

    return found_skills


def calculate_final_score(resume_text, jd_text):
    similarity_score = calculate_text_similarity(resume_text, jd_text)

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    if len(jd_skills) == 0:
        return similarity_score, [], [], []

    matched_skills = sorted(list(resume_skills & jd_skills))
    missing_skills = sorted(list(jd_skills - resume_skills))

    skill_score = (len(matched_skills) / len(jd_skills)) * 100
    final_score = round((0.6 * similarity_score) + (0.4 * skill_score), 2)

    return final_score, matched_skills, missing_skills, list(jd_skills)


def generate_suggestions(score, missing_skills):
    suggestions = []

    if score < 40:
        suggestions.append("Your resume has a weak match for this role. Add more role-specific keywords and relevant projects.")
    elif score < 70:
        suggestions.append("Your resume has a moderate match. Improve keyword alignment and strengthen project descriptions.")
    else:
        suggestions.append("Your resume has a good match. Fine-tune wording and measurable impact to improve further.")

    if "fastapi" in missing_skills:
        suggestions.append("Add FastAPI experience or mention backend API projects.")
    if "docker" in missing_skills:
        suggestions.append("Include Docker or containerization work if you have used it.")
    if "postgresql" in missing_skills or "sql" in missing_skills:
        suggestions.append("Mention database work clearly, especially SQL or PostgreSQL projects.")
    if "machine learning" in missing_skills:
        suggestions.append("Add machine learning projects, models, or coursework relevant to the role.")
    if "deep learning" in missing_skills:
        suggestions.append("Highlight deep learning frameworks like TensorFlow or PyTorch if applicable.")
    if "langchain" in missing_skills or "llm" in missing_skills or "nlp" in missing_skills:
        suggestions.append("Add GenAI, NLP, or LLM-related work if you have done any.")

    return suggestions