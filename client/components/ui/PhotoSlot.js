import Image from "next/image";

export function PhotoSlot({ label = "Photo coming soon", className = "" }) {
  return (
    <div
      className={`relative isolate flex aspect-square flex-col items-center justify-center overflow-hidden border border-border bg-surface-2 ${className}`}
    >
      <Image
        src="/assets/photo-slot.svg"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 38vw"
        className="object-cover opacity-55 mix-blend-screen"
      />
      <div className="absolute inset-0 line-field opacity-40" />
      <div className="relative z-10 px-6 text-center">
        <p className="font-display text-base font-semibold uppercase tracking-[0.18em] text-accent">
          {label}
        </p>
      </div>
    </div>
  );
}
