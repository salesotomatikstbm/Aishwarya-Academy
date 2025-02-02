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
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>

                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Our Contacts</h3>
                    <p>
                      <span>
                        Phone: <a href="tel:+919445556041">+91 9445556041</a>
                      </span>
                    </p>
                    <p>
                      <span>
                        Email: <a href="mailto:aishwaryaacademyattur@gmail.com">aishwaryaacademyattur@gmail.com</a>
                      </span>
                      {/* <span>Website: yourwebsite.com</span> */}
                    </p>
                    <p>Address: 191/C, 60ft Road, Gandhinagar,Attur.636102</p>
                  </div>
                </div>


                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.27386058910278!2d78.59555281268685!3d11.596107639218305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab9d228acc8a01%3A0x6e8dbbdb6c3ba67!2sAishwarya%20Academy%20for%20Kids!5e0!3m2!1sen!2sin!4v1738476856024!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ height: "200px", width: "300px" }} ></iframe>
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
