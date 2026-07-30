import { useEffect } from "react";

import {
  notebookWS,
} from "@/lib/websocket";

export function useWebSocket(
  path: string,
  onMessage: (data: unknown) => void
) {
  useEffect(() => {
    notebookWS.connect(path);

    notebookWS.onMessage(onMessage);

    return () =>
      notebookWS.disconnect();
  }, [path]);
}