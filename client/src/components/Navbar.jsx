import { useState } from "react"
import { IoMenu, IoClose } from "react-icons/io5";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {

  const [ open, setOpen ] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logosalchi.png" alt="Salchi Logo" w={64} h={64}/>
        <span>SalchiBlog</span>
      </Link>
      {/* Mobile menu*/}
      <div className="lg:hidden">
        {/* Mobile button */}
        <div 
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
        {/* Mobile link list */}
        <div className={` w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${ 
          open ? "-right-0" : " -right-[100%]"}`} style={{ backgroundImage: "url('./public/Component 1.png')", height: '100vh' }}>
          <Link to="/">Inicio</Link>
          <Link to="/">Tendencias</Link>
          <Link to="/">Host Popular</Link>
          <Link to="/">Acerca de ...</Link>
          <Link to="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Registrarse</button>
        </Link>
        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Inicio</Link>
          <Link to="/">Tendencias</Link>
          <Link to="/">Host Popular</Link>
          <Link to="/">Acerca de ...</Link>
      <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Registrarse</button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  )
}

export default Navbar