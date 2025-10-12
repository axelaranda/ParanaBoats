"use client"
import Image from "next/image"
import miLogo from "@/image/logo.png"
import Link from "next/link"

const Footer = () => {

    return (
      <section className="bg-custom-dark "> 
    
        <h1 className="text-custom-light font-roboto text-3xl text-center mt-30">LA VIDA ES UNA SOLA, DISFRUTALA
        </h1>
        <h2 className="text-custom-light font-roboto text-xl text-center mt-6 ml-6 mr-6">En Paraná Boats nuestra principal preocupación es que puedas encontrar sin problemas la embarcación que tanto deseas y disfrutar de la mejor experiencia de compra, profesional y transparente</h2>
         
         <div className="w-full flex justify-center mt-6">
          <Link href="/" className="inline-block rounded-xl transition duration-300 ease-in-out group">
          <Image src={miLogo} alt="Logo"
          className="rounded-xl transition duration-300 ease-in-out group-hover:brightness-200"
          width={300}
          height={300}
          />
          </Link>
         </div>

          <div className="text-center text-sm py-6 flex-1 font-roboto">
            <p>Localidad: Argentina</p>
            <p>Idioma: Español</p>
            <p>Todos los derechos reservados</p>
          </div>
      </section> 
    )
}

export default Footer
