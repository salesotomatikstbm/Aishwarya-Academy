"use client";
import React from "react";
import Slider from "react-slick";
import { teamData1 } from "@/data/Data";
import Link from "next/link";

const TeamSliderA = () => {
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
            slidesToShow: 2, // Shows 2 slides on mobile
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2, // Ensures 2 slides for small screens
          },
        },
      ]}
    >
      {teamData1.slice(0, 22).map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item.id}>
          <div className="tf__single_team">
            <div className="tf__single_team_img">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="img-fluid team-image"
              />
            </div>
            <div className="tf__single_team_text">
              <Link className="title team-title" href={`/team/${item.slug}`}>
                {item.name}
              </Link>
              <p className="team-designation">{item.designation}</p>
              <p className="team-about" style={{ fontWeight: "bold" }}>
  {item.about}
</p>

            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TeamSliderA;
