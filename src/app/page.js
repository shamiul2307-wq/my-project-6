import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />

      <main id="library" className="container mx-auto px-4 py-16">
        <WorkoutLibrary workouts={workouts} />
      </main>
    </>
  );
} 

