import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Brands.css';


const Brands = () => {
    var settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        swipeToSlide: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
        cssEase: "linear"

    };
    return (
        <div className='container text-center'>
            <div className="row py-5">
                <Slider {...settings}>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                        <img className='img-fluid d-inline-block' src="https://i.ibb.co/Tghj6Zx/pngwing-com.png" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                        <img className='img-fluid d-inline-block' src="https://i.ibb.co/5K26qMT/pngwing-com-2.png" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                        <img className='img-fluid d-inline-block' src="https://i.ibb.co/C876GwC/pngwing-com-4.png" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                        <img className='img-fluid d-inline-block' src="https://i.ibb.co/JR9cZVv/pngwing-com-3.png" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                        <img className='img-fluid d-inline-block' src="https://i.ibb.co/Zd8x4cR/pngwing-com-5.png" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                        <img className='img-fluid d-inline-block' src="https://i.ibb.co/gmjDphc/pngwing-com-6.png" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Brands;