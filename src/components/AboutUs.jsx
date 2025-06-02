import React, { useEffect, useState } from "react";
import { getAboutUs } from "../services/api"; 
import { firstObject } from "../utils/normalize";

export default function AboutUs() {
  const [texto, setTexto] = useState("");
  const [load,  setLoad ] = useState(true);

  useEffect(() => {
    getAboutUs()
      .then((raw) => {
        console.log("about raw →", raw);
        const obj = firstObject(raw);
        setTexto(
          obj.descripcion ||
          obj.description  ||
          obj.about_us     ||
          obj.about        ||
          (typeof raw?.data === "string" ? raw.data : "")
        );
      })
      .catch(() => setTexto(""))
      .finally(() => setLoad(false));
  }, []);

  return (
    <section id="aboutus" className="container my-5">
      <h2 className="mb-4 text-purple">Quiénes Somos</h2>
      {load && <div className="spinner-border" />}
      {!load && texto  && <p>{texto}</p>}
      {!load && !texto && <p>Información no disponible.</p>}
    </section>
  );
}