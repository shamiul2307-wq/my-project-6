
import Link from "next/link";
import { ArrowRight, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-lime-400">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              TRAIN WITH INTENT.LoG
              <br />
               EVERY SET.
            </h1>

            <p className="mt-6 max-w-xl leading-7 text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today&apos;s plan, and watch the week&apos;s work
              add up.
            </p>

            <Link
              href="#library"
              className="btn mt-8 border-0 bg-lime-400 text-black hover:bg-lime-300"
            >
              <Dumbbell size={18} />
              BROWSE WORKOUTS
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/assets/banner.png"
              alt="FitLog workout"
              className=" w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}