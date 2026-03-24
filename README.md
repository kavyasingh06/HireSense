🚀 HireSense AI – Resume & Interview Copilot

An AI-powered full-stack platform that analyzes resumes against job descriptions, calculates ATS scores, identifies skill gaps, and provides actionable insights to improve interview readiness.

🔗 Live Demo
🌐 Frontend: https://hire-sense-livid.vercel.app
⚙️ Backend API: https://hiresense-ai-backend-cd2u.onrender.com
✨ Key Features
🔐 Authentication System
Secure user signup and login using FastAPI backend
📄 Resume Upload & Parsing
Supports PDF and DOCX resume formats
🎯 ATS Score Calculation
Evaluates resume relevance based on job description
🧠 Skill Matching Engine
Identifies matched and missing skills from the job description
📊 Interactive Dashboard
Displays performance metrics like ATS score, skills match, and readiness
📈 Interview Readiness Score
Estimates candidate preparedness based on analysis
🤖 AI Suggestions
Provides actionable recommendations to improve resume quality
📥 Downloadable Report
Export analysis results for offline review
🏗️ System Architecture
User (Frontend - Next.js)
        ↓
API Gateway (FastAPI Backend)
        ↓
Resume Parser → Skill Matcher → Scoring Engine
        ↓
Result Aggregator
        ↓
Dashboard (Charts + Insights)
🛠 Tech Stack
Frontend
Next.js (App Router)
TypeScript
Tailwind CSS
Recharts (for data visualization)
Backend
FastAPI
SQLAlchemy
Pydantic
Database
SQLite (Development)
PostgreSQL (Production Ready)
Deployment
Vercel (Frontend)
Render (Backend)
⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/kavyasingh06/HireSense.git
cd HireSense
2. Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt

uvicorn app.main:app --reload
3. Frontend Setup
cd frontend
npm install
npm run dev
4. Environment Variables

Create .env file in frontend:

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
📸 Screenshots
<img width="1887" height="901" alt="Screenshot 2026-03-23 103803" src="https://github.com/user-attachments/assets/86588f9d-f9e4-42a3-80ed-9a23912e9f2e" />

<img width="1873" height="910" alt="Screenshot 2026-03-23 103837" src="https://github.com/user-attachments/assets/12b5ccfa-707d-4df3-a876-d6972d206b95" />

<img width="1891" height="905" alt="Screenshot 2026-03-23 103910" src="https://github.com/user-attachments/assets/dd828d02-0317-4c9c-a70c-b315c783c3da" />
<img width="1907" height="915" alt="Screenshot 2026-03-23 103945" src="https://github.com/user-attachments/assets/5ffd5e5d-9089-4ad0-95f7-ac98ceb35642" />
<img width="1890" height="907" alt="Screenshot 2026-03-23 104037" src="https://github.com/user-attachments/assets/3976a6d3-05f9-4a5e-9df4-cb0f202600dc" />
<img width="1862" height="912" alt="Screenshot 2026-03-23 104107" src="https://github.com/user-attachments/assets/f59310de-40c1-4653-97f8-e09880f856ed" />

Dashboard Overview
Resume Upload Section
ATS Score & Analysis Charts
📊 How It Works
User uploads resume and pastes job description
Backend extracts and processes text
Skill matching algorithm compares resume vs JD
ATS score and insights are generated
Results are visualized in dashboard
🚀 Future Enhancements
🎤 AI Mock Interview (Voice-based)
📝 Cover Letter Generator
🤖 LLM-based Resume Optimization
📌 Job Recommendation System
📊 Recruiter Dashboard
👩‍💻 Author

Kavya Singh

🔗 GitHub: https://github.com/kavyasingh06
💼 LinkedIn: https://linkedin.com/in/kavyasingh06
⭐ Contribution & Feedback

Contributions are welcome! Feel free to fork the repo and submit a pull request.

If you like this project, consider giving it a ⭐ on GitHub.
