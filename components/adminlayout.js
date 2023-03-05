import AdminNavbar from "./layouts/adminNavbar";
import AdminFooter from "./layouts/adminFooter";
import requireAuth from '../pages/middlewares/requireAuth';

function AdminLayout({ children }) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <AdminNavbar />
        <main className="flex-grow-1 p-3">{children}</main>
        <AdminFooter />
      </div>
    );
  }
export default requireAuth(AdminLayout);