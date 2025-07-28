"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const [id, setId] = useState("");
  const [key, setKey] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, key }),
      });

      const data = await res.json();

      if (res.ok && data.message === "success") {
        router.push("/admin");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="id">ID</Label>
            <Input
              id="id"
              placeholder="Enter your ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="key">Key</Label>
            <div className="relative">
              <Input
                id="key"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
        </div>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
      </div>
    </div>
  );
}
