import api from "@/lib/api";

import { NOTEBOOK_ENDPOINT } from "@/lib/constants";

import type { KernelStatus } from "@/types/kernel";

export async function getKernelStatus(
  notebookId: string
): Promise<KernelStatus> {
  const response = await api.get<KernelStatus>(
    `${NOTEBOOK_ENDPOINT}/${notebookId}/kernel/status`
  );

  return response.data;
}

export async function restartKernel(
  notebookId: string
) {
  return api.post(
    `${NOTEBOOK_ENDPOINT}/${notebookId}/restart`
  );
}

export async function interruptKernel(
  notebookId: string
) {
  return api.post(
    `${NOTEBOOK_ENDPOINT}/${notebookId}/interrupt`
  );
}