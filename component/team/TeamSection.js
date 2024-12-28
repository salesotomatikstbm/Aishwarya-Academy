"use client";
import React from "react";
import TeamSlider from "../slider/TeamSlider";

const TeamSection = ({ style }) => {
  return (
    <section className={style}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>Meet OUR Team</h5>
              <h2>Become A Instruction Instructor Teacher.</h2>
            </div>
          </div>
        </div>
        <TeamSlider />
      </div>
    </section>
  );
};

export default TeamSection;
