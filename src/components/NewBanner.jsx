import React from 'react';
import "./NewBanner.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaArrowRightLong } from 'react-icons/fa6';

const NewBanner = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        pauseOnHover: false
    };

    return (
        <div className='new-banner-container'>
            <div className="inner-new-banner-container">
                <div className="new-banner-left">
                    <h3 className='sm-banner-heading'><img src="/new-banner-star.svg" alt="star-icon" /> Custom Ecommerce Solutions</h3>
                    <h1 className='new-banner-heading'>Expert Ecommerce Solutions Powered by Bigcommerce</h1>
                    <h4 className='new-banner-para'>As a BigCommerce Certified Partner, Kushel Digi designs, develops, and optimizes eCommerce stores that deliver results and help brands to succeed in the ecommerce world.
                    </h4>
                    {/* <button className='new-banner-btn'>SCHEDULE A DEMO</button> */}
                    <div className='flex'>
                    <button className='new-banner-btn colored'>Talk to a Consultant</button>
                    <button className='new-banner-btn transparent'>Book a Call  <FaArrowRightLong /></button>
                    </div>
                </div>

                <div className="new-banner-right">
                    <div className="new-banner-right-slider">
                        <Slider {...settings}>
                            <img className='new-banner-scroll-img'
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741088247/MacBook_2_2_two22g.png"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742641401/immmmm-removebg-preview_yhm4on.png"
                                alt=""
                            />
                            <img className='new-banner-scroll-img'
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741089462/Group_1171281256_1_znsijn.png"
                                alt=""
                            />
                        </Slider>

                        <img className='floatingIcon1' src="/floatingIcon1.png" alt="" />
                        <img className='floatingIcon2' src="/floatingIcon2.png" alt="" />
                        <img className='floatingIcon3' src="/floatingIcon3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewBanner