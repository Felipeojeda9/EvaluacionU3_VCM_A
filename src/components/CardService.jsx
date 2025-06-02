import React from "react";
import PropTypes from "prop-types";

export default function CardService ({ imagen, titulo, descripcion, onContactClick }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={imagen} className="card-img-top" alt={titulo} style={{ maxHeight: 200, objectFit: "cover" }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text flex-grow-1">{descripcion}</p>
          <button className="btn btn-primary mt-auto" onClick={() => onContactClick(titulo)}>Contáctanos</button>
        </div>
      </div>
    </div>
  );
}

CardService.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  onContactClick: PropTypes.func.isRequired,
};
