
/* import { notFound } from "next/navigation";
import WorkoutDetails from "../../../components/WorkoutDetails";

const API_URL = "https://api.abocz.workers.dev/api/fitlog";

 async function getWorkout(id) {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const workouts = await response.json();

  console.log ("URL ID:" ,id)
   console.log("WORKOUTS:", workouts)
   return(
(workouts)=>string (workouts) === string(id)
   );
}catch(error){
    console.error ("workout fetch error" ,error);
    return null
}
}

console.log("ALL WORKOUTS:", workouts);

const foundWorkout = workouts.find(
  (workout) => String(workout.id) === String(id)
);

console.log("CURRENT WORKOUT:", foundWorkout);

return foundWorkout;

  


export default async function WorkoutPage({ params }) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}*/


import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutDetails from "@/components/WorkoutDetails";

export default async function WorkoutPage({ params }) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <WorkoutDetails workout={workout} />
    </main>
  );
}