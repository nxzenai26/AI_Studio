export type KernelStatus =
  | "starting"
  | "idle"
  | "busy"
  | "restarting"
  | "interrupting"
  | "dead";

export interface Kernel {
  id: string;

  runtimeId: string;

  status: KernelStatus;

  startedAt?: string;
}

export interface RestartKernelResponse {
  success: boolean;
}

export interface InterruptKernelResponse {
  success: boolean;
}