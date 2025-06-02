import React, { useEffect, useState } from "react";
import Navbar           from "./components/Navbar";
import CarouselProduct  from "./components/CarouselProduct";
import CardService      from "./components/CardService";
import AboutUs          from "./components/AboutUs";
import FAQ              from "./components/FAQ";
import ContactForm      from "./components/ContactForm";
import Footer           from "./components/Footer";

import { getProductos } from "./services/api";
import { toArray }      from "./utils/normalize";
export default function App() {
  const [productos,   setProductos]   = useState([]);
  const [imagenes,    setImagenes]    = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState("");
  const [productoSel, setProductoSel] = useState("");

  useEffect(() => {
    getProductos()
      .then((raw) => {
        console.log("productos raw →", raw);
        const items = toArray(raw);
        setProductos(items);
        const imgs = items.map((p) => {
          const firstImg = Array.isArray(p.imgs) && p.imgs.length ? p.imgs[0] : undefined;
          return {
            url: firstImg || p.image || p.picture || p.image_url || "https://via.placeholder.com/600x300?text=Sin+imagen",
            alt: p.nombre || p.name || p.product_name || "Producto",
          };
        });
        setImagenes(imgs);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los productos.");
        setLoading(false);
      });
  }, []);

  const handleContactClick = (nombre) => {
    setProductoSel(nombre);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <header className="bg-light text-center py-5 mb-4 shadow-sm">
        <h1 className="display-5 fw-bold text-purple">Tejelanas Vivi</h1>
        <p className="lead mb-0">Lanas naturales, talleres y comunidad textil en Zapallar.</p>
      </header>

      <main id="inicio" className="mb-5">
        {imagenes.length > 0 && <CarouselProduct imagenes={imagenes} />}

        <section id="productos" className="container my-5">
          <h2 className="mb-4 text-purple">Nuestros Productos</h2>
          {loading && <div className="spinner-border text-secondary" />}
          {error && <p className="text-danger">{error}</p>}

          <div className="row">
            {productos.map((p, idx) => (
              <CardService
                key={idx}
                imagen={(Array.isArray(p.imgs) && p.imgs[0]) || p.image || p.picture || p.image_url}
                titulo={p.nombre || p.name || p.product_name}
                descripcion={p.descripcion || p.description || p.detail || ""}
                onContactClick={handleContactClick}
              />
            ))}
          </div>
        </section>

        <AboutUs />
        <FAQ />
        <ContactForm producto={productoSel} />
      </main>

      <Footer />
    </>
  );
}