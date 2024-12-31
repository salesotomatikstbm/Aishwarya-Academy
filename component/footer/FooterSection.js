import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="tf__footer mt_100">
      <div className="tf__footer_overlay pt_75">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-6">
              <div className="tf__footer_logo_area">
                <Link className="footer_logo" href="/">
                  <img
                    src="/images/footer_logo.png"
                    alt="Eduor"
                    className="img-fluid w-100"
                  />
                </Link>
                <p>
                  Empowering students to excel in their academic and professional journey with comprehensive education resources and guidance.
                </p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-sm-10 col-md-5 col-lg-5">
              <div className="tf__footer_content xs_mt_50">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link href="/courses">Our Courses</Link>
                  </li>
                  <li>
                    <Link href="/events">Upcoming Events</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Get in Touch</Link>
                  </li>
                  <li>
                    <Link href="/appointments">Book an Appointment</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-col-lg-6">
              <div className="tf__footer_content xs_mt_30">
                <h3>Contact Us</h3>
                <p>Address: 27 Division St, Berakuti, NY 121102, USA</p>
                <p>
                  <span>Phone: +8 6383791772</span>
                  
                </p>
                <p>
                  <span>Email: info@eduor.com </span>
                  <span>Website: www.eduor.com</span>
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-10 col-md-5 col-lg-4 col-lg-5">
              <div className="tf__footer_content xs_mt_45">
                <h3>Newsletter</h3>
                <p>
                  Stay updated with the latest news and offers. Subscribe to our newsletter for regular updates on new courses and events.
                </p>
                <form>
                  <input type="text" placeholder="Your Email" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tf__copyright">
                <p>Copyright ©Aishwarya Academy all rights reserved.</p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
