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
                <div className="tf__heading_area tf__heading_area_left mb_40">
                 
                  <h2>Our achievements and milestones in numbers</h2>
                </div>
               
              </div>
            </div>
            <div className="col-xl-9 wow fadeInUp">
              <div className="tf__counter_area">
                <div className="tf__counter2_overlay">
                  <ul className=" d-flex flex-wrap">
                    <li className="tf__single_counter">
                      <h2 className="counter">
                        <CountUp end={1} />
                      </h2>
                      <h4>Students Cleared Exam</h4>
                    </li>
                    <li className="tf__single_counter">
                      <h2 className="counter">
                        <CountUp end={100} />
                      </h2>
                      <h4>Mock Test</h4>
                    </li>
                    <li className="tf__single_counter">
                      <h2 className="counter">
                        <CountUp end={4} />
                      </h2>
                      <h4>Hours Of Teaching</h4>
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
