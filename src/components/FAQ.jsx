import React, { useEffect, useState } from "react";
import { getFAQ } from "../services/api";
import { toArray } from "../utils/normalize";

export default function FAQ () {
  const [faqs, setFaqs] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getFAQ()
      .then((raw) => {
        console.log("faq raw →", raw);
        setFaqs(toArray(raw));
        setLoad(false);
      })
      .catch(() => setLoad(false));
  }, []);

  const shortify = (txt) => txt.split(/[\.\,]/)[0].slice(0, 60);

  const fallbackTitles = [
    "¿Quién eres?",
    "Envíos y despachos",
    "Dirección de la tienda",
    "Redes sociales",
    "Contacto WhatsApp",
  ];
  return (
    <section id="faq" className="container my-5">
      <h2 className="mb-4 text-purple">Preguntas Frecuentes</h2>
      {load && <div className="spinner-border" />}
      {!load && faqs.length === 0 && <p>No hay preguntas frecuentes.</p>}

      <div className="accordion" id="faqAccordion">
        {faqs.map((f, idx) => {
          const texto  = f.respuesta ?? f.answer ?? f.text ?? "";
          const titulo = (f.pregunta ?? f.question ?? fallbackTitles[idx] ?? shortify(texto)) || `Respuesta #${idx + 1}`;
          return (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header" id={`faqHead${idx}`}> 
                <button
                  className={`accordion-button${idx ? " collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${idx}`}
                  aria-expanded={!idx}
                  aria-controls={`faqCollapse${idx}`}
                >
                  {titulo}
              </button>
              </h2>
              <div
                id={`faqCollapse${idx}`}
                className={`accordion-collapse collapse${!idx ? " show" : ""}`}
                data-bs-parent="#faqAccordion"
              >
              <div className="accordion-body">{texto}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}