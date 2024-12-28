"use client";
import { allFaqData } from "@/data/Data";
import React, { useState } from "react";

const AllFaqSection = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleAccordionBtn = (itemId) => {
    setOpenAccordion((prevState) => (prevState === itemId ? null : itemId));
  };
  return (
    <section className="tf__faq tf__faq_page pt_190 xs_pt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_10">
              <h5>OUR EDUCATION Faq</h5>
              <h2>District is Made of about Students Childhood.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-10 col-lg-9 m-auto wow fadeInUp">
            <div className="tf__faq_text">
              <div className="tf__faq_accordion">
                <div className="accordion" id="accordionExample">
                  {allFaqData.map((item) => (
                    <div
                      className={`accordion-item ${item.color}`}
                      key={item.id}
                    >
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button ${
                            openAccordion === item.id ? "" : "collapsed"
                          }`}
                          onClick={() => handleAccordionBtn(item.id)}
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${
                          openAccordion === item.id ? "show" : ""
                        }`}
                      >
                        <div className="accordion-body">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFaqSection;
