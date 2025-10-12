import Image from "next/image";
import Link from "next/link";
import {boats} from "@/helper/boatsImages";

export default function Home() {

  const allProducts = boats;

  return (
    <div className="bg-custom-medium">      
      <section className="bg-custom-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">{allProducts.map((product) => {
        return (
                            <article key={product.name} className="border rounded-xl flex flex-col h-[420px] overflow-hidden shadow-sm bg-custom-light">
                    
                      <div className="relative h-1/2 w-full">
                       
                       <Image src={product.images?.[0]} alt={`Image product ${product.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width:1200px) 25vw, 20vw"/>

                           <Link
                           href={`/product/${encodeURIComponent(String(product.id))}`}
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
    </div>
  );
}

