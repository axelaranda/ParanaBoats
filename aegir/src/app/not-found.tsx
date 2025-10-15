import Link from "next/link";

export default function Custom404() {
  return (
     <main
     className="bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: "url(/playa.jpg)" }}>
      <div className="min-h-[100svh] grid place-items-center px-6">
      <section className="text-center">
        <h1 className="text-7xl font-poppins tracking-tight text-custom-dark">404</h1>
        <p className="mt-4 text-lg text-custom-dark border rounded-xl bg-custom-light p-1 px-2">
          Ups, la página que buscás no existe
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-poppins shadow-sm bg-custom-dark text-custom-light hover:bg-gray-700 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
      </div>
    </main>
  );
}

