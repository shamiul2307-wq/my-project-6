
const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch workouts");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Workout API Error:", error);

    return [];
  }
}

export async function getWorkoutById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Single Workout API Error:", error);

    return null;
  }
}
