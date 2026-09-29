
import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-black tracking-wide"
        >
          <Dumbbell className="h-6 w-6 text-lime-400" />

          <span className="text-lime-400">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library.
          <br className="sm:hidden" />
          {" "}Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}