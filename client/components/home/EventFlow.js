"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { useId, useState } from "react";
import { eventFlow } from "../../data/eventFlow";

export function EventFlow() {
  const [activeDay, setActiveDay] = useState(eventFlow[0].id);
  const tabId = useId();
  const active = eventFlow.find((day) => day.id === activeDay) || eventFlow[0];

  function focusTab(dayId) {
    window.requestAnimationFrame(() => {
      document.getElementById(`${tabId}-${dayId}-tab`)?.focus();
    });
  }

  function handleKeyDown(event, index) {
    const lastIndex = eventFlow.length - 1;
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = lastIndex;
    } else {
      return;
    }

    event.preventDefault();
    const nextDay = eventFlow[nextIndex].id;
    setActiveDay(nextDay);
    focusTab(nextDay);
  }

  return (
    <div className="mx-auto mt-12 max-w-4xl">
      <div
        className="grid gap-2 rounded-xl border border-border bg-surface p-2 shadow-soft sm:grid-cols-3"
        role="tablist"
        aria-label="Event days"
      >
        {eventFlow.map((day, index) => {
          const selected = activeDay === day.id;
          return (
            <button
              key={day.id}
              id={`${tabId}-${day.id}-tab`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${tabId}-${day.id}-panel`}
              tabIndex={selected ? 0 : -1}
              className={`rounded-xl px-4 py-3 text-left text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                selected
                  ? "bg-primary text-surface shadow-soft"
                  : "text-text-muted hover:bg-tint hover:text-primary"
              }`}
              onClick={() => setActiveDay(day.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="block">{day.label}</span>
              <span className="mt-1 block text-xs font-semibold opacity-80">
                {day.title}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`${tabId}-${active.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabId}-${active.id}-tab`}
        className="mt-8 rounded-xl border border-border bg-surface p-5 shadow-soft sm:p-8"
      >
        <div className="mb-7 flex items-center gap-3 text-primary">
          <CalendarDays className="h-5 w-5" aria-hidden="true" />
          <h3 className="font-serif text-2xl font-bold text-dark">
            {active.title}
          </h3>
        </div>
        <ol className="relative space-y-6 border-l border-border pl-6">
          {active.items.map((item) => (
            <li key={`${item.time}-${item.title}`} className="relative">
              <span className="absolute -left-[1.95rem] top-1 flex h-4 w-4 rounded-full border-4 border-surface bg-accent shadow-soft" />
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
                {item.time}
              </p>
              <h4 className="mt-2 font-serif text-2xl font-bold text-dark">
                {item.title}
              </h4>
              {item.venue ? (
                <p className="mt-2 flex gap-2 text-sm font-semibold text-text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item.venue}</span>
                </p>
              ) : null}
              <p className="mt-3 leading-7 text-text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
