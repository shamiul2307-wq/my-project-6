
 import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

export default function WorkoutCard({ workout,serial }) {
  const {
    id,
    name,
    image,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    rating,
    muscleGroups = [],
  } = workout;

  
    return (
  <Link href={`/workout/${id}`}>
    <article className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#111] transition duration-300 hover:-translate-y-1 hover:border-lime-400/50">

      {/* Serial Number */}
      <span className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
        {serial}
      </span>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        {difficulty && (
          <span className="absolute right-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-lime-400 backdrop-blur">
            {difficulty}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {muscleGroups.slice(0, 3).map((muscle, index) => (
            <span
              key={`${muscle}-${index}`}
              className="rounded-full border border-gray-700 px-2.5 py-1 text-xs text-gray-400"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="text-xl font-bold uppercase text-white">
          {name}
        </h3>

        {/* Equipment */}
        <div className="mt-3 text-sm text-gray-400">
          {equipment || "No equipment"}
        </div>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4 text-sm text-gray-400">
          <span>◷ {duration || 0} min</span>

          <span>{caloriesBurned || 0} kcal</span>

          <span className="text-yellow-400">
        {rating || 0}
          </span>
        </div>

      </div>
    </article>
  </Link>
);
  
}