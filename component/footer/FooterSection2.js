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
            <h3>Let's Create the Exam for First Attempt</h3>
            <p>
              Join our expert-led coaching for TNPSC, Bank, Railway, Police, SSC
              and more. We provide tailored resources and mock exams to help you
              succeed.
            </p>
            <a className="apply_btn" href="#">
              Join Now
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
                      We provide expert guidance for all major government exams
                      like TNPSC, Bank, Railway, Police, SSC helping students
                      prepare with confidence.
                    </p>

                    <ul className="d-flex flex-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-telegram-plane"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-5 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Our Contacts</h3>
                    <p>
                      <span>
                        <i className="fas fa-phone-alt"></i>
                        
                        <a href="tel:+919445556041">   +91 9445556041</a>
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:aishwaryaacademyattur@gmail.com">
                          {" "}
                          aishwaryaacademyattur@gmail.com
                        </a>
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-map-marker-alt"></i> 191/C, 60ft
                        Road, Gandhinagar, Attur - 636102
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.27380951684876!2d78.5958427635052!3d11.596166017702009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab9c40e8005e25%3A0x5613203d6d49ef01!2sAishwarya%20Academy-%20TNPSC%20BANK%20POLICE%2FSI%20SSC%20RAILWAY%20Coaching%20centre%20in%20Attur%2C%20Salem!5e0!3m2!1sen!2sin!4v1739376737007!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ height: "200px", width: "300px" }}
                    ></iframe>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>
                      Copyright © Aishwarya Academy all rights reserved.
                      Designed by Otomatiks
                    </p>
                    <ul className="d-flex flex-wrap"></ul>
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
