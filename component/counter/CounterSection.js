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
                  <h5>OUR BEST COUNTER</h5>
                  <h2>Complete About Students University Education.</h2>
                </div>
                <p>
                  Business tailored it design, management & support services
                  business agency elit, sed do eiusmod tempor.{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-9 wow fadeInUp">
              <div className="tf__counter_area">
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
