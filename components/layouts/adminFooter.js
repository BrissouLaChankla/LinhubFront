import { Facebook, Twitter, Linkedin } from 'react-bootstrap-icons';

function AdminFooter() {
    return (
        <div className="border-top">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© {new Date().getFullYear()} Linhub</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><Facebook /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><Twitter /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><Linkedin /></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default AdminFooter;