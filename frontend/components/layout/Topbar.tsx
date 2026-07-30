"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-6">
      <div>
        <h2 className="text-lg font-semibold text-white">
          AI Studio
        </h2>

        <p className="text-sm text-slate-400">
          Interactive AI Development Environment
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-10 w-72 items-center rounded-lg border border-slate-700 bg-slate-900 px-3">
          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <Bell size={20} />
        </button>

        <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <UserCircle2 size={28} />
        </button>
      </div>
    </header>
  );
}