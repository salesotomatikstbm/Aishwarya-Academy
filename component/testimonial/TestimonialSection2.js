"use client";
import React from "react";
import CountUp from "react-countup";
import TestimonialSlider2 from "../slider/TestimonialSlider2";
const TestimonialSection2 = () => {
  return (
    <section className="tf__testimonial_2 mt_250 pb_45">
      <div className="tf__counter_2 wow fadeInUp">
        <div className="container">
          <div className="tf__counter_area mt_95">
            <div className="tf__counter2_overlay">
              <ul className=" d-flex flex-wrap">
                <li className="tf__single_counter">
                  <h2 className="counter">
                    <CountUp end={22} />
                  </h2>
                  <h4>Successflly Trained</h4>
                </li>
                <li className="tf__single_counter">
                  <h2 className="counter">
                    <CountUp end={69} />
                  </h2>
                  <h4>Keywords Updated</h4>
                </li>
                <li className="tf__single_counter">
                  <h2 className="counter">
                    <CountUp end={56} />
                  </h2>
                  <h4>Google Search</h4>
                </li>
                <li className="tf__single_counter">
                  <h2 className="counter">
                    <CountUp end={13} />
                  </h2>
                  <h4>Success Rate</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="tf__testimonial_2_area">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
              <div className="tf__heading_area mb_25">
                <h5>OUR Testiomonials</h5>
                <h2>We have helped create clients say me.</h2>
              </div>
            </div>
          </div>
          <TestimonialSlider2 />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection2;
