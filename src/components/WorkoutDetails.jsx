"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Bookmark } from "lucide-react";
import { useFitLog } from "./FitLogProvider";

export default function WorkoutDetails({ workout }) {
  const { addToPlan, saveWorkout } = useFitLog();
 
  const handleAddToPlan = () => {
    const result = addToPlan(workout);
    alert(result.message);
  };

  const handleSave = () => {
    const result = saveWorkout(workout);
    alert(result.message);
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-gray-400 hover:text-[#b7ff3c]"
        >
          <ArrowLeft size={18} />
          Back to workouts
        </Link>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={
                workout?.image ||
                workout?.imageUrl ||
                workout?.thumbnail ||
                "/assets/banner.png"
              }
              alt={workout?.name || "Workout"}
              className="h-full min-h-[350px] w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="py-2">

            <h1 className="text-3xl font-black uppercase md:text-5xl">
              {workout?.name || workout?.title || "Workout"}
            </h1>

            <p className="mt-4 leading-7 text-gray-400">
              {workout?.description ||
                "A great workout to improve your strength and fitness."}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge bg-white/10 text-gray-300">
                {workout?.category || "Workout"}
              </span>

              <span className="badge bg-white/10 text-gray-300">
                {workout?.difficulty || "Intermediate"}
              </span>
            </div>

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#151515] p-4">
                <p className="text-xs text-gray-500">EQUIPMENT</p>
                <p className="mt-1 font-bold">
                  {workout?.equipment || "Gym Equipment"}
                </p>
              </div>

              <div className="rounded-xl bg-[#151515] p-4">
                <p className="text-xs text-gray-500">DURATION</p>
                <p className="mt-1 font-bold">
                  {workout?.duration ||
                    workout?.durationMinutes ||
                    0}{" "}
                  min
                </p>
              </div>

               <div className="rounded-xl bg-[#151515] p-4">
  <p className="text-xs text-gray-500">CALORIES</p>

  <p className="mt-1 font-bold">
    {workout?.calories ||
      workout?.calorie ||
      workout?.caloriesBurned ||
      workout?.calorieBurn ||
      0}{" "}
    cal
  </p>
</div>

              <div className="rounded-xl bg-[#151515] p-4">
                <p className="text-xs text-gray-500">RATING</p>
                <p className="mt-1 font-bold">
                  ★ {workout?.rating || "N/A"}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={handleAddToPlan}
                className="btn border-0 bg-[#b7ff3c] text-black hover:bg-[#a8ef2f]"
              >
                <Plus size={18} />
                Add to today's plan
              </button>

              <button
                onClick={handleSave}
                className="btn border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                <Bookmark size={18} />
                Save for later
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}