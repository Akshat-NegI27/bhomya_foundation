import React from "react";
import Navbar from "../../hooks/navbar/Navbar";
import GalleryContent from "../../components/gallery-content/galleryContent";
import Footer from "../../hooks/footer/footer";
const Gallery = () => {
  return (
    <>
      <Navbar />
      <GalleryContent />
      <Footer />
    </>
  );
};

export default Gallery;
