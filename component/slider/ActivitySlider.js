"use client";
import { activitiesData } from "@/data/Data";
import React from "react";
import Slider from "react-slick";

const ActivitySlider = () => {
  return (
    <Slider
      className="row popular_service_slider wow fadeInUp"
      slidesToShow={4} // Set the number of slides to show
      infinite={true}
      dots={true}
      arrows={false}
      autoplay={true}
      slidesToScroll={1} // Set to 1 to scroll one slide at a time
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
            slidesToShow: 3,
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
            slidesToShow: 2,
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
      {activitiesData.map((item) => (
        <div className="col-xl-3" key={item.id}>
          <div className={`tf__activities_item ${item.color} p-4 border rounded shadow`}>
            <span className="display-4">
              <i className={item.iClassName}></i>
            </span>
            <h3 className="h5 mt-3 mb-2">{item.title}</h3>
            <p className="mb-1">
              <strong>Start Date:</strong> {item.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {item.endDate}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ActivitySlider;
