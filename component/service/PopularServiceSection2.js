import React from "react";
import ServiceSlider from "../slider/ServiceSlider";

const PopularServiceSection2 = () => {
  return (
    <div className="tf__popular_services mt_100 pt_95 pb_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_40">
              <h5>OUR Popular Service</h5>
              <h2>We success learning platform creative Service.</h2>
            </div>
          </div>
        </div>
        <ServiceSlider />
      </div>
    </div>
  );
};

export default PopularServiceSection2;
