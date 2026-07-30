"use client";

import { NAVIGATION } from "@/lib/constants";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-[260px] flex-col border-r border-slate-800 bg-slate-950">
      {/* Logo */}

      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold text-white">
          AI Studio
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Intelligent Development Platform
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">
        {NAVIGATION.map((item) => (
          <SidebarItem
            key={item.href}
            item={item}
          />
        ))}
      </nav>

      {/* Footer */}

      <div className="border-t border-slate-800 p-4">
        <p className="text-xs text-slate-500">
          AI Studio v1.0
        </p>
      </div>
    </aside>
  );
}