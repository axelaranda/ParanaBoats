import Image from "next/image";
import Link from "next/link";
import {boats} from "@/helper/boatsImages";

export default function Home() {

  const allProducts = boats;

  return (
    <main   className="min-h-screen bg-cover bg-center bg-no-repeat flow-root"
    style={{ backgroundImage: "url(/playa.jpg)" }}>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-3 sm:m-6 md:m-10 lg:m-20 xl:m-28">{allProducts.map((product) => {
        return (
                            <article key={product.name} className="border rounded-xl flex flex-col h-[420px] overflow-hidden shadow-sm bg-custom-light">
                    
                      <div className="relative h-1/2 w-full">
                       
                       <Image src={product.images?.[0]} alt={`Image product ${product.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width:1200px) 25vw, 20vw"/>

                           <Link
                           href={`/boats/${encodeURIComponent(String(product.id))}`}
                           aria-label={`Ver ${product.name}`}
                           className="absolute inset-0 z-10 cursor-pointer"
                            >
                            <span className="sr-only">Ver{product.name}</span>
                           </Link>
                        
                      </div> 

                      <div className="flex-1 p-4 flex flex-col">
                         <p className="font-roboto text-custom-dark line-clamp-1">{product.name}</p>
                         <p className="text-sm font-roboto text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                         <p className="text-3xl font-roboto mt-3 text-custom-dark">USD {product.price}</p>
                      </div>
                        
                  </article>  
        )
      })}</section>
    </main>
  );
}

