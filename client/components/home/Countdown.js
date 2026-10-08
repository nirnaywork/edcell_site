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
      className="border border-border bg-surface/80 p-4 shadow-lift backdrop-blur sm:p-5"
      aria-label="Countdown to E-Summit 2026"
    >
      <div className="border border-border bg-dark/45 p-4 sm:p-6">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
          Countdown
        </p>
        <div className="mt-5 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="bg-surface-2 p-4 text-center sm:p-5"
            >
              <p className="font-display text-[clamp(2.3rem,8vw,4.6rem)] font-bold leading-none tracking-[-0.03em] text-text">
                {unit.value === null ? "--" : String(unit.value).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[0.65rem] font-black uppercase tracking-[0.18em] text-text-muted">
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
