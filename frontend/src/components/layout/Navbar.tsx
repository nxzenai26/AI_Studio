"use client";

import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

      <h1 className="text-2xl font-bold">

        AI Studio

      </h1>

      <div className="text-right">

        <p className="font-medium">

          {user?.full_name}

        </p>

        <p className="text-sm text-slate-400">

          {user?.email}

        </p>

      </div>

    </header>
  );
}