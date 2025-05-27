import React, { useState } from "react";
import "./galleryContent.css";
import GalleryImage from "./GalleryImage";
import { FaExpandAlt } from "react-icons/fa";

const images = [
  { src: "https://i.ibb.co/sdkXf24q/IMG-20240106-173916-532.webp" },
  { src: "https://i.ibb.co/TDcc4X55/IMG-20240106-173916-662.webp" },
  { src: "https://i.ibb.co/sdkXf24q/IMG-20240106-173916-532.webp" },
  { src: "https://i.ibb.co/TDcc4X55/IMG-20240106-173916-662.webp" },
  { src: "https://i.ibb.co/sdkXf24q/IMG-20240106-173916-532.webp" },
  { src: "https://i.ibb.co/TDcc4X55/IMG-20240106-173916-662.webp" },
  { src: "https://i.ibb.co/sdkXf24q/IMG-20240106-173916-532.webp" },
  { src: "https://i.ibb.co/TDcc4X55/IMG-20240106-173916-662.webp" },
  { src: "https://i.ibb.co/sdkXf24q/IMG-20240106-173916-532.webp" },
  { src: "https://i.ibb.co/TDcc4X55/IMG-20240106-173916-662.webp" },
  { src: "https://i.ibb.co/sdkXf24q/IMG-20240106-173916-532.webp" },
  { src: "https://i.ibb.co/TDcc4X55/IMG-20240106-173916-662.webp" },
  { src: "https://i.ibb.co/sdkXf24q/IMG-20240106-173916-532.webp" },
  { src: "https://i.ibb.co/TDcc4X55/IMG-20240106-173916-662.webp" },
  { src: "https://i.ibb.co/sdkXf24q/IMG-20240106-173916-532.webp" },
  { src: "https://i.ibb.co/TDcc4X55/IMG-20240106-173916-662.webp" },
];

const GalleryContent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>The Gallery</h1>
        <h2>Echoes of Nature</h2>
        <p>Captured moments that reflect our mission in motion.</p>
      </div>
      <h1 className="gallery-title">Explore the Gallery</h1>
      <div className="masonry-grid">
        {images.map((img, idx) => (
          <GalleryImage
            key={idx}
            src={img.src}
            alt={`Gallery ${idx}`}
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={images[activeIndex].src} alt="enlarged" />
            <span className="close" onClick={closeLightbox}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryContent;
