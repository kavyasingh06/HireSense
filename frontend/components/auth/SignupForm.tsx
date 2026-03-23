"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://127.0.0.1:8000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.detail || "Signup failed");
        return;
      }

      setMessage("Account created successfully. Redirecting to login...");
      setFullName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900 p-8 text-white shadow-2xl">
      <h1 className="text-3xl font-bold">Create account</h1>
      <p className="mt-2 text-sm text-zinc-400">
        Start using HireSense AI for smarter job prep.
      </p>

      <form onSubmit={handleSignup} className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-zinc-800 px-4 py-3 outline-none focus:border-pink-400/40"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-zinc-800 px-4 py-3 outline-none focus:border-pink-400/40"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">Password</label>
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-zinc-800 px-4 py-3 outline-none focus:border-pink-400/40"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 px-4 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.01] disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-pink-300">{message}</p>}

      <p className="mt-6 text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-white">
          Login
        </a>
      </p>
    </div>
  );
}