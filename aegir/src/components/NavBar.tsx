import Link from "next/link"
import Image from "next/image"
import miLogo from "@/images/logo.png"
import SocialLinks from "./SocialLinks"

const NavBar = () => {

    return (

       <header className="sticky top-0 z-40 w-full">

       <nav className="flex flex-wrap items-center px-4 py-2 gap-3">

        <section>
            <Link href="/" className="inline-block rounded-xl transition duration-300 ease-in-out group">
            <Image src={miLogo} alt="Logo" width={65} height={65} className="rounded-xl transition duration-300 ease-in-out group-hover:brightness-200" priority/>
            </Link>
        </section>
        
        <div className="overflow-x-auto">
        <h1 className="whitespace-nowrap inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins text-custom-dark [text-shadow:_2px_2px_0_#4b5563] p-1 px-3 text-center mx-auto">Bienvenido a Paraná Boats</h1>
        </div>

        <div className="flex md:flex items-center justify-center w-full md:w-auto">
          <SocialLinks
            instagram="parana.boats"
            tiktok="parana.boats"
            className="flex items-center gap-2"
            utm="utm_source=web&utm_medium=navbar"
          />
        </div>
 
        </nav>

        </header>
    )
}

export default NavBar

