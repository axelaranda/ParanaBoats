"use client";
import { getProductById } from "@/services/products.services";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/interfaces/product.interface";
import Image from "next/image";
import ExpandableText from "@/components/ExpandableText";

export default function ProductDetail() {
  const params = useParams<{ idProduct: string }>()
  const [productData, setProductData] = useState<Product | null>(null)

  useEffect(() => {
    console.log(params.idProduct)
    const fetchProductById = async () => {
      const product = await getProductById(params.idProduct as string);
      setProductData(product)
    };
    fetchProductById()
  }, [params.idProduct]);

  if (!productData) return <p className="font-roboto bg-custom-medium p-6">Cargando...</p>

  return (

    <article className="bg-custom-medium min-h-dvh flex items-center justify-center items-start pt-8">
    <section
      className="border rounded-xl flex flex-col h-[700px] w-[700px] overflow-hidden shadow-sm bg-custom-light"
      aria-label={`Detalle del producto: ${productData.name}`}
    >
      
        
        <div className="relative h-1/2 w-full">
          
          <Image
            src={productData.image}
            alt={productData.name}
             fill
             className="object-contain p-3 bg-custom-medium"
             sizes="(max-width: 768px) 100vw, 700px"/>
        </div>

        <div className="flex-1 p-4 flex flex-col">
          <p className="text-2xl font-roboto text-custom-dark line-clamp-1">{productData.name}</p>
          <ExpandableText
          key={productData.description} 
          text={productData.description}
          initialLines={4}
          />
          <p className="text-3xl font-roboto mt-3 text-custom-dark">{productData.price}</p>

        </div>
      
    </section>
    </article>
    
  );

}
 



