"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "./FitLogProvider";

export default function Navbar() {
  const pathname = usePathname();
const {plan ,saved}= useFitLog()
  return (
    <div className="navbar bg-[#111111] shadow-sm border-b border-[#292929] px-4 md:px-8">

      {/* LEFT SIDE */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            ☰
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-[#181818] rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-[#303030]"
          >
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "text-lime-400" : "text-white"}
              >
                Workout
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={
                  pathname === "/my-plan"
                    ? "text-lime-400"
                    : "text-white"
                }
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-lime-400 ml-2"
        >
          FITLOG
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">

          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "bg-lime-400 text-black font-bold"
                  : "text-white"
              }
            >
              Workout
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className={
                pathname === "/my-plan"
                  ? "bg-lime-400 text-black font-bold"
                  : "text-white"
              }
            >
              My Plan
            </Link>
          </li>

        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end gap-2">

        {/* Plan */}
        <Link
          href="/my-plan"
          className="badge badge-lg bg-lime-400 text-black border-none font-semibold"
        >
          Plan
        </Link>

        {/* Saved */}
        <Link
          href="/my-plan"
          className="badge badge-lg badge-outline border-lime-400 text-lime-400"
        >
          Saved
        </Link>

      </div>
    </div>
  );
}