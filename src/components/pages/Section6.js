import React from 'react'
import '../css/Section6.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../img/logo1.jpg'
import logo2 from '../img/logo2.jpg'
import logo3 from '../img/logo3.jpg'
import logo4 from '../img/logo4.jpg'
import logo5 from '../img/logo5.png'
import logo6 from '../img/logo6.jpg'
import logo7 from '../img/logo7.png'
import logo8 from '../img/logo8.png'
import logo9 from '../img/logo9.jpg'
import logo10 from '../img/logo-1.jpg'

const Section6 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='slider-show'>
                <h2 className='text-center py-3'> Responsive </h2>
                <Slider {...settings}>
                    <div className='sl-box'>
                        <img src={logo1} alt="" />
                    </div>
                    <div className='sl-box'>
                        <img src={logo2} alt="" />
                    </div>
                    <div className='sl-box'>
                        <img src={logo3} alt="" />
                    </div>
                    <div className='sl-box'>
                        <img src={logo4} alt="" />
                    </div>
                    <div className='sl-box'>
                        <img src={logo5} alt="" />
                    </div>
                    <div className='sl-box'>
                        <img src={logo6} alt="" />
                    </div>
                    <div className='sl-box'>
                        <img src={logo7} alt="" />
                    </div>
                    <div className='sl-box'>
                        <img src={logo8} alt="" />
                    </div>
                    <div className='sl-box'>
                        <img src={logo9} alt="" />
                    </div>
                    <div className='sl-box'>
                        <img src={logo10} alt="" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Section6
