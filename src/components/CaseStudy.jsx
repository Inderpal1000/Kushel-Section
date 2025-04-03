'use client';

import React, { useState } from 'react';
import './CaseStudy.css';
import { FaArrowRightLong } from 'react-icons/fa6';
// import { useRouter } from 'next/navigation';

const CaseStudy = () => {

    const caseStudies = [
        { img: '/case1.webp', smHeading: 'BigCommerce Experts', smallBtnText: "View Case Study", smallImg: '/case1small.webp', heading: "Build and Optimize Your Online Store with BigCommerce Solutions",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ] },
        { img: '/case2.webp', smHeading: 'BigCommerce Experts', smallBtnText: "View Case Study", smallImg: '/case2small.webp', heading: "Build and Optimize Your Online Store with BigCommerce Solutions",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ]  },
        { img: '/case3.webp', smHeading: 'BigCommerce Experts', smallBtnText: "View Case Study", smallImg: '/case3small.webp', heading: "Build and Optimize Your Online Store with BigCommerce Solutions",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ]  },
        { img: '/case4.webp', smHeading: 'BigCommerce Experts', smallBtnText: "View Case Study", smallImg: '/case4small.webp', heading: "Build and Optimize Your Online Store with BigCommerce Solutions",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ]  },
        { img: '/case5.webp', smHeading: 'BigCommerce Experts', smallBtnText: "View Case Study", smallImg: '/case5small.webp', heading: "Build and Optimize Your Online Store with BigCommerce Solutions",bigCommerce : [
            {
                bigImg1 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/BCbigdev-1_yq1t56.png',
                bigImg2 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340284/bcb2b-1_onvun7.png',
                bigImg3 : 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png'
            }
        ]  },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    // const navigate = useRouter();

    return (
        <div className='case-study-container'>
            <div className='case-wrapper'>
                <h2 className='big-card-heading'>{caseStudies[currentIndex].heading}</h2>
                <div className='case-card'>
                    <img className='case-img' src={caseStudies[currentIndex].img} alt='case' />
                    <div className="card-info">
                        <p>{caseStudies[currentIndex].smHeading}</p>
                        <h2>{caseStudies[currentIndex].heading}</h2>
                        {
                            caseStudies[currentIndex].bigCommerce.map((item,index)=>(
                               <div key={index} className="bigcommerceImg-card">
                                <img src={item.bigImg1} alt="bigImg1"/>
                                {/* <img src={item.bigImg2} alt="bigImg2"/> */}
                                <img src={item.bigImg3} alt="bigImg3"/>
                               </div>
                            ))
                        }
                        <div className='flex-bigcommerce-banner-btns'>
                        <a href='#form-section' className='bigcommerce-banner-btn'>Talk to a Consultant</a>
                        <button className='bigcommerce-banner-btn big-transparent-btn'>Book a Call  <FaArrowRightLong /></button>
                    </div>
                    </div>
                    <div className='small-icons-div'>
                        {caseStudies.map((item, index) => (
                            <div onClick={() => setCurrentIndex(index)} className='small-icons' key={index} >
                                {index === currentIndex && (
                                    <span className='case-btnText'>{item.smallBtnText}</span>
                                )}
                                <img
                                    className={`small-icon ${index === currentIndex ? 'active' : ''}`}
                                    src={item.smallImg}
                                    alt='small case'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {
                            caseStudies[currentIndex].bigCommerce.map((item,index)=>(
                               <div key={index} className="bigcommerceImg-card bigcommerce-down-images">
                                <img src={item.bigImg1} alt="bigImg1"/>
                                {/* <img src={item.bigImg2} alt="bigImg2"/> */}
                                <img src={item.bigImg3} alt="bigImg3"/>
                               </div>
                            ))
                        }
            </div>
        </div>
    );
};

export default CaseStudy;
