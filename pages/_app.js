import "@/styles/customized.scss";
import AdminLayout from "@/components/adminlayout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
  )
}