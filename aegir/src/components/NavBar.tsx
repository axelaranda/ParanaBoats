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

        <h1 className="hidden sm:block text-xl md:text-2xl lg:text-3xl font-poppins text-custom-dark text-center mx-auto truncate">Encontrá la embarcación que estabas buscando</h1>

        <div className="flex md:flex items-center justify-center w-full md:w-auto">
          <SocialLinks
            instagram="parana.boats"
            facebook="parana.boats"
            tiktok="parana.boats"
            className="flex items-center gap-2"
            utm="utm_source=web&utm_medium=navbar"
          />
        </div>
 
        </nav>

        <div className="sm:hidden px-4 pb-3">
        <h1 className="text-base font-poppins text-custom-dark text-center">
          Encontrá la embarcación que estabas buscando
        </h1>
        </div>

        </header>
    )
}

export default NavBar
