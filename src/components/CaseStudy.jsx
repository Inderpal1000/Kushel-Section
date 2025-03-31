'use client';

import React, { useState } from 'react';
import './CaseStudy.css';

const CaseStudy = () => {
    const caseStudies = [
        { img: '/case1.webp', smallBtnText: "View Case Study", smallImg: '/case1small.webp' },
        { img: '/case2.webp', smallBtnText: "View Case Study", smallImg: '/case2small.webp' },
        { img: '/case3.webp', smallBtnText: "View Case Study", smallImg: '/case3small.webp' },
        { img: '/case4.webp', smallBtnText: "View Case Study", smallImg: '/case4small.webp' },
        { img: '/case5.webp', smallBtnText: "View Case Study", smallImg: '/case5small.webp' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='case-study-container'>
            <div className='case-wrapper'>
                <div className='case-card'>
                    <img className='case-img' src={caseStudies[currentIndex].img} alt='case' />
                </div>
                <div className='small-icons-div'>
                    {caseStudies.map((item, index) => (
                        <div className='small-icons' key={index} >
                            {index === currentIndex && (
                                <span className='case-btnText'>{item.smallBtnText}</span>
                            )}
                            <img
                                className={`small-icon ${index === currentIndex ? 'active' : ''}`}
                                src={item.smallImg}
                                alt='small case'
                                onClick={() => setCurrentIndex(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
