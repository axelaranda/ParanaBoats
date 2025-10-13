"use client"
import Link from "next/link"
import Image from "next/image"
import miLogo from "@/images/logo.png"

const NavBar = () => {

    return (

       <nav className="bg-custom-dark flex flex-wrap items-center px-4 py-2 gap-3">

        <section>
            <Link href="/" className="inline-block rounded-xl transition duration-300 ease-in-out group">
            <Image src={miLogo} alt="Logo" width={65} height={65} className="rounded-xl transition duration-300 ease-in-out group-hover:brightness-200" priority/>
            </Link>
        </section>
          <h1 className="text-3xl font-poppins text-custom-light p-4 shadow-md text-center">LA EMBARCACIÓN QUE TANTO DESEAS</h1>
 
       </nav>
    )
}

export default NavBar
