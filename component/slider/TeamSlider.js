"use client";
import React from "react";
import Slider from "react-slick";
import { teamData } from "@/data/Data";
import Link from "next/link";

const TeamSlider = () => {
  return (
    <Slider
      className="row event_slider"
      slidesToShow={3} // Default desktop view
      infinite={true}
      dots={true}
      autoplay={true}
      arrows={false}
      slidesToScroll={1} // Scroll one at a time
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
            slidesToShow: 1, // Now shows 2 slides on mobile
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1, // Ensuring 2 slides for small screens
          },
        },
      ]}
    >
      {teamData.slice(0, 4).map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item.id}>
          <div className="tf__single_team">
            <div className="tf__single_team_img">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="img-fluid w-100"
              />
            </div>
            {/* <div className="tf__single_team_text">
              <Link className="title" href={`/team/${item.slug}`}>
                {item.name}
              </Link>
              <p>{item.designation}</p>
              <p>{item.about}</p>
            </div> */}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TeamSlider;
