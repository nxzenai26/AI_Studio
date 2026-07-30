"use client";

import type { NotebookCell as Cell } from "@/types/notebook";
import type { ExecuteCellResponse } from "@/types/execution";

import CellExecution from "./CellExecution";
import CellToolbar from "./CellToolbar";
import CodeEditor from "./editor/CodeEditor";
import ExecutionStatus from "./ExecutionStatus";

import { useExecution } from "@/hooks/useExecution";

interface NotebookCellProps {
  cell: Cell;

  onChange: (
    id: string,
    source: string
  ) => void;

  onDelete: (id: string) => void;

  onDuplicate: (cell: Cell) => void;

  onMoveUp: (id: string) => void;

  onMoveDown: (id: string) => void;

  onExecutionComplete?: (
    cellId: string,
    result: ExecuteCellResponse
  ) => void;
}

export default function NotebookCell({
  cell,
  onChange,
  onDelete,
  onDuplicate,
  onMoveUp,
  onMoveDown,
  onExecutionComplete,
}: NotebookCellProps) {
  const { execute, running } = useExecution();

  async function handleRun() {
    const result = await execute({
      notebookId: cell.notebook_id,
      cellId: cell.id,
      code: cell.source,
    });

    if (!result) return;

    onExecutionComplete?.(cell.id, result);
  }

  return (
    <div className="group flex gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
      {/* Execution Counter */}
      <CellExecution
        executionCount={cell.execution_count}
      />

      <div className="flex-1">
        {/* Toolbar */}
        <div className="mb-3 flex justify-end">
          <CellToolbar
            running={running}
            onRun={handleRun}
            onDelete={() => onDelete(cell.id)}
            onDuplicate={() => onDuplicate(cell)}
            onMoveUp={() => onMoveUp(cell.id)}
            onMoveDown={() => onMoveDown(cell.id)}
          />
        </div>

        {/* Monaco Editor */}
        <CodeEditor
          language={
            cell.cell_type === "markdown"
              ? "markdown"
              : "python"
          }
          value={cell.source}
          onChange={(value) =>
            onChange(cell.id, value)
          }
        />

        {/* Execution Status */}
        <div className="mt-3">
          <ExecutionStatus
            status={
              running
                ? "running"
                : cell.status
            }
            executionTime={
              cell.execution_time
            }
          />
        </div>
      </div>
    </div>
  );
}