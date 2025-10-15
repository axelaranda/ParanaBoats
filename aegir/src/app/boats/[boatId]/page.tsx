"use client";
import { getBoatById } from "@/services/boats.services";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";
import ExpandableText from "@/components/ExpandableText";
import type {Boats as Boat} from "@/helper/boatsImages";

export default function BoatDetail() {
  const { boatId } = useParams<{ boatId: string }>();
  const [boatData, setBoatData] = useState<Boat | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const boat = await getBoatById(boatId);
      setBoatData(boat);
      setLoading(false);
    })();
  }, [boatId]);

  if (loading) return <p className="p-6">Cargando…</p>;
  if (!boatData) return <p className="p-6">No encontrado</p>;

  return (
    <main
     className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
     style={{ backgroundImage: "url(/playa.jpg)" }}>
    <article className="min-h-dvh flex items-center justify-center items-start pt-20 pb-20">
    <section className="border rounded-xl flex flex-col max-w-[900px] w-full overflow-hidden shadow-sm bg-custom-light p-4 mb-20 m-3 sm:m-6">

      <Carousel images={boatData.images} alt={boatData.name} className="mb-4" />

        <div className="flex-1 p-4 flex flex-col">
          <p className="text-2xl font-roboto text-custom-dark line-clamp-1">{boatData.name}</p>
          <ExpandableText
          key={boatData.description} 
          text={boatData.description}
          initialLines={4}
          />
          <p className="text-3xl font-roboto mt-3 text-custom-dark">USD {boatData.price}</p>

        </div>
      
    </section>
    </article>
    </main>
  );
}
 



