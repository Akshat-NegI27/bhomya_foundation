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
{src:"https://i.ibb.co/tPWCvsLZ/IMG-20240107-102120-869.jpg"},
{src:"https://i.ibb.co/TqYwv0cn/IMG-20240107-095606-423.jpg"},
{src:"https://i.ibb.co/V0wsgpvw/IMG-20240107-102130-854.jpg"},
{src:"https://i.ibb.co/Kz6KTdYD/IMG-20240107-102949-748.jpg"},
{src:"https://i.ibb.co/DHhSc3NQ/IMG-20240107-103218-817.jpg"},
{src:"https://i.ibb.co/tMkXLh0J/IMG-20240107-103230-894.jpg"},
{src:"https://i.ibb.co/KcPcGMpC/IMG-20240107-104244-313.jpg"},
{src:"https://i.ibb.co/CsNW8zS2/IMG-20240107-104259-935.jpg"},
{src:"https://i.ibb.co/HTzvnGsL/IMG-20240113-083122-703.jpg"},
{src:"https://i.ibb.co/dJLHMwqg/IMG-20240106-173916-493.webp"},
{src:"https://i.ibb.co/20bkCsFq/IMG-20240106-173916-553.webp"},
{src:"https://i.ibb.co/MkLMszP5/IMG-20240106-173916-619.webp"},
{src:"https://i.ibb.co/99fqXbPB/IMG-20240107-094931-748.jpg"},
{src:"https://i.ibb.co/ZpjsrKpK/IMG-20240107-095310-756.jpg"},
{src:"https://i.ibb.co/27yVGjLG/IMG-20240107-095553-167.jpg"},
{src:"https://i.ibb.co/wFq5fyFd/IMG-20240107-095850-678.jpg"},
{src:"https://i.ibb.co/DDTGrnjS/IMG-20240107-095856-416.jpg"},
{src:"https://i.ibb.co/FbGcmNHm/IMG-20240107-095933-471.jpg"},
{src:"https://i.ibb.co/yKGYBfC/IMG-20240107-100007-252.jpg"},
{src:"https://i.ibb.co/chPQXPDj/IMG-20240107-100021-687.jpg"},
{src:"https://i.ibb.co/LdwFPdN1/IMG-20240107-100053-945.jpg"},
{src:"https://i.ibb.co/pvmPwn8h/IMG-20240107-101227-528.jpg"},
{src:"https://i.ibb.co/Fqs5G11P/IMG-20240107-101236-503.jpg"},
{src:"https://i.ibb.co/ns5MN9fp/IMG-20240107-101505-430.jpg"},
{src:"https://i.ibb.co/mrHqT2Cz/IMG-20240107-102054-096.jpg"},
{src:"https://i.ibb.co/nNbrZR1P/IMG-20240107-102106-173.jpg"},
{src:"https://i.ibb.co/q3tcqpxM/IMG-20240107-102107-985.jpg"},
{src:"https://i.ibb.co/s9b0tK7Q/IMG-20240107-102128-120.jpg"},
{src:"https://i.ibb.co/jk8QCkm2/IMG-20240107-102937-365.jpg"},
{src:"https://i.ibb.co/Y5NKrRB/IMG-20240107-103216-943.jpg"},
{src:"https://i.ibb.co/ywd94vV/IMG-20240107-103228-916.jpg"},
{src:"https://i.ibb.co/Xr35bKvX/IMG-20240107-104245-984.jpg"},
{src:"https://i.ibb.co/HfssC8pZ/IMG-20240107-104248-227.jpg"},
{src:"https://i.ibb.co/TDfWBVtj/IMG-20240113-082939-024.jpg"},
{src:"https://i.ibb.co/FqLVxgh9/IMG-20240113-082947-435.jpg"},
{src:"https://i.ibb.co/TxGFyxnz/IMG-20240113-082951-989.jpg"},
{src:"https://i.ibb.co/mF0WQVY0/IMG-20240113-083121-010.jpg"},
{src:"https://i.ibb.co/fKFbvHx/IMG-20240113-083124-006.jpg"},
{src:"https://i.ibb.co/Fbp3MCC0/IMG-20240113-083138-671.jpg"},
{src:"https://i.ibb.co/V03WDG1T/IMG-20240113-083151-559.jpg"},
{src:"https://i.ibb.co/gLPNScqr/IMG-20240113-083631-532.jpg"},
{src:"https://i.ibb.co/VcNpHG1M/IMG-20240113-083633-972.jpg"},
{src:"https://i.ibb.co/n8Qs4Ct4/IMG-20240113-083730-919.jpg"},
{src:"https://i.ibb.co/0jRgMFny/IMG-20240113-083735-668.jpg"},
{src:"https://i.ibb.co/KjYqZPtk/IMG-20240113-083737-816.jpg"},
{src:"https://i.ibb.co/SXr6C3Zm/IMG-20240113-083740-889.jpg"},
{src:"https://i.ibb.co/5xstM2h1/IMG-20240113-083846-222.jpg"},
{src:"https://i.ibb.co/bgj6t1kT/IMG-20240113-084103-046.jpg"},
{src:"https://i.ibb.co/nMsTncTb/IMG-20240113-084104-761.jpg"},
{src:"https://i.ibb.co/PzcvNqR4/IMG-20240113-084107-128.jpg"},
{src:"https://i.ibb.co/1JKdq0Hn/IMG-20240113-084200-115.jpg"},
{src:"https://i.ibb.co/d4SBS0LS/IMG-20240113-084209-115.jpg"},
{src:"https://i.ibb.co/r2cCS1HB/IMG-20240113-084210-503.jpg"},
{src:"https://i.ibb.co/LdXLTtR0/IMG-20240113-084255-032.jpg"},
{src:"https://i.ibb.co/4Lpg3Vx/IMG-20240113-084303-841.jpg"},
{src:"https://i.ibb.co/x8cTyR0J/IMG-20240113-084315-572.jpg"},
{src:"https://i.ibb.co/4gKhPf8Z/IMG-20240113-084333-041.jpg"},
{src:"https://i.ibb.co/C59mMCf7/IMG-20240113-084340-948.jpg"},
{src:"https://i.ibb.co/pBhtMRmm/IMG-20240113-084343-982.jpg"},
{src:"https://i.ibb.co/tT7PB4Z2/IMG-20240113-084704-682.jpg"},
{src:"https://i.ibb.co/JjfVHCHS/IMG-20240113-084717-288.jpg"},
{src:"https://i.ibb.co/rRfxvkyn/IMG-20240113-084720-336.jpg"},
{src:"https://i.ibb.co/vxjz7mVq/IMG-20240113-084725-900.jpg"},
{src:"https://i.ibb.co/xq28sCQ3/IMG-20240113-084733-539.jpg"},
{src:"https://i.ibb.co/d033c7D8/IMG-20240113-084756-228.jpg"},
{src:"https://i.ibb.co/HTQsrkq8/IMG-20240113-084800-236.jpg"},
{src:"https://i.ibb.co/Z1Bx3z2f/IMG-20240113-084814-471.jpg"},
{src:"https://i.ibb.co/B8wD3XX/IMG-20240113-084921-539.jpg"},
{src:"https://i.ibb.co/YBpw45c1/IMG-20240113-084925-940.jpg"},
{src:"https://i.ibb.co/9HYRjX7P/IMG-20240113-084933-380.jpg"},
{src:"https://i.ibb.co/Kn5p9R3/IMG-20240113-085002-812.jpg"},
{src:"https://i.ibb.co/4n2Zr1k5/IMG-20240113-085005-745.jpg"},
{src:"https://i.ibb.co/nNZ15Bff/IMG-20240113-085008-579.jpg"},
{src:"https://i.ibb.co/sJ1p10DZ/IMG-20240113-085058-415.jpg"},
{src:"https://i.ibb.co/XrvTpJqh/IMG-20240113-085448-012.jpg"},
{src:"https://i.ibb.co/Y7F3mMdf/IMG-20240113-085503-441.jpg"},
{src:"https://i.ibb.co/8LTy63Dz/IMG-20240113-085508-946.jpg"},
{src:"https://i.ibb.co/gLd0SxSg/IMG-20240113-085512-988.jpg"},
{src:"https://i.ibb.co/xKM46kvf/IMG-20240113-085552-057.jpg"},
{src:"https://i.ibb.co/JjzBJx1v/IMG-20240113-085556-694.jpg"},
{src:"https://i.ibb.co/GvBmxZ01/IMG-20240113-085703-274.jpg"},
{src:"https://i.ibb.co/V0nnSpsJ/IMG-20240113-085705-475.jpg"},
{src:"https://i.ibb.co/Zz8jbMr5/IMG-20240113-085746-250.jpg"},
{src:"https://i.ibb.co/qYqKdYNK/IMG-20240113-085753-195.jpg"},
{src:"https://i.ibb.co/1fctWKKg/IMG-20240113-085844-242.jpg"},
{src:"https://i.ibb.co/Zph00Q32/IMG-20240113-085851-051.jpg"},
{src:"https://i.ibb.co/vxqQFM9J/IMG-20240113-085856-679.jpg"},
{src:"https://i.ibb.co/LdNNm2Sh/IMG-20240113-085914-210.jpg"},
{src:"https://i.ibb.co/VcWsZ81D/IMG-20240113-085947-135.jpg"},
{src:"https://i.ibb.co/m56PS0Vk/IMG-20240113-085954-457.jpg"},
{src:"https://i.ibb.co/vxRFSjgg/IMG-20240113-090015-562.jpg"},
{src:"https://i.ibb.co/6RtFsTpJ/IMG-20240113-090059-558.jpg"},
{src:"https://i.ibb.co/CKtfdmDG/IMG-20240113-090106-093.jpg"},
{src:"https://i.ibb.co/jPCLmz88/IMG-20240113-090114-425.jpg"},
{src:"https://i.ibb.co/S7GkC67w/IMG-20240113-090145-266.jpg"},
{src:"https://i.ibb.co/BHZhQRqb/IMG-20240113-090226-089.jpg"},
{src:"https://i.ibb.co/7xF1Dnny/IMG-20240113-090228-696.jpg"},
{src:"https://i.ibb.co/wZXwz0Py/IMG-20240113-090314-812.jpg"},
{src:"https://i.ibb.co/6zrFnwS/IMG-20240113-090614-585.jpg"},
{src:"https://i.ibb.co/jZ14LQ1m/IMG-20240113-090619-687.jpg"},
{src:"https://i.ibb.co/5hZQk6m4/IMG-20240113-090621-886.jpg"},
{src:"https://i.ibb.co/d81KBsh/IMG-20240113-091119-085.jpg"},
{src:"https://i.ibb.co/cK0yLYqQ/IMG-20240113-091146-073.jpg"},
{src:"https://i.ibb.co/JWd3sMSD/IMG-20240113-091200-332.jpg"},
{src:"https://i.ibb.co/Y463FYcx/IMG-20240113-091204-566.jpg"},
{src:"https://i.ibb.co/4nGTcmcL/IMG-20240113-091224-646.jpg"},
{src:"https://i.ibb.co/vCCvX5jj/IMG-20240113-091248-034.jpg"},
{src:"https://i.ibb.co/fV4wm4HP/IMG-20240113-091250-834.jpg"},
{src:"https://i.ibb.co/RT1HMscZ/IMG-20240113-091303-027.jpg"},
{src:"https://i.ibb.co/YF6cDDCn/IMG-20240113-091855-968.jpg"},
{src:"https://i.ibb.co/dJDhK1PD/IMG-20240113-091911-738.jpg"},
{src:"https://i.ibb.co/qLbVRLW4/IMG-20240113-091942-205.jpg"},
{src:"https://i.ibb.co/PVqQgT0/IMG-20240113-091953-968.jpg"},
{src:"https://i.ibb.co/67BP6Btm/IMG-20240113-092006-099.jpg"},
{src:"https://i.ibb.co/ZpnH5HvV/IMG-20240113-092054-363.jpg"},
{src:"https://i.ibb.co/qFCRZzH2/IMG-20240113-092059-382.jpg"},
{src:"https://i.ibb.co/sdRFZHGY/IMG-20240113-092321-569.jpg"},
{src:"https://i.ibb.co/mC3ZvHJZ/IMG-20240113-092441-686.jpg"},
{src:"https://i.ibb.co/twhKFyMF/IMG-20240113-092443-684.jpg"},
{src:"https://i.ibb.co/6RQG1c11/IMG-20240113-092447-755.jpg"},
{src:"https://i.ibb.co/pBWqc7ty/IMG-20240113-092512-821.jpg"},
{src:"https://i.ibb.co/DPmRFXDv/IMG-20240113-092526-916.jpg"},
{src:"https://i.ibb.co/jvPQ18Xg/IMG-20240113-093607-020.jpg"},
{src:"https://i.ibb.co/XfpcZ6qf/IMG-20240113-094037-979.jpg"},
{src:"https://i.ibb.co/CKLBZCr2/IMG-20240113-094058-374.jpg"},
{src:"https://i.ibb.co/VWfvTyqz/IMG-20240113-094247-730.jpg"},
{src:"https://i.ibb.co/d4xLdpdJ/IMG-20240113-094421-319.jpg"},
{src:"https://i.ibb.co/Rk4JspCx/IMG-20240113-094514-366.jpg"},
{src:"https://i.ibb.co/Nns3KKmv/IMG-20240113-094634-539.jpg"},
{src:"https://i.ibb.co/HfSDQW8k/IMG-20240113-094935-502.jpg"},
{src:"https://i.ibb.co/2Y0cfH3g/IMG-20240113-094940-045.jpg"},
{src:"https://i.ibb.co/HpBP9W8b/IMG-20240113-094943-835.jpg"},
{src:"https://i.ibb.co/Xx5BvF6w/IMG-20240113-100123-800.jpg"},
{src:"https://i.ibb.co/fGksdpsK/IMG-20240113-100136-672.jpg"},
{src:"https://i.ibb.co/rGjkHfzZ/IMG-20240113-100141-815.jpg"},
{src:"https://i.ibb.co/qLhX0Nmw/IMG-20240113-100156-547.jpg"},
{src:"https://i.ibb.co/0V2Pg6P7/IMG-20240113-100515-321.jpg"},
{src:"https://i.ibb.co/j9YnQzPN/IMG-20240113-101144-849.jpg"},
{src:"https://i.ibb.co/SX26tjbT/IMG-20240113-101147-537.jpg"},
{src:"https://i.ibb.co/yFyh4NkX/IMG-20240113-101153-391.jpg"},
{src:"https://i.ibb.co/rKpkXwTS/IMG-20240113-101204-860.jpg"},
{src:"https://i.ibb.co/twdJ805R/IMG-20240113-101206-417.jpg"},
{src:"https://i.ibb.co/d4BtCBfg/IMG-20240113-101233-657.jpg"},
{src:"https://i.ibb.co/p6v7dbCx/IMG-20240113-101236-500.jpg"},
{src:"https://i.ibb.co/gZCVVJqd/IMG-20240113-101247-419.jpg"},
{src:"https://i.ibb.co/chnwF51H/IMG-20240830-111551-156.jpg"},
{src:"https://i.ibb.co/TqY933zm/IMG-20240830-111722-992.jpg"},
{src:"https://i.ibb.co/cXVrqjF4/IMG-20240830-112434-402.jpg"},
{src:"https://i.ibb.co/svM5KwKq/IMG-20240830-112437-260.jpg"},
{src:"https://i.ibb.co/8hXNn4R/IMG-20240830-112458-708.jpg"},
{src:"https://i.ibb.co/xtWx83Sh/IMG-20240830-112623-150.jpg"},
{src:"https://i.ibb.co/W43tV79H/IMG-20240830-112641-328.jpg"},
{src:"https://i.ibb.co/rRVz81wN/IMG-20240830-112646-786.jpg"},
{src:"https://i.ibb.co/Gvzrznpz/IMG-20240830-112651-728.jpg"},
{src:"https://i.ibb.co/Z1tJr0jB/IMG-20240830-112828-522.jpg"},
{src:"https://i.ibb.co/KcRsDCDS/IMG-20240830-112830-777.jpg"},
{src:"https://i.ibb.co/7JK2xqRn/IMG-20240830-112832-299.jpg"},
{src:"https://i.ibb.co/wrbtpmDh/IMG-20240830-112905-277.jpg"},
{src:"https://i.ibb.co/SXdtVQ1D/IMG-20240830-112835-245.jpg"},
{src:"https://i.ibb.co/RGGXr7pp/IMG-20240830-112931-271.jpg"},
{src:"https://i.ibb.co/Hf8YfBCZ/IMG-20240830-113014-916.jpg"},
{src:"https://i.ibb.co/ksLRrjc9/IMG-20240830-113022-399.jpg"},
{src:"https://i.ibb.co/qTMFc3G/IMG-20240830-113030-373.jpg"},
{src:"https://i.ibb.co/qMLnhWzX/IMG-20240830-113037-062.jpg"},
{src:"https://i.ibb.co/MyL03NBd/IMG-20240830-113103-140.jpg"},
{src:"https://i.ibb.co/XrMCD2Ys/IMG-20240830-113159-256.jpg"},
{src:"https://i.ibb.co/cSF978Cy/IMG-20240830-113226-009.jpg"},
{src:"https://i.ibb.co/v4Qqt6RR/IMG-20240830-113426-344.jpg"},
{src:"https://i.ibb.co/4nm7q401/IMG-20240830-113431-978.jpg"},
{src:"https://i.ibb.co/8DznTXnp/IMG-20240830-114154-096.jpg"},
{src:"https://i.ibb.co/C3Jcth0r/IMG-20240830-114736-901.jpg"},
{src:"https://i.ibb.co/wFQbvmhS/IMG-20240830-114740-150.jpg"},
{src:"https://i.ibb.co/cSTrwpps/IMG-20240830-115104-448.jpg"},
{src:"https://i.ibb.co/5X26SqS5/IMG-20240830-115946-858.jpg"},
{src:"https://i.ibb.co/xq1hJ5FW/IMG-20240830-115949-006.jpg"},
{src:"https://i.ibb.co/hFrtKJRs/IMG-20240830-115952-990.jpg"},
{src:"https://i.ibb.co/HLsnnPxL/IMG-20240830-115955-960.jpg"},
{src:"https://i.ibb.co/tMzxyxvv/IMG-20240830-120000-647.jpg"},
{src:"https://i.ibb.co/sp3pdr93/IMG-20240830-120003-578.jpg"},
{src:"https://i.ibb.co/HLKWYBjK/IMG-20240830-120007-866.jpg"},
{src:"https://i.ibb.co/GvZqHvBn/IMG-20240830-120010-036.jpg"},
{src:"https://i.ibb.co/N2zQjdbC/IMG-20240830-120015-366.jpg"},
{src:"https://i.ibb.co/Qjh3dpZL/IMG-20240830-120018-320.jpg"},
{src:"https://i.ibb.co/60x3dctJ/IMG-20240830-125531-667.jpg"},
{src:"https://i.ibb.co/wrSwpLJ0/IMG-20240830-125622-641.jpg"},
{src:"https://i.ibb.co/21bGb4XB/IMG-20240830-125624-361.jpg"},
{src:"https://i.ibb.co/yn9kDV7W/IMG-20240830-125649-691.jpg"},
{src:"https://i.ibb.co/Fb7YRpSK/IMG-20240830-125651-688.jpg"},
{src:"https://i.ibb.co/jvwtVkCM/IMG-20240830-125705-134.jpg"},
{src:"https://i.ibb.co/r26cXpjb/IMG-20240830-125712-944.jpg"},
{src:"https://i.ibb.co/5h7STGk5/IMG-20240831-102712-383.jpg"},
{src:"https://i.ibb.co/M5BQj83Y/IMG-20240831-102716-616.jpg"},
{src:"https://i.ibb.co/Ngyg4Y9g/IMG-20240831-102720-673.jpg"},
{src:"https://i.ibb.co/CKwzQfhx/IMG-20240831-102733-681.jpg"},
{src:"https://i.ibb.co/W4HsXCbJ/IMG-20240831-102735-871.jpg"},
{src:"https://i.ibb.co/4ZZFkcfj/IMG-20240831-102739-201.jpg"},
{src:"https://i.ibb.co/0yh4g6Jw/IMG-20240831-103156-065.jpg"},
{src:"https://i.ibb.co/XrCZhQ6D/IMG-20240831-103158-815.jpg"},
{src:"https://i.ibb.co/fYRLjRFz/IMG-20240831-103202-214.jpg"},
{src:"https://i.ibb.co/Y7RSRtvR/IMG-20240831-104247-751.jpg"},
{src:"https://i.ibb.co/HLbdTkHg/IMG-20240831-104253-954.jpg"},
{src:"https://i.ibb.co/dwPGQDYT/IMG-20240831-104409-617.jpg"},
{src:"https://i.ibb.co/m5xVM1jW/IMG-20240831-110355-883.jpg"},
{src:"https://i.ibb.co/jP9cS3Zn/IMG-20240831-110357-436.jpg"},
{src:"https://i.ibb.co/n8z9B2TN/IMG-20240831-112141-168.jpg"},
{src:"https://i.ibb.co/YYzMPPD/IMG-20240831-112146-787.jpg"},

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
