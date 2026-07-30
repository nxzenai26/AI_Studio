interface CellExecutionProps {
  executionCount?: number | null;
}

export default function CellExecution({
  executionCount,
}: CellExecutionProps) {
  return (
    <div className="flex w-16 items-start justify-center pt-5 text-sm font-semibold text-slate-500">
      In&nbsp;
      [
      {executionCount ?? " "}
      ]
    </div>
  );
}