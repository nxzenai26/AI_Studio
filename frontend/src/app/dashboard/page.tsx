"use client";

import { useMemo, useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SearchBar from "@/components/dashboard/SearchBar";
import StatsCard from "@/components/dashboard/StatsCard";
import CreateNotebookModal from "@/components/notebook/CreateNotebookModal";
import FloatingCreateButton from "@/components/dashboard/FloatingCreateButton";
import NotebookCard from "@/components/notebook/NotebookCard";

import useNotebook from "@/hooks/useNotebook";

import {
  BookOpen,
  PlayCircle,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  const { notebooks } = useNotebook();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    return notebooks.filter((notebook) =>
      notebook.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, notebooks]);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-3">
          <StatsCard
            title="Notebooks"
            value={notebooks.length}
            icon={<BookOpen />}
          />

          <StatsCard
            title="Executions"
            value={0}
            icon={<PlayCircle />}
          />

          <StatsCard
            title="Kernel Hours"
            value={0}
            icon={<Clock />}
          />
        </div>

        {/* Search */}
        <div className="my-8">
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

        {/* Notebook List */}
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-700 py-24 text-center">
            <h2 className="text-2xl font-semibold">
              No notebooks found
            </h2>

            <p className="mt-3 text-slate-400">
              Create your first notebook by clicking the "+" button.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((notebook) => (
              <NotebookCard
                key={notebook.id}
                notebook={notebook}
              />
            ))}
          </div>
        )}

        {/* Create Notebook Modal */}
        <CreateNotebookModal
          open={open}
          onClose={() => setOpen(false)}
        />

        {/* Floating Button */}
        <FloatingCreateButton
          onClick={() => setOpen(true)}
        />
      </DashboardLayout>
    </ProtectedRoute>
  );
}