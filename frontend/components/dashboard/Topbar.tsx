"use client";

import { useEffect, useState } from "react";

type UserType = {
  full_name: string;
  email: string;
};

export default function Topbar() {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-8 py-5">
      <div>
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        <p className="text-sm text-zinc-500">
          Track your resume strength and interview readiness
        </p>
      </div>

      <div className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white">
        {user ? user.full_name : "Loading..."}
      </div>
    </div>
  );
}