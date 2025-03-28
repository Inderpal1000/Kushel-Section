import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "remixicon/fonts/remixicon.css";
import "./NewScrollSection.css";

const ScrollSection = () => {
  const containerRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".scrolled-section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: "+=2000",
        markers: true,
      },
    });

    gsap.to(maskRef.current, {
      width: "100%",
      scrollTrigger: {
        trigger: ".scroll-wrapper",
        start: "top left",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="scroll-wrapper">
      <h2 className="scroll-section-heading">Website Design Process</h2>
      <p className="scroll-section-para">
        Take a peek behind the curtain and explore the custom web design process our team follows. <br />
        We build custom sites for brands of all sizes that deliver measurable results.
      </p>

      <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.9 6C9.4 8.3 7.4 10 5 10C2.2 10 0 7.8 0 5C0 2.2 2.2 0 5 0C7.4 0 9.4 1.7 9.9 4H445.1C445.6 1.7 447.6 0 450 0C452.4 0 454.4 1.7 454.9 4H890.1C890.6 1.7 892.6 0 895 0C897.8 0 900 2.2 900 5C900 7.8 897.8 10 895 10C892.6 10 890.6 8.3 890.1 6H454.9C454.4 8.3 452.4 10 450 10C447.6 10 445.6 8.3 445.1 6H9.9Z" fill="#D9D9D9" />
        <mask id="mask0" style={{ maskType: "alpha" }}>
          <path d="M9.9 6C9.4 8.3 7.4 10 5 10C2.2 10 0 7.8 0 5C0 2.2 2.2 0 5 0C7.4 0 9.4 1.7 9.9 4H445.1C445.6 1.7 447.6 0 450 0C452.4 0 454.4 1.7 454.9 4H890.1C890.6 1.7 892.6 0 895 0C897.8 0 900 2.2 900 5C900 7.8 897.8 10 895 10C892.6 10 890.6 8.3 890.1 6H454.9C454.4 8.3 452.4 10 450 10C447.6 10 445.6 8.3 445.1 6H9.9Z" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0)">
          <rect ref={maskRef} className="mask" y="-49" height="99" fill="black" />
        </g>
      </svg>

      <div className="scroll-container" ref={containerRef}>
        {[...Array(6)].map((_, i) => (
          <div className="scrolled-section" key={i}>
            <picture>
              <source srcSet="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png.webp" type="image/webp" />
              <img className="scroll-card-img" src="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png" alt="iStock" width="210" height="149" />
            </picture>
            <div>
              <h3 className="scroll-card-heading">Planning & Information Architecture</h3>
              <p className="scroll-card-para">
                We utilize proven techniques to map your content, meet user intentions and create an engaging user experience.
              </p>
              <p className="scroll-card-li-heading">Here’s how our team does it:</p>
              <ul className="scroll-card-ul">
                <li><i className="ri-arrow-right-s-fill"></i> We develop a base-level user flow & sitemap</li>
                <li><i className="ri-arrow-right-s-fill"></i> We utilize wireframing to create a seamless conversion funnel</li>
                <li><i className="ri-arrow-right-s-fill"></i> We add on-brand, consistent messaging to your structure</li>
              </ul>
              <span className="card-numbering">{`0${i + 1}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSection;
