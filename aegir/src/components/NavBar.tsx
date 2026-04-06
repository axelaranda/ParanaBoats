import Link from "next/link"
import Image from "next/image"
import miLogo from "@/images/logo.png"
import SocialLinks from "./SocialLinks"

const NavBar = () => {

    return (

       <header className="sticky top-0 z-40 w-full">

       <nav className="px-4 py-4">

        <section className="flex items-center justify-between">

            <Link href="/" className="inline-block rounded-xl transition duration-300 ease-in-out group">
            <Image src={miLogo} alt="Logo" width={65} height={65} className="rounded-xl transition duration-300 ease-in-out group-hover:brightness-200" priority/>
            </Link>
        

        <div className="flex justify-end col-start-2 row-start-1">
          <SocialLinks
            instagram="parana.boats"
            tiktok="parana.boats"
            className="flex items-center gap-2"
            utm="utm_source=web&utm_medium=navbar"
          />
        </div>

        </section>
 
        </nav>

        </header>
    )
}

export default NavBar

