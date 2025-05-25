import React, { useRef, useState, useEffect } from "react";

const GalleryImage = ({ src, alt, onClick }) => {
  const imgRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <div className="masonry-item" ref={imgRef}>
      {visible && (
        <div className="img-wrapper">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width="100%"
            height="auto"
          />
          <div className="hover-icon" onClick={onClick}>
            <i className="expand-icon">🔍</i>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImage;
