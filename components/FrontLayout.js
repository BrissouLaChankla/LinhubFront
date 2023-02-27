import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
export default function FrontLayout({ children }) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 p-3 d-flex flex-column justify-content-center">{children}</main>
        <Footer />
      </div>
    );
  }
  