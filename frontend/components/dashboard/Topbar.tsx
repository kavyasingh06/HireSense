export default function Topbar() {
  return (
    <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-8 py-5">
      <div>
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        <p className="text-sm text-zinc-500">Track your resume strength and interview readiness</p>
      </div>

      <div className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white">
        Kavya Singh
      </div>
    </div>
  );
}
