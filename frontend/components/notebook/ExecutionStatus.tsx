"use client";

import { Loader2 } from "lucide-react";

import type { CellExecutionStatus } from "@/types/execution";

interface Props {
    status: CellExecutionStatus;
    executionTime?: number;
}

export default function ExecutionStatus({
    status,
    executionTime,
}: Props) {
    switch (status) {
        case "running":
            return (
                <div className="flex items-center gap-2 text-blue-400">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Running...
                </div>
            );

        case "queued":
            return (
                <div className="text-yellow-400">
                    Queued...
                </div>
            );

        case "success":
            return (
                <div className="text-green-400">
                    ✓ Executed
                    {executionTime !== undefined &&
                        ` (${executionTime.toFixed(2)} ms)`}
                </div>
            );

        case "error":
            return (
                <div className="text-red-400">
                    ✕ Execution Failed
                </div>
            );

        default:
            return (
                <div className="text-slate-500">
                    Idle
                </div>
            );
    }
}