import React from "react";

const AboutSection3 = ({ style }) => {
  return (
    <div className={`${style} tf__about_2_area`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              <div className="tf__about_small">
                <img
                  src="images/about_2_img_2.jpg"
                  alt="Aishwarya Academy"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__about_large">
                <img
                  src="images/about_2_img_1.jpg"
                  alt="Aishwarya Academy"
                  className="img-fluid w-100"
                />
              </div>
              <p>
                <span>10+</span> Years of Coaching
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>ABOUT Aishwarya Academy</h5>
                <h2>Complete Government Exam Coaching for Success.</h2>
              </div>
              <p>
                Aishwarya Academy specializes in providing top-notch coaching for
                various government exams like TNPSC, Banking, Railway, and more. Our expert faculty and
                strategic teaching methods ensure success for every student.
              </p>
              <ul>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_1.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Successfully Trained Candidates</h4>
                    <p>
                      Thousands of students have successfully cleared their exams
                      with the help of our expert coaching.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_2.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Comprehensive Exam Preparation</h4>
                    <p>
                      We provide in-depth study materials, mock tests, and
                      personalized coaching for a variety of government exams.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_3.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Student-Centric Approach</h4>
                    <p>
                      Our coaching methods are designed to focus on individual
                      strengths and weaknesses, ensuring holistic development.
                    </p>
                  </div>
                </li>
                {/* <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_4.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Proven Track Record</h4>
                    <p>
                      Aishwarya Academy has a proven success rate, helping
                      students secure top ranks in various government exams.
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-12 mt_110 xs_mt_100 wow fadeInUp">
            <div className="tf__about_us_counter d-flex flex-wrap align-items-center">
              <p>
                <span className="counter">27,0000</span> More Students courde
                youn do best !
              </p>
              <a href="#">Export All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
