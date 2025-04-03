import React from 'react';
import "./Shopify.css";

const Shopify = () => {
    return (
        <div className="shopify-banner-outer-container">
            <div className='shopify-outer-container'>
            <div className="shopify-inner-container">
                <h2 className='shopify-banner-heading'>Process followed by Kushel Digi Solutions as a Shopify web development company</h2>
                <div className="shopify-banner-flex-container">
                    <div className="shopify-banner-left">
                        <img src="/shopify-image.svg" alt="" />
                    </div>
                    <div className="shopify-banner-right">
                        <div className="shopify-banner-right-content">
                            <div id='shopify-1st-service' className="shopify-banner-services">
                                <h3 className='shopify-banner-1st-service-heading'>What are we doing?</h3>
                                <p className='shopify-banner-1st-service-para'>Our team of experts will work with you to define project scope</p>
                            </div>
                            <div id='shopify-2nd-service' className="shopify-banner-services">
                                <h3 className='shopify-banner-2nd-service-heading'>Make it pretty</h3>
                                <p className='shopify-banner-2nd-service-para'>We will work on wireframes to outline UI and UX that you love</p>
                            </div>
                            <div id='shopify-3rd-service' className="shopify-banner-services">
                                <h3 className='shopify-banner-3rd-service-heading'>Let's build it</h3>
                                <p className='shopify-banner-3rd-service-para'>We role up our sleeves and build the Shopify store you envisioned</p>
                            </div>
                            <div id='shopify-4th-service' className="shopify-banner-services">
                                <h3 className='shopify-banner-4th-service-heading'>Do things work well?</h3>
                                <p className='shopify-banner-4th-service-para'>Every version of the store is subjected to rigorous testing and robust feedback loops before it starts making money</p>
                            </div>
                            <div id='shopify-5th-service' className="shopify-banner-services">
                                <h3 className='shopify-banner-5th-service-heading'>Time to go live</h3>
                                <p className='shopify-banner-5th-service-para'>Once you are happy with the final outcome, your Shopify store is deployed live</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Shopify