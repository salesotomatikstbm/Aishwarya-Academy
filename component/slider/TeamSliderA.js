"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { teamData1 } from "@/data/Data";
import Link from "next/link";

const TeamSliderA = () => {
  const [activeDot, setActiveDot] = useState(0);

  const settings = {
    className: "row event_slider",
    slidesToShow: 3, // Default desktop view
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1, // Scroll one at a time
    dots: false, // Hide default dots
    beforeChange: (oldIndex, newIndex) => setActiveDot(newIndex % 3), // Ensure 3 dots only
    responsive: [
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="team-slider-wrapper">
      <Slider {...settings}>
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
                <p className="title team-title">
                  {item.name}
                </p>
                {/* href={`/team/${item.slug}`} */}
                <p className="team-designation">{item.designation}</p>
                <p className="team-about" style={{ fontWeight: "bold" }}>
                  {item.about}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Dots - Only 3 */}
      <div className="custom-dots">
        {[0, 1, 2].map((dotIndex) => (
          <button
            key={dotIndex}
            className={`dot ${activeDot === dotIndex ? "active" : ""}`}
            onClick={() => setActiveDot(dotIndex)}
          />
        ))}
      </div>

      <style jsx>{`
        .custom-dots {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .dot {
          width: 10px;
          height: 10px;
          margin: 0 5px;
          background-color: #ccc;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
        }
        .dot.active {
          background-color: #000;
        }
      `}</style>
    </div>
  );
};

export default TeamSliderA;
