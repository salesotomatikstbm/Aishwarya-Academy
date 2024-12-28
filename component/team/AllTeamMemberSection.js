"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const AllTeamMemberSection = () => {
  const {
    currentTeamItems,
    currentTeamPage,
    handleTeamPageChange,
    totalTeamPages,
  } = useEduorContext();
  return (
    <section className="tf__team_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>Meet OUR Team</h5>
              <h2>Become A Instruction Instructor Teacher.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {currentTeamItems.map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item.id}>
              <div className="tf__single_team">
                <div className="tf__single_team_img">
                  <img
                    src={item.imgSrc}
                    alt="team"
                    className="img-fluid w-100"
                  />
                  <ul>
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
                  </ul>
                </div>
                <div className="tf__single_team_text">
                  <Link className="title" href={`/team/${item.slug}`}>
                    {item.name}
                  </Link>
                  <p>{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tf__pagination mt_50">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentTeamPage === 1 ? "disabled" : ""
                      }`}
                      aria-label="Previous"
                      onClick={() => handleTeamPageChange(currentTeamPage - 1)}
                    >
                      <i className="far fa-angle-left"></i>
                    </a>
                  </li>
                  {Array.from({ length: totalTeamPages }, (_, index) => (
                    <li className="page-item" key={index}>
                      <a
                        className={`page-link ${
                          currentTeamPage === index + 1 ? "active" : ""
                        }`}
                        onClick={() => handleTeamPageChange(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentTeamPage === totalTeamPages ? "disabled" : ""
                      }`}
                      aria-label="Next"
                      onClick={() => handleTeamPageChange(currentTeamPage + 1)}
                    >
                      <i className="far fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTeamMemberSection;
