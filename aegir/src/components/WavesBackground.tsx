"use client";

export default function WavesBackground() {
  return (
    <div aria-hidden className="fixed inset-x-0 bottom-0 -z-10 h-[40vh] pointer-events-none">
      {/* Cielo / mar de base (opcional) */}
      <div className="absolute inset-0 bg-[linear-gradient(#061428_0%,#08213c_55%,#0b3658_100%)]" />

      {/* SVG ancho = 200% para loop perfecto; lo movemos -50% */}
      <svg
        viewBox="0 0 2000 400"
        preserveAspectRatio="none"
        className="absolute bottom-0 h-full w-[200%]"
      >
        <defs>
          {/* Curva de ola: ajustá puntos para cambiar la forma */}
          <path
            id="wavePath"
            d="
              M0,220
              C 250,140 450,300 700,220
              C 950,140 1150,300 1400,220
              C 1650,140 1850,300 2000,220
              L 2000,400 L 0,400 Z
            "
          />
        </defs>

        {/* Capa 1 (lejana) */}
        <g className="animate-waveSlow">
          <use href="#wavePath" x="0"    className="fill-[#0ea5e9]/20" />
          <use href="#wavePath" x="2000" className="fill-[#0ea5e9]/20" />
        </g>

        {/* Capa 2 (media) con leve vaivén vertical */}
        <g className="animate-waveMed">
          <g className="animate-bob">
            <use href="#wavePath" x="0"    className="fill-[#38bdf8]/35" />
            <use href="#wavePath" x="2000" className="fill-[#38bdf8]/35" />
          </g>
        </g>

        {/* Capa 3 (cercana) más marcada */}
        <g className="animate-waveFast">
          <g className="animate-bob">
            <use href="#wavePath" x="0"    className="fill-[#7dd3fc]/55" />
            <use href="#wavePath" x="2000" className="fill-[#7dd3fc]/55" />
          </g>
        </g>
      </svg>

      {/* Bruma/espuma suave arriba de las olas (opcional) */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/10 to-transparent" />
    </div>
  );
}
