"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";
import { blogData } from "@/data/Data";

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
          {/* Main Content Area */}
          <div className="col-xl-8 col-lg-8">
            <div className="row">
              {currentCourseItems.map((item) => (
                <div className="col-md-6 col-sm-12 mb-4" key={item.id}>
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
                            currentCoursePage === totalCoursePages
                              ? "disabled"
                              : ""
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
          {/* Sidebar Area */}
          <div className="col-xl-4 col-lg-4">
            <div className="tf__sidebar" id="sticky_sidebar">
              <div className="tf__sidebar_search">
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="tf__sidebar_certificate">
                <span>
                  <i className="fas fa-share-alt"></i>
                </span>
                <h3>Online Certificates</h3>
                <p>
                  We can provide you with a reliable handyan in London. you need
                  to included the today.
                </p>
                <a href="#">
                  <i className="fas fa-long-arrow-right"></i>
                </a>
              </div>
              <div className="tf__sidebar_blog sidebar_item">
                <h3>Recent Post</h3>
                <ul>
                  {blogData.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <div className="img">
                        <img
                          src={`/${item.imgSrc}`}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>
                          <i className="far fa-calendar-alt"></i> {item.date}
                        </p>
                        <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="tf__sidebar_category sidebar_item">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      Business <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Maintenance <span>(14)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Professional <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Technology<span>(29)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Single-Business<span>(32)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Innovation <span>(22)</span>
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="tf__sidebar_tags sidebar_item pr_10">
                <h3>Tag</h3>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">design</a>
                  </li>
                  <li>
                    <a href="#">service</a>
                  </li>
                  <li>
                    <a href="#">top</a>
                  </li>
                  <li>
                    <a href="#">help</a>
                  </li>
                  <li>
                    <a href="#">new</a>
                  </li>
                  <li>
                    <a href="#">best</a>
                  </li>
                  <li>
                    <a href="#">UI/UX</a>
                  </li>
                  <li>
                    <a href="#">sound</a>
                  </li>
                </ul>
              </div>
              <div className="tf__sidebar_apply">
                <img
                  src="/images/sidebar_img.jpg"
                  alt="apply"
                  className="img-fluid w-100"
                />
                <a href="#">apply now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCourseSection;
