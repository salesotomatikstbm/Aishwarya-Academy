import React from "react";

const TrainingLevels = () => {
  return (
    <section className="tf__courses_2 tf__courses_3 overflow-hidden mt_95">
      <div className="container overflow-hidden">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto text-center">
            <div className="tf__heading_area mb-4">
              <h5>LEVEL OF TRAINING</h5>
              <h2>Comprehensive TNPSC Exam Preparation</h2>
            </div>
          </div>
        </div>

        {/* Walking Steps Layout */}
        <div className="walking-steps-container">
          <div className="walking-step">
            <div className="training-level-box">
              <img src="images/courses_img_11.jpg" alt="Level 1" />
            </div>
            <h4>Step 1</h4>
            <p>Introductory Level</p>
          </div>

          <div className="walking-step">
            <div className="training-level-box">
              <img src="images/courses_img_11.jpg" alt="Level 2" />
            </div>
            <h4>Step 2</h4>
            <p>Intermediate Level</p>
          </div>

          <div className="walking-step">
            <div className="training-level-box">
              <img src="images/courses_img_11.jpg" alt="Level 3" />
            </div>
            <h4>Step 3</h4>
            <p>Advanced Level</p>
          </div>

          <div className="walking-step">
            <div className="training-level-box">
              <img src="images/courses_img_11.jpg" alt="Online Training" />
            </div>
            <h4>Step 4</h4>
            <p>Online Training</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingLevels;
