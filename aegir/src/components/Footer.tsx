"use client"
import Image from "next/image"
import miLogo from "@/images/logo.png"
import yo from "@/images/yo.png"
import Link from "next/link"

const Footer = () => {

    return (
      <section className="pt-32 text-center container mx-auto px-4 sm:px-6 md:px-8"> 
    
        <h1 className="inline-block text-custom-dark bg-custom-light border border-transparent rounded-xl font-roboto text-3xl text-center px-3">La libertad de navegar
        </h1>
        <h2 className="inline-block text-custom-dark bg-custom-light border border-transparent rounded-xl font-roboto text-xl text-center px-2 mt-6">Mi principal preocupación es que puedas encontrar sin problemas la embarcación que tanto deseas y disfrutar de la mejor experiencia de compra, Paraná Boats: profesionalismo y transparencia</h2>
         
         <div className="w-full flex justify-center mt-6">
          <Link href="/" className="inline-block rounded-xl transition duration-300 ease-in-out group">
          <Image src={miLogo} alt="Logo"
          className="rounded-xl transition duration-300 ease-in-out group-hover:brightness-200"
          width={200}
          height={200}
          />
          </Link>
         </div>

         <div className="w-full flex justify-center mt-6">
          <Image src={yo} alt="Yo"
          className="rounded-xl"
          width={200}
          height={400}
          />
         </div>

         <h2 className="inline-block text-custom-dark bg-custom-light border border-transparent rounded-xl font-roboto text-center mt-6 px-2">Mi nombre es Axel Aranda, estoy en contacto con el río desde los 3 días de vida cuando me llevaban a navegar en el Plenamar 27 de mi abuelo, empecé a navegar en optimist a los 9 años, empecé a competir a los 11, pasé también por láser -ahora llamada ILCA-, navegué en numerosos veleros lastrados y también fui instructor de optimist e ILCA; podría afirmar sin lugar a duda que soy un apasionado de la náutica</h2>

          <div className="mx-auto w-full sm:w-fit max-w-md px-4 sm:px-2 py-6 text-center text-sm font-roboto leading-relaxed text-custom-dark bg-custom-light border border-transparent rounded-xl mt-12 mb-12 break-words whitespace-normal">
            <p>WhatsApp: 343 5032200</p>
            <p className="break-all">Email: axelemilianoaranda1993@gmail.com</p>
            <p>Localidad: Paraná, Entre Ríos, Argentina</p>
            <p>Su consulta no molesta, no hay preguntas tontas, solo tontos que no preguntan</p>
          </div>
      </section> 
    )
}

export default Footer
