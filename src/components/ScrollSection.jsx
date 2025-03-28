import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const scrollContainer = scrollContainerRef.current;
        const totalWidth = scrollContainer.scrollWidth - window.innerWidth;

        gsap.set(scrollContainer, { x: 0 });

        gsap.to(scrollContainer, {
            x: () => -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    let progress = self.progress * 100;
                    if (progressRef.current) {
                        progressRef.current.style.width = `${progress}%`;
                    }
                },
            },
        });

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
    }, []);

    return (
        <div ref={sectionRef} className="horizontal-section">
           
            <div className="progress-container">
                <div ref={progressRef} className="progress-line"></div>
            </div>

            <div className="scroll-container" ref={scrollContainerRef}>
                <div className="panel">Panel 1 - Planning & Architecture</div>
                <div className="panel">Panel 2 - Creative Design</div>
                <div className="panel">
                    <div>
                        <div />
                        <div>
                            <picture>
                                <source srcSet="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png.webp" type="image/webp" />
                                <img decoding="async" loading="lazy" src="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png" alt="iStock-932335774 3" width={210} height={149} />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h3>Planning &amp; Information Architecture</h3>
                                </div>
                                <div>
                                    <p>We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, <strong>we ensure seamless user journeys to key conversion points</strong>.</p>
                                    <p>Here’s how our team does it:</p>
                                    <ul>
                                        <li>We develop a base-level user flow &amp; sitemap</li>
                                        <li>We utilize wireframing to create a seamless conversion funnel</li>
                                        <li>We add on-brand, consistent messaging to your structure</li>
                                    </ul>
                                </div>
                                <span>01</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div>
                        <div />
                        <div>
                            <picture>
                                <source srcSet="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png.webp" type="image/webp" />
                                <img decoding="async" loading="lazy" src="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png" alt="iStock-932335774 3" width={210} height={149} />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h3>Planning &amp; Information Architecture</h3>
                                </div>
                                <div>
                                    <p>We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, <strong>we ensure seamless user journeys to key conversion points</strong>.</p>
                                    <p>Here’s how our team does it:</p>
                                    <ul>
                                        <li>We develop a base-level user flow &amp; sitemap</li>
                                        <li>We utilize wireframing to create a seamless conversion funnel</li>
                                        <li>We add on-brand, consistent messaging to your structure</li>
                                    </ul>
                                </div>
                                <span>02</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div>
                        <div />
                        <div>
                            <picture>
                                <source srcSet="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png.webp" type="image/webp" />
                                <img decoding="async" loading="lazy" src="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png" alt="iStock-932335774 3" width={210} height={149} />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h3>Planning &amp; Information Architecture</h3>
                                </div>
                                <div>
                                    <p>We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, <strong>we ensure seamless user journeys to key conversion points</strong>.</p>
                                    <p>Here’s how our team does it:</p>
                                    <ul>
                                        <li>We develop a base-level user flow &amp; sitemap</li>
                                        <li>We utilize wireframing to create a seamless conversion funnel</li>
                                        <li>We add on-brand, consistent messaging to your structure</li>
                                    </ul>
                                </div>
                                <span>03</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div>
                        <div />
                        <div>
                            <picture>
                                <source srcSet="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png.webp" type="image/webp" />
                                <img decoding="async" loading="lazy" src="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png" alt="iStock-932335774 3" width={210} height={149} />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h3>Planning &amp; Information Architecture</h3>
                                </div>
                                <div>
                                    <p>We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, <strong>we ensure seamless user journeys to key conversion points</strong>.</p>
                                    <p>Here’s how our team does it:</p>
                                    <ul>
                                        <li>We develop a base-level user flow &amp; sitemap</li>
                                        <li>We utilize wireframing to create a seamless conversion funnel</li>
                                        <li>We add on-brand, consistent messaging to your structure</li>
                                    </ul>
                                </div>
                                <span>04</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div>
                        <div />
                        <div>
                            <picture>
                                <source srcSet="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png.webp" type="image/webp" />
                                <img decoding="async" loading="lazy" src="https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png" alt="iStock-932335774 3" width={210} height={149} />
                            </picture>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h3>Planning &amp; Information Architecture</h3>
                                </div>
                                <div>
                                    <p>We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, <strong>we ensure seamless user journeys to key conversion points</strong>.</p>
                                    <p>Here’s how our team does it:</p>
                                    <ul>
                                        <li>We develop a base-level user flow &amp; sitemap</li>
                                        <li>We utilize wireframing to create a seamless conversion funnel</li>
                                        <li>We add on-brand, consistent messaging to your structure</li>
                                    </ul>
                                </div>
                                <span>05</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
