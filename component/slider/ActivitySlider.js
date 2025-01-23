"use client";
import React from "react";
import Slider from "react-slick";
import { whyChooseUsData } from "@/data/Data"; // Ensure correct path

const ActivitySlider = () => {
  console.log("Why Choose Us Data:", whyChooseUsData);

  return (
    <Slider
      className="popular_service_slider wow fadeInUp"
      slidesToShow={4}
      infinite={true}
      dots={true}
      arrows={false}
      autoplay={true}
      slidesToScroll={1}
      responsive={[
        { breakpoint: 1400, settings: { slidesToShow: 3 } },
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } },
      ]}
    >
      {whyChooseUsData?.map((item) => (
        <div key={item.id}>
          <div className="tf__activities_item p-4 border rounded shadow text-center">
            <span className="display-4 d-block mb-3">
              <i className={item.icon}></i>
            </span>
            <h3 className="h5 mt-3 mb-2">{item.title}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ActivitySlider;
