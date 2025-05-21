import React from "react";
import Navbar from "../../hooks/navbar/Navbar";
import StoreContent from "../../components/store-content/storeContent";
import Footer from "../../hooks/footer/footer";
const Store = () => {
  return (
    <>
      <Navbar />
      <StoreContent />
      <Footer />
    </>
  );
};

export default Store;
