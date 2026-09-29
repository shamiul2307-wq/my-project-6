
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Clock3,
  Flame,
  Trash2,
  Eye,
  Dumbbell,
  Bookmark,
} from "lucide-react";

import { useFitLog } from "./FitLogProvider";

export default function MyPlan() {
  const {
    plan = [],
    saved = [],
    removeFromPlan,
    removeFromSaved,
    markDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = React.useState("plan");

  // Remove invalid data
  const cleanPlan = plan.filter(
    (workout) => workout && workout.id
  );

  const cleanSaved = saved.filter(
    (workout) => workout && workout.id
  );

  const currentList =
    activeTab === "plan" ? cleanPlan : cleanSaved;

  // Get duration
  const getDuration = (workout) => {
    return Number(
      workout?.duration ??
        workout?.durationMinutes ??
        workout?.minutes ??
        0
    );
  };

  // Get calories
  const getCalories = (workout) => {
    return Number(
      workout?.calories ??
        workout?.calorie ??
        workout?.caloriesBurned ??
        workout?.calorieBurn ??
        workout?.burnedCalories ??
        0
    );
  };

  // Total minutes
  const totalMinutes = cleanPlan.reduce(
    (total, workout) =>
      total + getDuration(workout),
    0
  );

  // Total calories
  const totalCalories = cleanPlan.reduce(
    (total, workout) =>
      total + getCalories(workout),
    0
  );

  // Remove workout
  const handleRemove = (workout) => {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);
    } else {
      removeFromSaved(workout.id);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-4 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="mb-5 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#b7ff3c]"
          >
            <ArrowLeft size={17} />
            Back to workouts
          </Link>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            MY{" "}
            <span className="text-[#b7ff3c]">
              PLAN
            </span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 md:text-base">
            Cap of five lifts for today. Finish them,
            then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Exercises */}
          <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Exercises
              </p>

              <div className="rounded-xl bg-[#b7ff3c]/10 p-2 text-[#b7ff3c]">
                <Dumbbell size={20} />
              </div>
            </div>

            <p className="text-3xl font-black">
              {cleanPlan.length}
              <span className="ml-1 text-sm font-normal text-gray-500">
                / 5
              </span>
            </p>
          </div>

          {/* Minutes */}
          <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Minutes
              </p>

              <div className="rounded-xl bg-[#b7ff3c]/10 p-2 text-[#b7ff3c]">
                <Clock3 size={20} />
              </div>
            </div>

            <p className="text-3xl font-black">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Calories
              </p>

              <div className="rounded-xl bg-[#b7ff3c]/10 p-2 text-[#b7ff3c]">
                <Flame size={20} />
              </div>
            </div>

            <p className="text-3xl font-black">
              {totalCalories}
              <span className="ml-1 text-sm font-normal text-gray-500">
                kcal
              </span>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-4">

          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
              activeTab === "plan"
                ? "bg-[#b7ff3c] text-black"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            Today's Plan

            <span className="ml-2 opacity-70">
              {cleanPlan.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
              activeTab === "saved"
                ? "bg-[#b7ff3c] text-black"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            Saved

            <span className="ml-2 opacity-70">
              {cleanSaved.length}
            </span>
          </button>
        </div>

        {/* Empty State */}
        {currentList.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/10 bg-[#111111] px-6 py-20 text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#b7ff3c]/10 text-[#b7ff3c]">
              {activeTab === "plan" ? (
                <Dumbbell size={30} />
              ) : (
                <Bookmark size={30} />
              )}
            </div>

            <h2 className="text-xl font-bold">
              {activeTab === "plan"
                ? "Your Plan is Empty"
                : "No Saved Workouts"}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              {activeTab === "plan"
                ? "Add some workouts to your plan and start training."
                : "Save workouts that you want to try later."}
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-xl bg-[#b7ff3c] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#a8ef2f]"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          /* Workout List */
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {currentList
              .filter(
                (workout) =>
                  workout && workout.id
              )
              .map((workout, index) => {

                const image =
                  workout.image ||
                  workout.imageUrl ||
                  workout.thumbnail ||
                  "/assets/banner.png";

                const name =
                  workout.name ||
                  workout.title ||
                  workout.workoutName ||
                  "Workout";

                const duration =
                  getDuration(workout);

                const calories =
                  getCalories(workout);

                return (
                  <div
                    key={`${workout.id}-${index}`}
                    className={`overflow-hidden rounded-2xl border bg-[#151515] transition ${
                      workout.done
                        ? "border-[#b7ff3c]/40 opacity-70"
                        : "border-white/10 hover:border-[#b7ff3c]/30"
                    }`}
                  >

                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                      />

                      {/* Category */}
                      <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-[#b7ff3c] backdrop-blur">
                          {workout.category ||
                            "Workout"}
                        </span>
                      </div>

                      {/* Done */}
                      {workout.done && (
                        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#b7ff3c] px-3 py-1 text-xs font-bold text-black">
                          <Check size={14} />
                          Done
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">

                      <h2
                        className={`text-xl font-black ${
                          workout.done
                            ? "text-gray-500 line-through"
                            : "text-white"
                        }`}
                      >
                        {name}
                      </h2>

                      {/* Equipment */}
                      <p className="mt-2 text-sm text-gray-500">
                        {workout.equipment ||
                          "Gym Equipment"}
                      </p>

                      {/* Stats */}
                      <div className="mt-4 flex flex-wrap gap-2">

                        <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-400">
                          <Clock3
                            size={14}
                            className="mr-1 inline"
                          />
                          {duration} min
                        </span>

                        <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-400">
                          <Flame
                            size={14}
                            className="mr-1 inline"
                          />
                          {calories} kcal
                        </span>

                        {workout.rating && (
                          <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-400">
                            ★ {workout.rating}
                          </span>
                        )}
                      </div>

                      {/* Buttons */}
                      <div className="mt-5 flex flex-wrap gap-2">

                        {/* View Details */}
                        <Link
                          href={`/workout/${workout.id}`}
                          className="btn btn-sm flex-1 border-white/10 bg-white/5 text-white hover:bg-white/10"
                        >
                          <Eye size={15} />
                          View Details
                        </Link>

                        {/* Mark Done */}
                        {activeTab === "plan" && (
                          <button
                            onClick={() =>
                              markDone(workout.id)
                            }
                            className={`btn btn-sm ${
                              workout.done
                                ? "bg-white/10 text-gray-400"
                                : "bg-[#b7ff3c] text-black hover:bg-[#a8ef2f]"
                            }`}
                          >
                            <Check size={15} />

                            {workout.done
                              ? "Done"
                              : "Mark Done"}
                          </button>
                        )}

                        {/* Remove */}
                        <button
                          onClick={() =>
                            handleRemove(workout)
                          }
                          className="btn btn-sm border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </main>
  );
}
