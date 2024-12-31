"use client";
import React from "react";
import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <section className="tf__counter_3">
      <div className="container">
        <div className="tf__counter_3_area">
          <div className="row">
            <div className="col-xxl-6 col-lg-8 wow fadeInUp">
              <div className="tf__counter_3_text">
                <div className="tf__heading_area tf__heading_area_left mb_25">
                  <h5>OUR SUCCESSFUL TRAINING</h5>
                  <h2>Complete Preparation for Government Exams</h2>
                </div>
                <p>
                  Offering top-notch training, guidance, and support to help students excel in government exams and secure their future.
                </p>
              </div>
            </div>
            <div className="col-xl-9 wow fadeInUp">
              <div className="tf__counter_area">
                <div className="tf__counter2_overlay">
                  <ul className=" d-flex flex-wrap">
                    <li className="tf__single_counter">
                      <h2 className="counter">
                        <CountUp end={500} />
                      </h2>
                      <h4>Students Successfully Trained</h4>
                    </li>
                    <li className="tf__single_counter">
                      <h2 className="counter">
                        <CountUp end={1200} />
                      </h2>
                      <h4>Mock Exams Conducted</h4>
                    </li>
                    <li className="tf__single_counter">
                      <h2 className="counter">
                        <CountUp end={300} />
                      </h2>
                      <h4>Students Cleared Government Exams</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
