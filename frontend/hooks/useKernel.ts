import { useCallback, useEffect, useState } from "react";

import {
  getKernelStatus,
  restartKernel,
  interruptKernel,
} from "@/services/kernel.service";

import type { KernelStatus } from "@/types/kernel";

export function useKernel(notebookId: string) {
  const [status, setStatus] =
    useState<KernelStatus>("starting");

  const [loading, setLoading] =
    useState(false);

  const refresh = useCallback(async () => {
    if (!notebookId) return;

    try {
      const current = await getKernelStatus(notebookId);
      setStatus(current);
    } catch (error) {
      console.error("Kernel status error:", error);
      setStatus("dead");
    }
  }, [notebookId]);

  async function restart() {
    if (!notebookId) return;

    try {
      setLoading(true);

      await restartKernel(notebookId);

      await refresh();
    } finally {
      setLoading(false);
    }
  }

  async function interrupt() {
    if (!notebookId) return;

    try {
      setLoading(true);

      await interruptKernel(notebookId);

      await refresh();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!notebookId) return;

    refresh();

    const interval = setInterval(refresh, 3000);

    return () => clearInterval(interval);
  }, [notebookId, refresh]);

  return {
    status,
    loading,
    restart,
    interrupt,
    refresh,
  };
}