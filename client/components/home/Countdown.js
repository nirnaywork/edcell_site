"use client";

import { useEffect, useMemo, useState } from "react";

function getTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime();
  const difference = Math.max(target - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));

    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const units = useMemo(
    () => [
      { label: "Days", value: timeLeft?.days ?? null },
      { label: "Hours", value: timeLeft?.hours ?? null },
      { label: "Minutes", value: timeLeft?.minutes ?? null },
      { label: "Seconds", value: timeLeft?.seconds ?? null }
    ],
    [timeLeft]
  );

  return (
    <section
      className="rounded-xl border border-surface/15 bg-surface/10 p-5 shadow-lift backdrop-blur sm:p-6"
      aria-label="Countdown to E-Summit 2026"
    >
      <div className="rounded-xl border border-accent/25 bg-dark/30 p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-light">
          Countdown
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="rounded-xl border border-surface/10 bg-surface/10 p-4 text-center"
            >
              <p className="font-serif text-4xl font-bold text-surface">
                {unit.value === null ? "--" : String(unit.value).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-surface/70">
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
