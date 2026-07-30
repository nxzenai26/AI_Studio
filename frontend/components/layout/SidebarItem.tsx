"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import type { NavigationItem } from "@/types/navigation";

interface SidebarItemProps {
  item: NavigationItem;
}

export default function SidebarItem({
  item,
}: SidebarItemProps) {
  const pathname = usePathname();

  const Icon = item.icon;

  const active =
    pathname === item.href;

  return (
    <Link
      href={item.href}
      className={clsx(
        "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",

        active
          ? "bg-blue-600 text-white shadow-lg"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      )}
    >
      <Icon size={20} />

      <span className="font-medium">
        {item.title}
      </span>
    </Link>
  );
}