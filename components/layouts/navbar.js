import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logos/logo.png"

function Navbar() {
    return (
        <header class="p-1 shadow-sm position-fixed top-0 left-0 w-100 bg-white z-3" data-bs-theme="light">
            <nav class="navbar navbar-expand-sm ">
                <div class="container">
                    <Link href="/" className="navbar-brand" >
                        <Image height={30} src={logo}></Image>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="w-100 mt-4 mt-sm-0 text-sm-end">
                        <Link href="/login" class="btn btn-outline-primary me-2 btn-sm">Connexion</Link>
                        <Link href="/register" class="btn btn-primary btn-sm">Inscription</Link>
                    </div>
                        <div class="navbar-nav">
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Pricing</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


<div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link href="/" >
            <Image height={30} src={logo}></Image>
        </Link>



        <div class="text-end">
            <Link href="/login" class="btn btn-outline-primary me-2 btn-sm">Connexion</Link>
            <Link href="/register" class="btn btn-primary btn-sm">Inscription</Link>
        </div>
    </div>
</div>
export default Navbar;