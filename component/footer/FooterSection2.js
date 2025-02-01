"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const FooterSection2 = ({ style, logo }) => {
  const { handleVideoShow } = useEduorContext();
  return (
    <footer className={style}>
      <div className="container">
        <div className="tf__footer_apply">
          <div className="tf__footer_apply_overlay">
            <a className="venobox" role="button" onClick={handleVideoShow}>
              <i className="fas fa-play"></i>
            </a>
            <h3>Let’s Prepare for Government Exams Together</h3>
            <p>
              Join our expert-led coaching for TNPSC, Bank, Railway exams, and more. We provide tailored resources and mock exams to help you succeed.
            </p>
            <a className="apply_btn" href="#">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      <div className="tf__footer">
        <div className="tf__footer_overlay pt_225">
          <div className="container">
            <div className="tf__footer_2_content_area">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_logo_area">
                    <Link className="footer_logo" href="/">
                      <img src={logo} alt="Eduor" className="img-fluid w-100" />
                    </Link>
                    <p>
                      We provide expert guidance for all major government exams like TNPSC, Bank PO, and Railway, helping students prepare with confidence.
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
                <div className="col-xl-2 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Quick Links</h3>
                    <ul>
                      <li>
                        <Link href="/courses">Government Exam Services</Link>
                      </li>
                      <li>
                        <Link href="/events">Upcoming Exam Events</Link>
                      </li>
                      <li>
                        <Link href="/about">About Our Coaching Institute</Link>
                      </li>
                      <li>
                        <Link href="/contact">Business Contact</Link>
                      </li>
                      <li>
                        <Link href="/contact">Make An Appointment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Our Contacts</h3>
                    <p>Address: 191/C, 60ft Road, Gandhinagar,Attur.636102</p>
                    <p>
                      <span> Phone: +91 9445556041</span>
                   
                    </p>
                    <p>
                      <span>Email: aishwaryaacademyattur@gmail.com  </span>
                      {/* <span>Website: yourwebsite.com</span> */}
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>News Letter</h3>
                    <p>
                      Stay updated with the latest news and resources for government exam preparations. Subscribe to our newsletter for tips, updates, and more!
                    </p>
                    <form>
                      <input type="text" placeholder="Your Email" />
                      <button>Send</button>
                    </form>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>Copyright © Aishwarya Academy all rights reserved.  Designed by Otomatiks</p>
                    <ul className="d-flex flex-wrap">
                      {/* <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
