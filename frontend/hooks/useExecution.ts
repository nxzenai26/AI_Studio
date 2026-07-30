import { useState } from "react";

import {
  executeCell,
} from "@/services/execution.service";

import type {
  ExecuteCellRequest,
  ExecuteCellResponse,
} from "@/types/execution";

export function useExecution() {
  const [running, setRunning] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function execute(
    request: ExecuteCellRequest
  ): Promise<ExecuteCellResponse | null> {
    try {
      setRunning(true);

      setError(null);

      const response =
        await executeCell(request);

      return response;
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Execution failed"
      );

      return null;
    } finally {
      setRunning(false);
    }
  }

  return {
    execute,

    running,

    error,
  };
}