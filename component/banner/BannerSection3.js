"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const BannerSection3 = () => {
  const { handleVideoShow } = useEduorContext();
  return (
    <section className="tf__banner_2 tf__banner_3">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-md-10 col-lg-8">
            <div className="tf__banner_text wow fadeInUp">
              <h5>Wellcome to Aishwarya Academy!</h5>
              <h1>
              We Are The Best <span>Government Exam</span> Coaching Center.
              </h1>
              <p>
              Our coaching center is committed to providing the best preparation
              for government exams, helping students succeed with expert guidance.
              </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn_3" href="/courses">
                    our courses
                  </Link>
                </li>
                <li>
                  <a
                    className="venobox play_btn"
                    role="button"
                    onClick={handleVideoShow}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection3;
