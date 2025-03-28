import { useEffect, useState } from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import "./OldBanner.css";

export default function BannerComponent() {
  const slides = [
    {
      heading: "Connect Your Apps, ERPs, CRMs, EHRs, EDI, Databases & More...",
      buttonText: "Integrate Your Business",
    },
    {
      heading: "Scale your B2B Business with a Powerhouse Online eCommerce Platform...",
      buttonText: "Discover your Solution",
    },
    {
      heading: "Discover the Integrations That Best Suit Your Business Needs...",
      buttonText: "Discover Your Integration",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
    waitForAnimate: false,
    beforeChange: (_, next) => {
      setActiveIndex(next);
    },
  };

  return (
    <div className="banner-container">
      <AnimatePresence mode="wait">
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.3 }} 
       className="inner-banner-container">
        <div className="banner-left">
          <div className="banner-left-icons">
            {slides.map((_, index) => (
              <div key={index} onClick={() => setActiveIndex(index)}>
                {index === activeIndex ? (
                  <FaCircle className="cursor-pointer click-icons" />
                ) : (
                  <FaRegCircle className="cursor-pointer click-icons" />
                )}
              </div>
            ))}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeIndex} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }} 
                className="banner-left-heading"
              >
                {slides[activeIndex].heading}
              </motion.h1>
            </AnimatePresence>

            <p className="banner-left-para">How you need it. When you need it.</p>
            <motion.button
              key={`btn-${activeIndex}`} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="banner-left-btn"
            >
              {slides[activeIndex].buttonText}
            </motion.button>
          </div>
        </div>

        <div className="banner-right">
          <div className="banner-right-slider">
            <Slider {...settings}>
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741088247/MacBook_2_2_two22g.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742641401/immmmm-removebg-preview_yhm4on.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741089462/Group_1171281256_1_znsijn.png"
                alt=""
              />
            </Slider>
          </div>
        </div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
