import React, { useState } from "react";

export default function ContactForm({ producto }) {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
    producto: producto || "",
    antispam: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.antispam.trim() !== "5") {
      alert("Respuesta anti-bot incorrecta.");
      return;
    }
    setEnviado(true);
  };

  if (enviado)
    return <div className="alert alert-success">¡Gracias por tu mensaje! Te contactaremos pronto.</div>;

  return (
    <section id="contacto" className="container my-5">
      <h2 className="mb-4">Contacto</h2>
      <form className="row g-3 shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input className="form-control" type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Correo electrónico</label>
          <input className="form-control" type="email" name="correo" value={form.correo} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" name="mensaje" value={form.mensaje} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Producto de interés</label>
          <input className="form-control" type="text" name="producto" value={form.producto} readOnly />
        </div>
        <div className="col-md-6">
          <label className="form-label">¿Cuánto es 2 + 3? (Anti-bot)</label>
          <input className="form-control" type="text" name="antispam" value={form.antispam} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Enviar</button>
        </div>
      </form>
    </section>
  );
}
