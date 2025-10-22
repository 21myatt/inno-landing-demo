"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function NavEng() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const enrollUrl = "http://hub.innohouse.org/"; // TEMP dummy URL

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-white">
          <Image
            src={logo}
            alt="Inno House Logo"
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-slate-300 hover:text-white">
            Home
          </Link>
          <Link href="/support" className="text-slate-300 hover:text-white">
            Support
          </Link>
          <Link href="/collaborate" className="text-slate-300 hover:text-white">
            Collaborate
          </Link>

          <a
            href={enrollUrl}
            target="_blank"
            className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 rounded-lg font-bold text-black hover:scale-105 transition"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/support"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Support
          </Link>
          <Link
            href="/collaborate"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Collaborate
          </Link>

          <a
            href={enrollUrl}
            target="_blank"
            className="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 rounded-xl font-bold text-black"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}
