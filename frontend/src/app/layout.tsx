import "./globals.css";

import { AuthProvider } from "@/contexts/AuthContext";
import { NotebookProvider } from "@/contexts/NotebookContext";

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <AuthProvider>

          <NotebookProvider>

            {children}

          </NotebookProvider>

        </AuthProvider>

        <Toaster position="top-right" />

      </body>
    </html>
  );
}