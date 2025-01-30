import React from "react";

const GovtService = () => {
  return (
    <section className="tf__popular_services_2 mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>Course Details & Features</h5>
              <h2>Course Validity : Life Time</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Applying Flexbox to ensure equal height for all columns */}
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp d-flex">
            <div className="tf__single_services flex-grow-1">
              <span>
                <i className="fa fa-books-medical"></i>
              </span>
              <h3>230+ Sessions</h3>
              <p>
                Access a comprehensive library of over 230+ sessions covering all key concepts.
              </p>
              <a href="#">
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp d-flex">
            <div className="tf__single_services flex-grow-1">
              <span>
                <i className="fal fa-book"></i>
              </span>
              <h3>New Syllabus-Based Classes</h3>
              <p>
                The course is structured around the latest syllabus to ensure you're always up to date.
              </p>
              <a href="#">
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp d-flex">
            <div className="tf__single_services flex-grow-1">
              <span>
                <i className="fal fa-car-bus"></i>
              </span>
              <h3>Daily CA Classes</h3>
              <p>
                Attend daily CA classes to sharpen your analytical and conceptual skills.
              </p>
              <a href="#">
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp d-flex">
            <div className="tf__single_services flex-grow-1">
              <span>
                <i className="far fa-pencil-ruler"></i>
              </span>
              <h3>Updated Book Materials</h3>
              <p>
                Get access to updated book materials for the most relevant and up-to-date learning.
              </p>
              <a href="#">
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp d-flex">
            <div className="tf__single_services flex-grow-1">
              <span>
                <i className="far fa-file-certificate"></i>
              </span>
              <h3>Special Class for Maths</h3>
              <p>
                Focused sessions specifically designed to tackle 500+ topics in mathematics.
              </p>
              <a href="#">
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp d-flex">
            <div className="tf__single_services flex-grow-1">
              <span>
                <i className="far fa-university"></i>
              </span>
              <h3>100+ Full Topic Tests</h3>
              <p>
                Practice with over 100 full topic tests to solidify your learning and boost your confidence.
              </p>
              <a href="#">
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovtService;
