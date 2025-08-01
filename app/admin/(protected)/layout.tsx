"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

const adminNavLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/cases", label: "Active Cases" },
  { href: "/admin/requests", label: "Consultation Requests" },
  { href: "/admin/contact-requests", label: "Contact Requests" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <nav className="flex flex-col gap-4">
            {adminNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <Button onClick={handleLogout} variant="destructive">
          Logout
        </Button>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
