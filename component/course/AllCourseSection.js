"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const AllCourseSection = () => {
  const {
    currentCourseItems,
    currentCoursePage,
    handleCoursePageChange,
    totalCoursePages,
  } = useEduorContext();
  return (
    <section className="tf__courses_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>OUR POPULAR COURSES</h5>
              <h2>Educational For Students Popular Courses.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {currentCourseItems.map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item.id}>
              <div className="tf__single_courses">
                <div className="tf__single_courses_img">
                  <img
                    src={item.imgSrc}
                    alt="courses"
                    className="img-fluid w-100"
                  />
                  <a className={`categories ${item.color}`} href="#">
                    {item.category}
                  </a>
                  <span>{item.price}</span>
                </div>
                <ul className="tf__single_course_header">
                  <li>
                    <i className="fas fa-user"></i> {item.instructor}
                  </li>
                  <li>
                    <i className="fas fa-folder-open"></i> {item.lessons}
                  </li>
                </ul>
                <div className="tf__single_courses_text">
                  <Link className="title" href={`/courses/${item.slug}`}>
                    {item.title}
                  </Link>
                  <p className="description">{item.description}</p>
                  <ul>
                    <li>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      <span>(0{item.rating})</span>
                    </li>
                    <li>{item.students}</li>
                  </ul>
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
                        currentCoursePage === 1 ? "disabled" : ""
                      }`}
                      aria-label="Previous"
                      onClick={() =>
                        handleCoursePageChange(currentCoursePage - 1)
                      }
                    >
                      <i className="far fa-angle-left"></i>
                    </a>
                  </li>
                  {Array.from({ length: totalCoursePages }, (_, index) => (
                    <li className="page-item" key={index}>
                      <a
                        className={`page-link ${
                          currentCoursePage === index + 1 ? "active" : ""
                        }`}
                        onClick={() => handleCoursePageChange(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentCoursePage === totalCoursePages ? "disabled" : ""
                      }`}
                      aria-label="Next"
                      onClick={() =>
                        handleCoursePageChange(currentCoursePage + 1)
                      }
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

export default AllCourseSection;
