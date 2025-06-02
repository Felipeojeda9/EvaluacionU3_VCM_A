import React from "react";
import PropTypes from "prop-types";

export default function CarouselProduct({ imagenes = [] }) {
  if (!imagenes.length) return null;

  return (
    <section className="container mb-5">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {imagenes.map((img, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img src={img.url} alt={img.alt} className="d-block w-100 hero-img" />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </section>
  );
}

CarouselProduct.propTypes = {
  imagenes: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string, alt: PropTypes.string })
  ),
};