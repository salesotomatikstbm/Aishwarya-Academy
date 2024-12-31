import React from 'react';

const TopbarSection = ({ style }) => {
  return (
    <section className={style}>
      <div className="container">
        <div className="row">
          {/* Left Section - Contact Details */}
          <div className="col-xl-6 col-md-6 d-none d-md-block">
            <div className="tf__topbar_left d-flex flex-wrap align-items-center">
              <ul className="d-flex flex-wrap">
                {/* Contact Number */}
                <li>
                  <a href="tel:+918610210593">+91 6383791772</a>
                </li>
                {/* Email */}
                <li>
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="col-xl-6 col-md-6">
            <div className="tf__topbar_right">
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopbarSection;
