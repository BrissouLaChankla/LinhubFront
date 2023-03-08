import { Facebook, Linkedin, Twitter } from "react-bootstrap-icons";

function Footer() {
    return (
        <div className="container mt-5">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© {new Date().getFullYear()} Linhub, La Capsule</span>
                </div>

                <ul className="nav col-md-4 fs-3 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="#">
                            <Facebook />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="#">
                            <Twitter />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="">

                            <Linkedin />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;