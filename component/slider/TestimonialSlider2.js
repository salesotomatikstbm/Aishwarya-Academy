"use client";
import React from "react";
import Slider from "react-slick";
import { testimonialData } from "@/data/Data";

const TestimonialSlider2 = () => {
  return (
    <Slider
      className="row testi_slider_2"
      slidesToShow={3}
      infinite={true}
      dots={true}
      autoplay={true}
      arrows={false}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {testimonialData.map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item.id}>
          <div
            className="tf__single_testimonial_2 tf__single_testimonial border p-3 rounded shadow-sm"
            style={{
              border: "2px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="description">{item.desc}</p>
            <h3 className="title">{item.name}</h3>
            <p className="designation" style={{ color: "red" }}>{item.designation}</p>

          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider2;
