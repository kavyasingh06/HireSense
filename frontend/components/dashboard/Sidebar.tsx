export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-white/10 bg-black p-6 text-white">
      <h2 className="text-2xl font-bold">HireSense AI</h2>
      <p className="mt-1 text-sm text-zinc-400">Candidate Dashboard</p>

      <nav className="mt-10 space-y-3">
        <a href="/dashboard" className="block rounded-xl bg-white/10 px-4 py-3">
          Overview
        </a>
        <a href="#" className="block rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white">
          Resume Upload
        </a>
        <a href="#" className="block rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white">
          ATS Analysis
        </a>
        <a href="#" className="block rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white">
          Mock Interview
        </a>
        <a href="#" className="block rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white">
          Reports
        </a>
      </nav>
    </aside>
  );
}