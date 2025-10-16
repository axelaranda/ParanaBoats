"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
  initialIndex?: number;
  className?: string;
};

export default function Carousel({ images, alt, initialIndex = 0, className = "" }: Props) {
  const safeImages = images?.length ? images : ["/images/placeholder.webp"];
  const [idx, setIdx] = useState(Math.min(initialIndex, safeImages.length - 1));
  const trackRef = useRef<HTMLDivElement | null>(null);

  const prev = () => setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);
  const next = () => setIdx((i) => (i + 1) % safeImages.length);
  const goTo = (i: number) => setIdx(i);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    let dragging = false;

    const onStart = (x: number) => { dragging = true; startX = x; };
    const onEnd = (x: number) => {
      if (!dragging) return;
      dragging = false;
      const dx = x - startX;
      if (dx > 50) prev();
      if (dx < -50) next();
    };

    const tm = (e: TouchEvent) => onStart(e.touches[0].clientX);
    const te = (e: TouchEvent) => onEnd(e.changedTouches[0].clientX);
    const md = (e: MouseEvent) => onStart(e.clientX);
    const mu = (e: MouseEvent) => onEnd(e.clientX);

    el.addEventListener("touchstart", tm, { passive: true });
    el.addEventListener("touchend", te);
    el.addEventListener("mousedown", md);
    window.addEventListener("mouseup", mu);

    return () => {
      el.removeEventListener("touchstart", tm);
      el.removeEventListener("touchend", te);
      el.removeEventListener("mousedown", md);
      window.removeEventListener("mouseup", mu);
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={trackRef}
        className="relative w-full h-[360px] sm:h-[480px] md:h-[600px] lg:h-[720px] rounded-xl overflow-hidden bg-black/10"
        aria-roledescription="carousel"
        aria-label="Galería de imágenes"
      >
        <Image
          key={safeImages[idx]}
          src={safeImages[idx]}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 700px"
          priority
        />

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-xl bg-black/50 text-white px-3 py-2 hover:bg-black/70 cursor-pointer"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-black/50 text-white px-3 py-2 hover:bg-black/70 cursor-pointer"
            >
              ›
            </button>
          </>
        )}

        {safeImages.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-2 w-2 rounded-xl ${i === idx ? "bg-white" : "bg-white/50"} cursor-pointer`}
              />
            ))}
          </div>
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="mt-3 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {safeImages.map((src, i) => (
            <button
              type="button"
              key={src + i}
              onClick={() => goTo(i)}
              className={`relative h-16 w-full rounded-md overflow-hidden border-2 ${
                i === idx ? "border-white" : "border-black"
              } cursor-pointer`}
              aria-label={`Mostrar imagen ${i + 1}`}
            >
              <Image src={src} alt={`${alt} miniatura ${i + 1}`} fill className="object-cover" sizes="150px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
