"use client";

export default function NotebookToolbar() {
  return (
    <div className="border-b border-slate-800 bg-[#111827]">

      <div className="mx-auto flex max-w-7xl items-center gap-3 px-8 py-4">

        <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700">

          Save

        </button>

        <button className="rounded-lg border border-slate-700 px-5 py-2 hover:bg-slate-800">

          Run All

        </button>

        <button className="rounded-lg border border-slate-700 px-5 py-2 hover:bg-slate-800">

          Restart Kernel

        </button>

        <button className="rounded-lg border border-slate-700 px-5 py-2 hover:bg-slate-800">

          Interrupt

        </button>

        <button className="rounded-lg border border-slate-700 px-5 py-2 hover:bg-slate-800">

          Export

        </button>

      </div>

    </div>
  );
}