
"use client";

import { useMemo, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { Search } from "lucide-react";

export default function WorkoutLibrary({ workouts = [] }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("duration");

  const filteredWorkouts = useMemo(() => {
    let result = [...workouts];

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((workout) => {
        const name = workout.name?.toLowerCase() || "";
        const equipment = workout.equipment?.toLowerCase() || "";
        const muscleGroups =
          workout.muscleGroups?.join(" ").toLowerCase() || "";

        return (
          name.includes(query) ||
          equipment.includes(query) ||
          muscleGroups.includes(query)
        );
      });
    }

    result.sort((a, b) => {
      if (sort === "duration") {
        return (a.duration || 0) - (b.duration || 0);
      }

      if (sort === "calories") {
        return (a.caloriesBurned || 0) - (b.caloriesBurned || 0);
      }

      if (sort === "rating") {
        return (b.rating || 0) - (a.rating || 0);
      }

      return 0;
    });

    return result;
  }, [workouts, search, sort]);

  return (
    <section>
      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="mb-2 text-sm font-bold tracking-[0.25em] text-lime-400">
            TRAIN SMART
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-2 text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        
   <div>         
            <input
              type="text"
              placeholder="Search workout..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
         

          <select
            className="select select-bordered border-gray-700 bg-gray-900"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="duration">Sort By: Duration</option>
            <option value="calories">Sort By: Calories</option>
            <option value="rating">Sort By: Rating</option>
          </select>
        </div>
      </div>

 
 
      {/* Workout Cards */}
      {filteredWorkouts.length === 0 ? (
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-12 text-center">
          <h3 className="text-xl font-bold">
            No workouts found
          </h3>

          <p className="mt-2 text-gray-400">
            Try another search.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout ,index) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              serial ={index + 1}
            />
          ))}
        </div>
      )}
    </section>
  )
  }