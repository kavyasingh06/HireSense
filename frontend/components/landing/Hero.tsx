export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] overflow-hidden px-6 py-16 text-white"
    >
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="hero-glow">
          <span className="inline-block rounded-full border border-pink-400/20 bg-white/10 px-4 py-2 text-sm text-pink-200 backdrop-blur-xl">
            AI Resume Review • ATS Matching • Mock Interviews
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Land more interviews with a{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
              smarter job-prep assistant
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-300">
            HireSense AI helps you analyze your resume, compare it against job
            descriptions, find missing skills, and practice interviews with
            personalized feedback.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/signup"
              className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-105"
            >
              Start Free
            </a>
            <a
              href="/dashboard"
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-center font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              View Dashboard
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-2xl font-bold">95%</p>
              <p className="text-sm text-zinc-400">Resume match clarity</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-2xl font-bold">4x</p>
              <p className="text-sm text-zinc-400">Faster prep workflow</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-zinc-400">AI interview practice</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-pink-500/10 backdrop-blur-xl">
          <div className="rounded-3xl bg-[#0f0a1a]/90 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Candidate Dashboard</p>
                <h2 className="text-2xl font-bold">Resume Match Report</h2>
              </div>
              <div className="rounded-xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
                ATS Score: 86%
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Skills Match</span>
                  <span>82%</span>
                </div>
                <div className="h-3 rounded-full bg-zinc-700">
                  <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Keyword Coverage</span>
                  <span>74%</span>
                </div>
                <div className="h-3 rounded-full bg-zinc-700">
                  <div className="h-3 w-[74%] rounded-full bg-gradient-to-r from-fuchsia-400 to-pink-400" />
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm font-semibold">Missing Skills</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["System Design", "Docker", "FastAPI", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-pink-400/10 bg-pink-500/10 px-3 py-1 text-xs text-pink-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-purple-500/15 to-pink-500/15 p-4 text-white">
                <p className="text-sm font-semibold text-pink-200">AI Suggestion</p>
                <p className="mt-2 text-sm text-zinc-200">
                  Add measurable impact in project bullets, include missing backend tools,
                  and tailor your summary to the target role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}