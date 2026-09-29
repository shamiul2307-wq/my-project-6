 
/*"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedWorkouts = localStorage.getItem("fitlog-saved");

      if (savedPlan) {
        const parsedPlan = JSON.parse(savedPlan);

        // Remove null / invalid items
        setPlan(
          Array.isArray(parsedPlan)
            ? parsedPlan.filter((item) => item && item.id)
            : []
        );
      }

      if (savedWorkouts) {
        const parsedSaved = JSON.parse(savedWorkouts);

        // Remove null / invalid items
        setSaved(
          Array.isArray(parsedSaved)
            ? parsedSaved.filter((item) => item && item.id)
            : []
        );
      }
    } catch (error) {
      console.error("LocalStorage error:", error);

      setPlan([]);
      setSaved([]);
    }

    setHydrated(true);
  }, []);

  // Save plan
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, hydrated]);

  // Save saved workouts
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, hydrated]);

  // Add workout to today's plan
  const addToPlan = (workout) => {
    if (!workout || !workout.id) {
      return {
        success: false,
        message: "Invalid workout",
      };
    }

    if (plan.some((item) => item && item.id === workout.id)) {
      return {
        success: false,
        message: "Already added to today's plan",
      };
    }

    if (plan.length >= 5) {
      return {
        success: false,
        message: "You can add maximum 5 workouts",
      };
    }

    setPlan((prev) => [
      ...prev,
      {
        ...workout,
        done: false,
      },
    ]);

    return {
      success: true,
      message: "Added to today's plan",
    };
  };

  // Save workout
  const saveWorkout = (workout) => {
    if (!workout || !workout.id) {
      return {
        success: false,
        message: "Invalid workout",
      };
    }

    if (saved.some((item) => item && item.id === workout.id)) {
      return {
        success: false,
        message: "Already saved",
      };
    }

    setSaved((prev) => [
      ...prev,
      workout,
    ]);

    return {
      success: true,
      message: "Saved for later",
    };
  };

  // Remove from plan
  const removeFromPlan = (id) => {
    setPlan((prev) =>
      prev.filter((item) => item && item.id !== id)
    );
  };

  // Remove from saved
  const removeFromSaved = (id) => {
    setSaved((prev) =>
      prev.filter((item) => item && item.id !== id)
    );
  };

  // Mark as done
  const markDone = (id) => {
    setPlan((prev) =>
      prev.map((item) =>
        item && item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedWorkouts = localStorage.getItem("fitlog-saved");

      if (savedPlan) {
        const parsedPlan = JSON.parse(savedPlan);

        // Remove null / invalid items
        setPlan(
          Array.isArray(parsedPlan)
            ? parsedPlan.filter((item) => item && item.id)
            : []
        );
      }

      if (savedWorkouts) {
        const parsedSaved = JSON.parse(savedWorkouts);

        // Remove null / invalid items
        setSaved(
          Array.isArray(parsedSaved)
            ? parsedSaved.filter((item) => item && item.id)
            : []
        );
      }
    } catch (error) {
      console.error("LocalStorage error:", error);

      setPlan([]);
      setSaved([]);
    }

    setHydrated(true);
  }, []);

  // Save plan
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, hydrated]);

  // Save saved workouts
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, hydrated]);

  // Add workout to today's plan
  const addToPlan = (workout) => {
    if (!workout || !workout.id) {
      return {
        success: false,
        message: "Invalid workout",
      };
    }

    if (plan.some((item) => item && item.id === workout.id)) {
      return {
        success: false,
        message: "Already added to today's plan",
      };
    }

    if (plan.length >= 5) {
      return {
        success: false,
        message: "You can add maximum 5 workouts",
      };
    }

    setPlan((prev) => [
      ...prev,
      {
        ...workout,
        done: false,
      },
    ]);

    return {
      success: true,
      message: "Added to today's plan",
    };
  };

  // Save workout
  const saveWorkout = (workout) => {
    if (!workout || !workout.id) {
      return {
        success: false,
        message: "Invalid workout",
      };
    }

    if (saved.some((item) => item && item.id === workout.id)) {
      return {
        success: false,
        message: "Already saved",
      };
    }

    setSaved((prev) => [
      ...prev,
      workout,
    ]);

    return {
      success: true,
      message: "Saved for later",
    };
  };

  // Remove from plan
  const removeFromPlan = (id) => {
    setPlan((prev) =>
      prev.filter((item) => item && item.id !== id)
    );
  };

  // Remove from saved
  const removeFromSaved = (id) => {
    setSaved((prev) =>
      prev.filter((item) => item && item.id !== id)
    );
  };

  // Mark as done
  const markDone = (id) => {
    setPlan((prev) =>
      prev.map((item) =>
        item && item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}
*/
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedWorkouts = localStorage.getItem("fitlog-saved");

      if (savedPlan) {
        const parsedPlan = JSON.parse(savedPlan);

        setPlan(
          Array.isArray(parsedPlan)
            ? parsedPlan.filter((item) => item && item.id)
            : []
        );
      }

      if (savedWorkouts) {
        const parsedSaved = JSON.parse(savedWorkouts);

        setSaved(
          Array.isArray(parsedSaved)
            ? parsedSaved.filter((item) => item && item.id)
            : []
        );
      }
    } catch (error) {
      console.error("LocalStorage error:", error);
      setPlan([]);
      setSaved([]);
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(
        "fitlog-plan",
        JSON.stringify(plan)
      );
    }
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(
        "fitlog-saved",
        JSON.stringify(saved)
      );
    }
  }, [saved, hydrated]);

  const addToPlan = (workout) => {
    if (!workout || !workout.id) {
      return {
        success: false,
        message: "Invalid workout",
      };
    }

    if (plan.some((item) => item && item.id === workout.id)) {
      return {
        success: false,
        message: "Already added to today's plan",
      };
    }

    if (plan.length >= 5) {
      return {
        success: false,
        message: "You can add maximum 5 workouts",
      };
    }

    setPlan((prev) => [
      ...prev,
      {
        ...workout,
        done: false,
      },
    ]);

    return {
      success: true,
      message: "Added to today's plan",
    };
  };

  const saveWorkout = (workout) => {
    if (!workout || !workout.id) {
      return {
        success: false,
        message: "Invalid workout",
      };
    }

    if (saved.some((item) => item && item.id === workout.id)) {
      return {
        success: false,
        message: "Already saved",
      };
    }

    setSaved((prev) => [...prev, workout]);

    return {
      success: true,
      message: "Saved for later",
    };
  };

  const removeFromPlan = (id) => {
    setPlan((prev) =>
      prev.filter((item) => item && item.id !== id)
    );
  };

  const removeFromSaved = (id) => {
    setSaved((prev) =>
      prev.filter((item) => item && item.id !== id)
    );
  };

  const markDone = (id) => {
    setPlan((prev) =>
      prev.map((item) =>
        item && item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}