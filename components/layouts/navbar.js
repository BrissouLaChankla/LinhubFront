import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logos/logo.png"
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
    const [activeClass, setActiveClass] = useState("");
    const token = useSelector(state => state.user.value.token);

    
    return (
        <header className="p-1 shadow-sm position-fixed top-0 left-0 w-100 bg-white z-3" data-bs-theme="light">
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link href="/" className="navbar-brand" >
                        <Image height={30} src={logo}></Image>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="w-100 mt-4 mt-sm-0  d-flex align-items-lg-center justify-content-end gap-2 flex-wrap flex-column flex-lg-row justify-content-lg-end">
                            <a className={(activeClass == "A propos") ? "text-primary nav-link me-4" : " nav-link me-4"} href="#about" onClick={(e) => setActiveClass(e.target.textContent)}>A propos</a>
                            <a className={(activeClass == "Tarif") ? "text-primary nav-link me-4" : " nav-link me-4"} href="#pricing" onClick={(e) => setActiveClass(e.target.textContent)}>Tarif</a>
                            <a className={(activeClass == "FAQ") ? "text-primary nav-link me-4" : " nav-link me-4"} href="#faq" onClick={(e) => setActiveClass(e.target.textContent)}>FAQ</a>
                            <a className={(activeClass == "Contact") ? "text-primary nav-link me-3" : " nav-link me-3"} href="#contact" onClick={(e) => setActiveClass(e.target.textContent)}>Contact</a>
                            <span className="ms-2 me-3 d-none d-lg-block">|</span>
                            {
                                token ?
                                    <Link href="/admin" className="btn btn-primary btn-sm mt-2 mt-lg-0">Dashboard admin</Link>
                                 :
                                 <>
                                    <Link href="/login" className="btn btn-outline-primary btn-sm mt-2 mt-lg-0">Connexion</Link>
                                     <Link href="/register" className="btn btn-primary btn-sm">Inscription</Link>
                                 </> 
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


<div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link href="/" >
            <Image height={30} src={logo}></Image>
        </Link>



        <div className="text-end">
            <Link href="/login" className="btn btn-outline-primary me-2 btn-sm">Connexion</Link>
            <Link href="/register" className="btn btn-primary btn-sm">Inscription</Link>
        </div>
    </div>
</div>
export default Navbar;