import Link from "next/link";
import { PersonCircle, FileEarmarkPerson, MortarboardFill, BriefcaseFill, GearFill, Gear, Briefcase, Mortarboard, FileEarmarkPersonFill, Lightning, LightningFill } from "react-bootstrap-icons";
import { logout } from "../../reducers/user";
import { useDispatch } from "react-redux";
import logo from "@/public/logos/logo.png"
import Image from "next/image";
import { useState } from "react";

function AdminNavbar() {
  const dispatch = useDispatch();

  const [currentLink, setCurrentLink] = useState("");

  const links = [
    {
      name: "Info. Générales",
      slug: "general",
      icon: <FileEarmarkPerson className="fs-2" />,
      iconFill: <FileEarmarkPersonFill className="fs-2 text-primary" />
    },
    {
      name: "Formations",
      slug: "formations",
      icon: <Mortarboard className="fs-2" />,
      iconFill: <MortarboardFill className="fs-2 text-primary" />
    },
    {
      name: "Expériences Pro.",
      slug: "experiences",
      icon: <Briefcase className="fs-2 " />,
      iconFill: <BriefcaseFill className="fs-2 text-primary" />
    },
    {
      name: "Projets",
      slug: "projets",
      icon: <Lightning className="fs-2" />,
      iconFill: <LightningFill className="fs-2 text-primary" />
    },
    {
      name: "API & Portfolio",
      slug: "api-portfolio",
      icon: <Gear className="fs-2" />,
      iconFill: <GearFill className="fs-2 text-primary" />
    }
  ]

  return (
    <nav
      className="navbar navbar-expand-lg bg-body shadow-sm z-3 bg-white position-fixed w-100"
      data-bs-theme="light"
    >
      <div className="container">
        <Link href="/admin" className="navbar-brand" onClick={() => setCurrentLink("")} >
          <Image height={30} src={logo}></Image>
        </Link>
        <div className="d-flex align-items-center order-lg-3 ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="dropdown justify-content-end ms-3 ms-lg-0">
            <a
              href="#"
              className="d-block link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <PersonCircle className="fs-2" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end text-small">
              <li>
                <Link className="dropdown-item disabled" href="#">
                  Nouveau projet
                </Link>
              </li>
              <li>
                <Link className="dropdown-item disabled" href="#">
                  Configuration
                </Link>
              </li>
              <li>
                <Link className="dropdown-item disabled" href="#">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() => dispatch(logout())}
                >
                  Déconnexion
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end me-4"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav d-flex align-items-center">
            {
              links.map((e, i) =>
                  <Link key={i}
                    className="nav-link d-flex flex-column align-items-center gap-1 pe-3"
                    href={"/admin/" + e.slug}
                    onClick={() => setCurrentLink(e.name)}
                  >
                    {
                      e.name === currentLink ? e.iconFill : e.icon
                    }
                    {e.name}
                  </Link>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
