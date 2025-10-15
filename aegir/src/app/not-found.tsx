import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-screen grid place-items-center bg-custom-medium">
      <section className="text-center px-6">
        <h1 className="text-7xl font-poppins tracking-tight text-custom-light">404</h1>
        <p className="mt-4 text-lg text-gray-700">
          Ups, la página que buscás no existe
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-poppins shadow-sm bg-custom-light text-custom-dark hover:bg-blue-400 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}

