"use client";

import Link from "next/link";

import {
  Home,
  BookOpen,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 p-6">

        <h2 className="text-2xl font-bold">

          AI Studio

        </h2>

      </div>

      <nav className="flex-1 space-y-2 p-4">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800"
        >
          <Home size={18} />
          Dashboard
        </Link>

        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800"
        >
          <BookOpen size={18} />
          Notebooks
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800"
        >
          <Settings size={18} />
          Settings
        </Link>

      </nav>

    </aside>
  );
}