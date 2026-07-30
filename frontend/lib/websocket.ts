import { WS_URL } from "./constants";

export interface WebSocketMessage {
  type: string;

  payload: unknown;
}

export class NotebookWebSocket {
  private socket?: WebSocket;

  connect(path: string) {
    this.socket =
      new WebSocket(`${WS_URL}${path}`);
  }

  disconnect() {
    this.socket?.close();
  }

  send(message: WebSocketMessage) {
    this.socket?.send(
      JSON.stringify(message)
    );
  }

  onOpen(
    callback: () => void
  ) {
    if (!this.socket) return;

    this.socket.onopen = callback;
  }

  onClose(
    callback: () => void
  ) {
    if (!this.socket) return;

    this.socket.onclose = callback;
  }

  onError(
    callback: (e: Event) => void
  ) {
    if (!this.socket) return;

    this.socket.onerror = callback;
  }

  onMessage<T>(
    callback: (payload: T) => void
  ) {
    if (!this.socket) return;

    this.socket.onmessage = (event) => {
      callback(JSON.parse(event.data));
    };
  }
}

export const notebookWS =
  new NotebookWebSocket();