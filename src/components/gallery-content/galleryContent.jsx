import React, { useState } from "react";
import "./galleryContent.css";
import { FaExpandAlt } from "react-icons/fa";

const images = [
  { src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" },
  { src: "https://images.pexels.com/photos/6591155/pexels-photo-6591155.jpeg" },
  { src: "https://images.pexels.com/photos/6143367/pexels-photo-6143367.jpeg" },
  { src: "https://images.pexels.com/photos/7047432/pexels-photo-7047432.jpeg" },
   { src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" },
  { src: "https://images.pexels.com/photos/6591155/pexels-photo-6591155.jpeg" },
   { src: "https://images.pexels.com/photos/6757642/pexels-photo-6757642.jpeg" },
 { src: "https://images.pexels.com/photos/6143367/pexels-photo-6143367.jpeg" },
  { src: "https://images.pexels.com/photos/7047432/pexels-photo-7047432.jpeg" },
   { src: "https://images.pexels.com/photos/6757642/pexels-photo-6757642.jpeg" },
  { src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" },
  { src: "https://images.pexels.com/photos/6591155/pexels-photo-6591155.jpeg" },
  { src: "https://images.pexels.com/photos/6143367/pexels-photo-6143367.jpeg" },
  { src: "https://images.pexels.com/photos/7047432/pexels-photo-7047432.jpeg" },
    { src: "https://images.pexels.com/photos/7047432/pexels-photo-7047432.jpeg" },
   { src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" },
  { src: "https://images.pexels.com/photos/6757642/pexels-photo-6757642.jpeg" },
  { src: "https://images.pexels.com/photos/6591155/pexels-photo-6591155.jpeg" },
  { src: "https://images.pexels.com/photos/6143367/pexels-photo-6143367.jpeg" },
  { src: "https://images.pexels.com/photos/7047432/pexels-photo-7047432.jpeg" },
   { src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" },
  { src: "https://images.pexels.com/photos/6757642/pexels-photo-6757642.jpeg" },
  { src: "https://images.pexels.com/photos/6591155/pexels-photo-6591155.jpeg" },
  { src: "https://images.pexels.com/photos/6143367/pexels-photo-6143367.jpeg" },
  { src: "https://images.pexels.com/photos/7047432/pexels-photo-7047432.jpeg" },
   { src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" },
  { src: "https://images.pexels.com/photos/6591155/pexels-photo-6591155.jpeg" },
  { src: "https://images.pexels.com/photos/6143367/pexels-photo-6143367.jpeg" },
  { src: "https://images.pexels.com/photos/7047432/pexels-photo-7047432.jpeg" },
  { src: "https://images.pexels.com/photos/6757642/pexels-photo-6757642.jpeg" },
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
      <h1 className="gallery-title">Explore the Gallery</h1>
      <div className="masonry-grid">
        {images.map((img, idx) => (
          <div className="masonry-item" key={idx}>
            <div className="img-wrapper">
              <img src={img.src} alt={`Gallery ${idx}`} />
              <div className="hover-icon" onClick={() => openLightbox(idx)}>
                <FaExpandAlt />
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[activeIndex].src} alt="enlarged" />
            <span className="close">&times;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryContent;
