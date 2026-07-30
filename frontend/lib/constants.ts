import {
  BookOpen,
  Database,
  FolderOpen,
  Package,
  Settings,
} from "lucide-react";

export const SIDEBAR_WIDTH = 260;

export const NAVIGATION = [
  {
    title: "Notebooks",
    href: "/",
    icon: BookOpen,
  },
  {
    title: "SQL Studio",
    href: "/sql",
    icon: Database,
  },
  {
    title: "Files",
    href: "/files",
    icon: FolderOpen,
  },
  {
    title: "Packages",
    href: "/packages",
    icon: Package,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },

];

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

export const WS_URL =
  process.env.NEXT_PUBLIC_WS_URL ??
  "ws://127.0.0.1:8000";

export const AUTO_SAVE_DELAY = 5000;

export const API_PREFIX = "/api/v1";

export const NOTEBOOK_ENDPOINT =
  `${API_PREFIX}/notebooks`;
