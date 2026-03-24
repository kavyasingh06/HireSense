// "use client";

// import { useState } from "react";
// import Sidebar from "@/components/dashboard/Sidebar";
// import Topbar from "@/components/dashboard/Topbar";
// import Cards from "@/components/dashboard/Cards";

// type AnalyzeResponse = {
//   ats_score: number;
//   matched_skills: string[];
//   missing_skills: string[];
//   total_jd_skills: number;
//   suggestions: string[];
//   message: string;
// };

// export default function DashboardPage() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [jobDescription, setJobDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState<AnalyzeResponse | null>(null);
//   const [error, setError] = useState("");

//   // 🔥 ANALYZE FUNCTION
//   const handleAnalyze = async () => {
//     if (!selectedFile) {
//       setError("Please upload a resume first.");
//       return;
//     }

//     if (!jobDescription.trim()) {
//       setError("Please paste a job description.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const storedUser = localStorage.getItem("user");
//       const parsedUser = storedUser ? JSON.parse(storedUser) : null;

//       const formData = new FormData();
//       formData.append("file", selectedFile);
//       formData.append("job_description", jobDescription);
//       formData.append("user_id", String(parsedUser?.id || 1)); // 🔥 IMPORTANT

//       const res = await fetch("http://127.0.0.1:8000/analyze", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(JSON.stringify(data));
//         return;
//       }

//       setResult(data);
//     } catch {
//       setError("Something went wrong while analyzing the resume.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔥 DOWNLOAD REPORT
//   const downloadReport = () => {
//     if (!result) return;

//     const blob = new Blob(
//       [JSON.stringify(result, null, 2)],
//       { type: "application/json" }
//     );

//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "analysis-report.json";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   // 🔥 CALCULATIONS
//   const skillsMatch =
//     result && result.total_jd_skills > 0
//       ? Math.round(
//           (result.matched_skills.length / result.total_jd_skills) * 100
//         )
//       : 0;

//   const interviewReadiness = result
//     ? Math.max(0, Math.min(100, Math.round(result.ats_score * 0.9)))
//     : 0;

//   return (
//     <main className="flex min-h-screen bg-zinc-100">
//       <Sidebar />

//       <section className="flex-1">
//         <Topbar />

//         {/* 🔥 CARDS */}
//         <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-4">
//           <Cards
//             title="ATS Score"
//             value={result ? `${result.ats_score}%` : "--"}
//             subtitle={
//               result
//                 ? "Based on resume and job description match"
//                 : "Run analysis to see score"
//             }
//           />
//           <Cards
//             title="Skills Match"
//             value={result ? `${skillsMatch}%` : "--"}
//             subtitle={
//               result
//                 ? "Matched required skills from JD"
//                 : "Awaiting analysis"
//             }
//           />
//           <Cards
//             title="Missing Skills"
//             value={result ? `${result.missing_skills.length}` : "--"}
//             subtitle={
//               result
//                 ? "Detected from job description"
//                 : "Awaiting analysis"
//             }
//           />
//           <Cards
//             title="Interview Readiness"
//             value={result ? `${interviewReadiness}%` : "--"}
//             subtitle={
//               result
//                 ? "Estimated from ATS alignment"
//                 : "Awaiting analysis"
//             }
//           />
//         </div>

//         {/* 🔥 INPUT SECTION */}
//         <div className="grid gap-6 px-8 pb-8 lg:grid-cols-2">
//           {/* Resume Upload */}
//           <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
//             <h2 className="text-xl font-bold text-black">Resume Upload</h2>
//             <p className="mt-2 text-sm text-zinc-500">
//               Upload your latest resume here for ATS and skill analysis.
//             </p>

//             <div className="mt-6 rounded-2xl border-2 border-dashed border-zinc-300 p-6 text-center">
//               <input
//                 type="file"
//                 accept=".pdf,.docx"
//                 onChange={(e) =>
//                   setSelectedFile(e.target.files?.[0] || null)
//                 }
//                 className="block w-full text-sm text-zinc-600"
//               />
//               <p className="mt-3 text-sm text-zinc-500">
//                 {selectedFile
//                   ? `Selected: ${selectedFile.name}`
//                   : "Upload PDF or DOCX resume"}
//               </p>
//             </div>
//           </div>

//           {/* Job Description */}
//           <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
//             <h2 className="text-xl font-bold text-black">
//               Job Description Input
//             </h2>

//             <textarea
//               placeholder="Paste job description here..."
//               value={jobDescription}
//               onChange={(e) => setJobDescription(e.target.value)}
//               className="mt-6 h-48 w-full rounded-2xl border border-zinc-300 bg-white p-4 text-black placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-pink-400"
//             />

//             <button
//               onClick={handleAnalyze}
//               disabled={loading}
//               className="mt-4 w-full rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 px-4 py-3 font-semibold text-white shadow-lg"
//             >
//               {loading ? "Analyzing..." : "Analyze Resume"}
//             </button>

//             {error && (
//               <p className="mt-4 text-sm text-red-500">{error}</p>
//             )}
//           </div>
//         </div>

//         {/* 🔥 MATCHED + MISSING */}
//         <div className="grid gap-6 px-8 pb-8 lg:grid-cols-2">
//           {/* Matched */}
//           <div className="rounded-3xl bg-white p-6 shadow">
//             <h2 className="font-bold text-black">Matched Skills</h2>

//             <div className="mt-4 flex flex-wrap gap-2">
//               {result ? (
//                 result.matched_skills.length > 0 ? (
//                   result.matched_skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
//                     >
//                       {skill}
//                     </span>
//                   ))
//                 ) : (
//                   <p>No matched skills found</p>
//                 )
//               ) : (
//                 <p>No analysis yet</p>
//               )}
//             </div>
//           </div>

//           {/* Missing */}
//           <div className="rounded-3xl bg-white p-6 shadow">
//             <h2 className="font-bold text-black">Missing Skills</h2>

//             <div className="mt-4 flex flex-wrap gap-2">
//               {result ? (
//                 result.missing_skills.length > 0 ? (
//                   result.missing_skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700"
//                     >
//                       {skill}
//                     </span>
//                   ))
//                 ) : (
//                   <p>No missing skills</p>
//                 )
//               ) : (
//                 <p>No analysis yet</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* 🔥 SUGGESTIONS + DOWNLOAD */}
//         <div className="grid gap-6 px-8 pb-8 lg:grid-cols-2">
//           <div className="rounded-3xl bg-white p-6 shadow">
//             <h2 className="font-bold text-black">AI Suggestions</h2>

//             <div className="mt-4 space-y-2">
//               {result ? (
//                 result.suggestions.map((s, i) => (
//                   <p key={i} className="text-sm text-zinc-700">
//                     • {s}
//                   </p>
//                 ))
//               ) : (
//                 <p>No suggestions yet</p>
//               )}
//             </div>
//           </div>

//           <div className="rounded-3xl bg-white p-6 shadow">
//             <h2 className="font-bold text-black">Analysis Summary</h2>

//             <div className="mt-4 space-y-2 text-sm">
//               <p>ATS Score: {result?.ats_score ?? "--"}</p>
//               <p>Matched: {result?.matched_skills.length ?? "--"}</p>
//               <p>Missing: {result?.missing_skills.length ?? "--"}</p>
//             </div>

//             {result && (
//               <button
//                 onClick={downloadReport}
//                 className="mt-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 px-4 py-2 text-white"
//               >
//                 Download Report
//               </button>
//             )}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import Cards from "@/components/dashboard/Cards";
import AnalysisChart from "@/components/dashboard/AnalysisChart";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

type AnalyzeResponse = {
  ats_score: number;
  matched_skills: string[];
  missing_skills: string[];
  total_jd_skills: number;
  suggestions: string[];
  message: string;
};

type UserType = {
  id?: number;
  full_name: string;
  email: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<UserType | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError("Please upload a resume first.");
      return;
    }

    if (!jobDescription.trim()) {
      setError("Please paste a job description.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const storedUser = localStorage.getItem("user");
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("job_description", jobDescription);
      formData.append("user_id", String(parsedUser?.id || 1));

      const res = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Analysis failed");
        return;
      }

      setResult(data);
    } catch {
      setError("Something went wrong while analyzing the resume.");
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = () => {
    if (!result) return;

    const blob = new Blob([JSON.stringify(result, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "analysis-report.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const skillsMatch =
    result && result.total_jd_skills > 0
      ? Math.round(
          (result.matched_skills.length / result.total_jd_skills) * 100
        )
      : 0;

  const interviewReadiness = result
    ? Math.max(0, Math.min(100, Math.round(result.ats_score * 0.9)))
    : 0;

  return (
    <main className="flex min-h-screen bg-zinc-100">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="px-8 pt-6">
          <h1 className="text-2xl font-bold text-black">Dashboard</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Welcome, {user ? user.full_name : "Loading..."}
          </p>
        </div>

        <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-4">
          <Cards
            title="ATS Score"
            value={result ? `${result.ats_score}%` : "--"}
            subtitle={
              result
                ? "Based on resume and job description match"
                : "Run analysis to see score"
            }
          />
          <Cards
            title="Skills Match"
            value={result ? `${skillsMatch}%` : "--"}
            subtitle={
              result
                ? "Matched required skills from JD"
                : "Awaiting analysis"
            }
          />
          <Cards
            title="Missing Skills"
            value={result ? `${result.missing_skills.length}` : "--"}
            subtitle={
              result
                ? "Detected from job description"
                : "Awaiting analysis"
            }
          />
          <Cards
            title="Interview Readiness"
            value={result ? `${interviewReadiness}%` : "--"}
            subtitle={
              result
                ? "Estimated from ATS alignment"
                : "Awaiting analysis"
            }
          />
        </div>

        <div className="px-8 pb-8">
          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="mb-4 text-lg font-bold text-black">
              Performance Overview
            </h2>

            {result ? (
              <AnalysisChart
                atsScore={result.ats_score}
                skillsMatch={skillsMatch}
                interviewReadiness={interviewReadiness}
              />
            ) : (
              <p className="text-sm text-zinc-500">
                Run analysis to see chart
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 px-8 pb-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-black">Resume Upload</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Upload your latest resume here for ATS and skill analysis.
            </p>

            <div className="mt-6 rounded-2xl border-2 border-dashed border-zinc-300 p-6 text-center">
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                className="block w-full text-sm text-zinc-600"
              />
              <p className="mt-3 text-sm text-zinc-500">
                {selectedFile
                  ? `Selected: ${selectedFile.name}`
                  : "Upload PDF or DOCX resume"}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-black">
              Job Description Input
            </h2>

            <textarea
              placeholder="Paste job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="mt-6 h-48 w-full rounded-2xl border border-zinc-300 bg-white p-4 text-black placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="mt-4 w-full rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 px-4 py-3 font-semibold text-white shadow-lg"
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>

            {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
          </div>
        </div>

        <div className="grid gap-6 px-8 pb-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-bold text-black">Matched Skills</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {result ? (
                result.matched_skills.length > 0 ? (
                  result.matched_skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p>No matched skills found</p>
                )
              ) : (
                <p>No analysis yet</p>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-bold text-black">Missing Skills</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {result ? (
                result.missing_skills.length > 0 ? (
                  result.missing_skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p>No missing skills</p>
                )
              ) : (
                <p>No analysis yet</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 px-8 pb-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-bold text-black">AI Suggestions</h2>

            <div className="mt-4 space-y-2">
              {result ? (
                result.suggestions.map((s, i) => (
                  <p key={i} className="text-sm text-zinc-700">
                    • {s}
                  </p>
                ))
              ) : (
                <p>No suggestions yet</p>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-bold text-black">Analysis Summary</h2>

            <div className="mt-4 space-y-2 text-sm">
              <p>ATS Score: {result?.ats_score ?? "--"}</p>
              <p>Matched: {result?.matched_skills.length ?? "--"}</p>
              <p>Missing: {result?.missing_skills.length ?? "--"}</p>
            </div>

            {result && (
              <button
                onClick={downloadReport}
                className="mt-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 px-4 py-2 text-white"
              >
                Download Report
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}