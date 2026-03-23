// export default function Home() {
//   const features = [
//     {
//       title: "ATS Score Analysis",
//       desc: "See how well your resume matches a job description with clear scoring and actionable insights.",
//     },
//     {
//       title: "Missing Skills Detection",
//       desc: "Identify keywords, tools, and competencies missing from your resume before you apply.",
//     },
//     {
//       title: "AI Mock Interviews",
//       desc: "Practice role-specific interview questions and get instant feedback on your answers.",
//     },
//     {
//       title: "Resume Improvement Suggestions",
//       desc: "Get section-wise suggestions to strengthen impact, clarity, and recruiter appeal.",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900">
//       <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:px-10">
//         <nav className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
//           <div>
//             <h1 className="text-2xl font-bold tracking-tight">HireSense AI</h1>
//             <p className="text-sm text-slate-500">
//               Smart hiring prep for modern job seekers
//             </p>
//           </div>

//           <div className="hidden items-center gap-8 md:flex">
//             <a href="#features" className="text-sm font-medium text-slate-600 hover:text-black">
//               Features
//             </a>
//             <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-black">
//               How it works
//             </a>
//             <a href="/login" className="text-sm font-medium text-slate-600 hover:text-black">
//               Login
//             </a>
//             <a
//               href="/signup"
//               className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
//             >
//               Get Started
//             </a>
//           </div>
//         </nav>

//         <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-2 lg:py-20">
//           <div>
//             <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
//               AI Resume Review • ATS Matching • Mock Interviews
//             </div>

//             <h2 className="mt-6 max-w-2xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
//               Land more interviews with a smarter job-prep assistant.
//             </h2>

//             <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
//               HireSense AI helps you analyze your resume, compare it against job
//               descriptions, find missing skills, and practice interviews with
//               personalized feedback.
//             </p>

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <a
//                 href="/signup"
//                 className="rounded-2xl bg-black px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
//               >
//                 Start Free
//               </a>
//               <a
//                 href="/login"
//                 className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-base font-semibold text-slate-800 transition hover:bg-slate-50"
//               >
//                 Explore Demo
//               </a>
//             </div>

//             <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
//               <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//                 <p className="text-2xl font-bold">95%</p>
//                 <p className="mt-1 text-sm text-slate-500">Resume match clarity</p>
//               </div>
//               <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//                 <p className="text-2xl font-bold">4x</p>
//                 <p className="mt-1 text-sm text-slate-500">Faster prep workflow</p>
//               </div>
//               <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//                 <p className="text-2xl font-bold">24/7</p>
//                 <p className="mt-1 text-sm text-slate-500">AI interview practice</p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
//             <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl" />

//             <div className="relative rounded-[28px] border border-white/70 bg-white p-6 shadow-2xl shadow-slate-200/70">
//               <div className="flex items-center justify-between border-b border-slate-100 pb-4">
//                 <div>
//                   <p className="text-sm font-medium text-slate-500">Candidate Dashboard</p>
//                   <h3 className="text-xl font-bold">Resume Match Report</h3>
//                 </div>
//                 <div className="rounded-xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-600">
//                   ATS Score: 86%
//                 </div>
//               </div>

//               <div className="mt-6 space-y-4">
//                 <div className="rounded-2xl bg-slate-50 p-4">
//                   <div className="mb-2 flex items-center justify-between text-sm">
//                     <span className="font-medium">Skills Match</span>
//                     <span className="text-slate-500">82%</span>
//                   </div>
//                   <div className="h-3 rounded-full bg-slate-200">
//                     <div className="h-3 w-[82%] rounded-full bg-black" />
//                   </div>
//                 </div>

//                 <div className="rounded-2xl bg-slate-50 p-4">
//                   <div className="mb-2 flex items-center justify-between text-sm">
//                     <span className="font-medium">Keyword Coverage</span>
//                     <span className="text-slate-500">74%</span>
//                   </div>
//                   <div className="h-3 rounded-full bg-slate-200">
//                     <div className="h-3 w-[74%] rounded-full bg-slate-700" />
//                   </div>
//                 </div>

//                 <div className="rounded-2xl bg-slate-50 p-4">
//                   <p className="text-sm font-semibold text-slate-900">Missing Skills</p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {["System Design", "Docker", "FastAPI", "PostgreSQL"].map((skill) => (
//                       <span
//                         key={skill}
//                         className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="rounded-2xl bg-black p-5 text-white">
//                   <p className="text-sm text-slate-300">AI Suggestion</p>
//                   <p className="mt-2 text-sm leading-6">
//                     Add measurable impact in project bullets, include missing backend
//                     tools, and tailor your summary to the target role for stronger ATS performance.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section id="features" className="py-10">
//           <div className="mb-8 text-center">
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
//               Features
//             </p>
//             <h3 className="mt-3 text-3xl font-bold">Everything you need to get interview-ready</h3>
//             <p className="mx-auto mt-3 max-w-2xl text-slate-600">
//               Designed to help students and job seekers improve resumes, understand job requirements,
//               and prepare with confidence.
//             </p>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//             {features.map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//               >
//                 <div className="mb-4 h-12 w-12 rounded-2xl bg-slate-100" />
//                 <h4 className="text-lg font-semibold">{item.title}</h4>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="how-it-works" className="py-14">
//           <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
//             <div className="mb-8">
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
//                 How it works
//               </p>
//               <h3 className="mt-3 text-3xl font-bold">From resume upload to interview confidence</h3>
//             </div>

//             <div className="grid gap-6 md:grid-cols-3">
//               <div className="rounded-2xl bg-slate-50 p-6">
//                 <p className="text-sm font-semibold text-slate-500">Step 1</p>
//                 <h4 className="mt-2 text-xl font-semibold">Upload Resume</h4>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">
//                   Add your resume and target job description to begin AI-powered analysis.
//                 </p>
//               </div>

//               <div className="rounded-2xl bg-slate-50 p-6">
//                 <p className="text-sm font-semibold text-slate-500">Step 2</p>
//                 <h4 className="mt-2 text-xl font-semibold">Get Smart Insights</h4>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">
//                   Review ATS score, missing keywords, and section-wise suggestions instantly.
//                 </p>
//               </div>

//               <div className="rounded-2xl bg-slate-50 p-6">
//                 <p className="text-sm font-semibold text-slate-500">Step 3</p>
//                 <h4 className="mt-2 text-xl font-semibold">Practice Interviews</h4>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">
//                   Simulate interviews with AI and improve with real-time feedback reports.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-10">
//           <div className="rounded-[32px] bg-black px-8 py-12 text-center text-white shadow-2xl">
//             <h3 className="text-3xl font-bold">Build your best application with HireSense AI</h3>
//             <p className="mx-auto mt-4 max-w-2xl text-slate-300">
//               Start with resume analysis, discover missing skills, and prepare with confidence for your next role.
//             </p>
//             <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//               <a
//                 href="/signup"
//                 className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-slate-200"
//               >
//                 Create Account
//               </a>
//               <a
//                 href="/dashboard"
//                 className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
//               >
//                 View Dashboard
//               </a>
//             </div>
//           </div>
//         </section>
//       </section>
//     </main>
//   );
// }/////*/
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <main className="grid-pattern min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}