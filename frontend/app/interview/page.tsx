"use client";

import { useEffect, useState } from "react";

export default function InterviewPage() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [jobDescription, setJobDescription] = useState("");

  const generateQuestions = async () => {
    const res = await fetch("http://127.0.0.1:8000/interview/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ job_description: jobDescription }),
    });

    const data = await res.json();
    setQuestions(data.questions || []);
  };

  return (
    <main className="min-h-screen bg-zinc-100 p-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-black">Mock Interview</h1>

        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste job description..."
          className="mt-4 h-40 w-full rounded-2xl border border-zinc-300 p-4 text-black"
        />

        <button
          onClick={generateQuestions}
          className="mt-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 px-6 py-3 font-semibold text-white"
        >
          Generate Questions
        </button>

        <div className="mt-8 space-y-6">
          {questions.map((q, index) => (
            <div key={index} className="rounded-2xl border border-zinc-200 p-4">
              <p className="font-semibold text-black">{q}</p>
              <textarea
                value={answers[index] || ""}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [index]: e.target.value }))
                }
                placeholder="Type your answer..."
                className="mt-3 h-28 w-full rounded-xl border border-zinc-300 p-3 text-black"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}