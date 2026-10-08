import Image from "next/image";

export function PhotoSlot({ label = "Photo coming soon", className = "" }) {
  return (
    <div
      className={`relative isolate aspect-[4/5] overflow-hidden border border-border bg-surface-2 ${className}`}
    >
      <Image
        src="/assets/photo-slot.svg"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 38vw"
        className="object-cover opacity-55 mix-blend-screen"
      />
      <div className="absolute inset-0 line-field opacity-40" />
      <div className="absolute inset-x-5 bottom-5 border-t border-border pt-4">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {label}
        </p>
      </div>
    </div>
  );
}
