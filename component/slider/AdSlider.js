"use client";
import React from "react";
import Slider from "react-slick"; // Import react-slick for the slider

const AdSlider = () => {
  // Settings for the slick slider
  const sliderSettings = {
    slidesToShow: 1, // Always show 1 slide at a time
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1, // Always show 1 slide at a time
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1, // Always show 1 slide at a time
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1, // Always show 1 slide at a time
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Always show 1 slide at a time
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Always show 1 slide at a time
        },
      },
    ],
  };

  return (
    <section className="ad-slider-section mt_100">
      <div className="container">
        <Slider {...sliderSettings} className="popular_service_slider wow fadeInUp">
          <div>
            <img
              src="images/blog_10.jpg"
              alt="Ad 1"
              className="img-fluid ad-image"
            />
          </div>
          <div>
            <img
              src="images/blog_10.jpg"
              alt="Ad 2"
              className="img-fluid ad-image"
            />
          </div>
          <div>
            <img
              src="images/blog_10.jpg"
              alt="Ad 3"
              className="img-fluid ad-image"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default AdSlider;
