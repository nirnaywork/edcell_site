"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useId, useState } from "react";
import { eventFlow } from "../../data/eventFlow";

export function EventFlow() {
  const [activeDay, setActiveDay] = useState(eventFlow[0].id);
  const tabId = useId();
  const reduceMotion = useReducedMotion();
  const active = eventFlow.find((day) => day.id === activeDay) || eventFlow[0];
  const activeIndex = eventFlow.findIndex((day) => day.id === active.id);

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
    <div className="mt-14 grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
      <div
        className="top-24 h-max border border-border bg-surface p-3 shadow-soft lg:sticky"
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
              className={`group grid w-full grid-cols-[3.5rem_1fr] items-center gap-4 border-b border-border px-2 py-5 text-left transition last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                selected
                  ? "text-text"
                  : "text-text-muted hover:bg-surface-2 hover:text-text"
              }`}
              onClick={() => setActiveDay(day.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span
                className={`font-display text-3xl font-bold leading-none transition ${
                  selected ? "text-accent" : "text-border group-hover:text-primary-light"
                }`}
              >
                0{index + 1}
              </span>
              <span>
                <span className="block text-xs font-black uppercase tracking-[0.24em]">
                  {day.label}
                </span>
                <span className="mt-1 block text-sm leading-5">
                  {day.title}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="min-w-0 min-h-[45rem] lg:min-h-[55rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`${tabId}-${active.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${tabId}-${active.id}-tab`}
            className="border border-border bg-surface p-5 shadow-lift sm:p-6 lg:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-6 border-b border-border pb-8 md:grid-cols-[9rem_1fr]">
              <span className="font-display text-[clamp(3.5rem,8vw,6rem)] font-bold leading-none text-primary/35">
                0{activeIndex + 1}
              </span>
              <div className="self-end">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
                  {active.label}
                </p>
                <h3 className="mt-3 font-display text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase leading-[1.0] tracking-[-0.02em] text-text text-balance">
                  {active.title}
                </h3>
              </div>
            </div>

            <ol className="relative mt-8 space-y-0">
              {active.items.map((item, index) => (
                <li
                  key={`${item.time}-${item.title}`}
                  className="grid grid-cols-[6rem_1fr] gap-4 border-b border-border py-7 last:border-b-0 sm:grid-cols-[8rem_1fr] md:grid-cols-[10rem_1fr]"
                >
                  <div className="relative">
                    <span className="font-display text-lg font-bold uppercase leading-none text-accent">
                      {item.time}
                    </span>
                    <span className="mt-3 hidden h-px w-16 bg-border md:block" />
                  </div>
                  <div className="relative pl-6">
                    <span className="absolute left-0 top-2 h-full w-px bg-border" />
                    <span className="absolute left-[-0.34rem] top-2 h-3 w-3 bg-accent" />
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-light">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-2 font-display text-xl font-semibold uppercase leading-tight text-text sm:text-2xl">
                      {item.title}
                    </h4>
                    {item.venue ? (
                      <p className="mt-4 inline-flex gap-2 border border-border bg-surface-2 px-3 py-2 text-sm font-semibold leading-5 text-accent-light">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        <span>{item.venue}</span>
                      </p>
                    ) : null}
                    <p className="mt-4 max-w-2xl leading-7 text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
