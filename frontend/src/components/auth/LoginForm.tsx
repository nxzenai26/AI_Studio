"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      await login(email, password);

      toast.success("Login Successful");

      router.push("/dashboard");
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ??
          "Invalid Credentials"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
    >
      <h1 className="mb-8 text-center text-3xl font-bold">
        AI Studio
      </h1>

      <div className="mb-5">
        <label className="mb-2 block">
          Email
        </label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none"
        />
      </div>

      <div className="mb-8">
        <label className="mb-2 block">
          Password
        </label>

        <div className="relative">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            required
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 pr-12 outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-3 top-3"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      <button
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 p-3 font-semibold transition hover:bg-blue-700"
      >
        {loading
          ? "Signing In..."
          : "Login"}
      </button>

      <p className="mt-6 text-center text-sm">
        Don't have an account?

        <button
          type="button"
          onClick={() =>
            router.push("/register")
          }
          className="ml-2 text-blue-400"
        >
          Register
        </button>
      </p>
    </form>
  );
}