"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import AuthService from "@/services/auth.service";

export default function RegisterForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    full_name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  async function submit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      await AuthService.register(form);

      toast.success(
        "Registration Successful"
      );

      router.push("/login");
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ??
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-lg rounded-xl border border-slate-800 bg-slate-900 p-8"
    >
      <h1 className="mb-8 text-center text-3xl font-bold">
        Create Account
      </h1>

      {[
        "username",
        "full_name",
        "email",
        "password",
      ].map((field) => (
        <input
          key={field}
          type={
            field === "password"
              ? "password"
              : "text"
          }
          placeholder={field.replace(
            "_",
            " "
          )}
          value={
            form[
              field as keyof typeof form
            ]
          }
          onChange={(e) =>
            setForm({
              ...form,
              [field]:
                e.target.value,
            })
          }
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
        />
      ))}

      <button className="mt-3 w-full rounded-lg bg-blue-600 p-3">
        {loading
          ? "Creating..."
          : "Register"}
      </button>
    </form>
  );
}