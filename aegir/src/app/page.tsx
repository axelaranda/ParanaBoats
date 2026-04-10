import Image from "next/image";
import Link from "next/link";
import {boats} from "@/helper/boatsImages";
import TopCarousel from "@/components/TopCarousel";

export default function Home() {

  const allProducts = boats;
  const carouselImages = allProducts.map(product => product.images[0]);

  return (
    <div>
        <div>
        <h1 className="w-full text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-poppins text-custom-dark [-webkit-text-stroke:1px_white] px-2 mt-2 break-words">Paraná Boats</h1>
        </div>
    <TopCarousel images={carouselImages}/>
    <main className="min-h-dvh !pb-28">
      <h2 className="w-fit mx-auto font-poppins text-3xl md:text-4xl lg:text-5xl text-center px-2 text-custom-dark">Deslizá hacia abajo</h2>
      <p className="font-poppins text-center text-8xl font-extrabold mb-6 sm:mb-20 text-custom-dark">↓</p>
      <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl text-center pb-6 px-4 mb-6 text-custom-dark">Presioná o hace click en la imagen del barco que te interese para ver más fotos e información</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 md:mx-10 lg:mx-20 xl:mx-28">{allProducts.map((product) => {
        return (
                            <article key={product.id} className="border border-transparent rounded-xl flex flex-col h-[320px] sm:h-[360px] md:h-[500px] lg:h-[600px] 
                            overflow-hidden shadow-sm bg-custom-light">                              
                    
                      <div className="relative h-2/3 w-full">
                       
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
    </div>
  );
}

