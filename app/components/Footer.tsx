import { Logo } from "./Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ARS & AGS Legal and IP Associates: Your trusted partner in legal excellence.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <div className="grid gap-2">
            <h4 className="font-semibold">Practice Areas</h4>
            <Link href="/practice-areas/ipr" className="text-sm hover:underline">
              IPR
            </Link>
            <Link
              href="/practice-areas/real-estate"
              className="text-sm hover:underline"
            >
              Real Estate
            </Link>
            <Link
              href="/practice-areas/litigation"
              className="text-sm hover:underline"
            >
              Litigation
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Quick Links</h4>
            <Link href="/team" className="text-sm hover:underline">
              Our Team
            </Link>
            <Link href="/blog" className="text-sm hover:underline">
              Blog
            </Link>
            <Link href="/careers" className="text-sm hover:underline">
              Careers
            </Link>
            <Link href="/admin/login" className="text-sm hover:underline">
              Admin Login
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold">Subscribe to our Newsletter</h4>
          <form className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm md:flex-row md:px-6">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} ARS & AGS Legal and IP Associates. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
