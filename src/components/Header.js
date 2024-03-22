import React from "react"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Link from "next/link";


const Header = () => {
  return (
    <header className="flex justify-between border-2 
    border-transparent/5 shadow-lg p-5 sticky top-0 z-0
      ">
        <Link href="/" className="inline-flex gap-1 align-middle text-xl font-bold sm:text-base">
         <AutoFixHighIcon/> AutoCapGen Pro</Link>
        <nav className="flex justify-center gap-20 text-lg text-white/70
        md:gap-6
        sm:flex sm:justify-end sm:gap-4 sm:px-3 sm:text-sm">
          <Link href="/" className="hover:text-white/100">Home</Link>
          <Link href="/pricing" className="hover:text-white/100">Pricing</Link>
          <Link href="/contact" className="hover:text-white/100">Contact</Link>
        </nav>
    </header>
  )
}

export default Header
