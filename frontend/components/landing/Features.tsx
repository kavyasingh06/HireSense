const features = [
  {
    title: "ATS Score Analysis",
    desc: "See how well your resume matches a job description with clear scoring and actionable insights.",
  },
  {
    title: "Missing Skills Detection",
    desc: "Identify keywords, tools, and competencies missing from your resume before you apply.",
  },
  {
    title: "AI Mock Interviews",
    desc: "Practice role-specific interview questions and get instant feedback on your answers.",
  },
  {
    title: "Resume Suggestions",
    desc: "Get section-wise suggestions to strengthen clarity, impact, and recruiter appeal.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-pink-300/80">
            Features
          </p>
          <h2 className="mt-3 text-4xl font-bold">
            Everything you need to get interview-ready
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Designed to help students and job seekers improve resumes, understand
            job requirements, and prepare with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-pink-400/30 hover:shadow-xl hover:shadow-pink-500/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-sm font-bold text-pink-200">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}