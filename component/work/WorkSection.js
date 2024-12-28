"use client";
import React from "react";
import WorkSlider from "../slider/WorkSlider";

const WorkSection = () => {
  return (
    <section className="tf__work pt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_35 md_margin">
              <h5>OUR Working now</h5>
              <h2>Complete About Students Advance Course.</h2>
            </div>
          </div>
        </div>
        <WorkSlider />
      </div>
    </section>
  );
};

export default WorkSection;
