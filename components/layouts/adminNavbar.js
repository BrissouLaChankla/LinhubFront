import Link from "next/link";
import { PersonCircle, FileEarmarkPerson } from "react-bootstrap-icons";
import { logout } from "../../reducers/user";
import { useDispatch } from "react-redux";

function AdminNavbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav
      className="navbar navbar-expand-md bg-body border-bottom z-3"
      data-bs-theme="light"
    >
      <div className="container">
        <Link className="nav-link active" href="/">
          Linhub
        </Link>
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
        <div
          className="collapse navbar-collapse justify-content-end me-4"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav d-flex align-items-center">
            <Link className="nav-link d-flex align-items-center gap-2" href="/admin/general">
              <FileEarmarkPerson />
              Info. Générales
            </Link> |
            <Link className="nav-link" href="/admin">
              Dashboard
            </Link>
          </div>
        </div>

        <div className="dropdown d-none d-md-block">
          <a
            href="#"
            className="d-block link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <PersonCircle className="fs-4" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end text-small">
            <li>
              <Link className="dropdown-item" href="#">
                New project...
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
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
                onClick={() => handleLogout()}
              >
                Déconnexion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
