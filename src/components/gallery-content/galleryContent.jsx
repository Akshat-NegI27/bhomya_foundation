import React, { useState, useEffect, useRef } from "react";
import "./galleryContent.css";
import GalleryImage from "./GalleryImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaExpandAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const images = [
{src:"https://i.ibb.co/xqGQX0NP/IMG-20240106-173916-579.webp"},
{src:"https://i.ibb.co/TDcc4X55/IMG-20240106-173916-662.webp"},
{src:"https://i.ibb.co/ZR0xjwz2/IMG-20240107-095141-457.jpg"},
{src:"https://i.ibb.co/chKFMYXT/IMG-20240107-095602-192.jpg"},


];

const GalleryContent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const bannerRef = useRef(null); 

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { scale: 1, borderRadius: "0px" },
        {
          scale: 0.85,
          borderRadius: "30px",
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "-=200",
            end: "+=400",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <div className="gallery-heading-content">
          <h1>THE <span className="highlight">GALLERY</span></h1>
          <p>Echoes of Nature</p>
        </div>
        <img
          ref={bannerRef}
          src="/assets/img/gallery.jpg"
          alt="Gallery Banner"
          className="gallery-banner-image"
        />
        
      </div>

      <h1 className="break-section"></h1>
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
