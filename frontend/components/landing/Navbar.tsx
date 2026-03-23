export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="bg-gradient-to-r from-purple-300 via-pink-400 to-fuchsia-400 bg-clip-text text-2xl font-bold text-transparent">
            HireSense AI
          </h1>
          <p className="text-sm text-zinc-400">
            Smart hiring prep for modern job seekers
          </p>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-zinc-300 transition hover:text-pink-300">
            Features
          </a>
          <a href="#hero" className="text-sm text-zinc-300 transition hover:text-pink-300">
            Home
          </a>
          <a href="/login" className="text-sm text-zinc-300 transition hover:text-pink-300">
            Login
          </a>
          <a
            href="/signup"
            className="rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}