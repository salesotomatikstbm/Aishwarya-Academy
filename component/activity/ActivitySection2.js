"use client";
import React from "react";
import ActivitySlider from "../slider/ActivitySlider";
import ActivityGrid from "../slider/ActivityGrid";

const ActivitySection2 = ({ style }) => {
  return (
    <div className={style}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
            <h5 className="text-white">Course Details & Features</h5>
<h2>Your Path to Success Starts Here</h2>

            </div>
          </div>
        </div>
       <ActivityGrid />
      </div>
    </div>
  );
};

export default ActivitySection2;
