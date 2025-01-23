"use client";

import { courseDataArray } from "@/data/Data";
import { useState } from "react";
import Link from "next/link";

const CourseSection2 = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from the data array
  const categories = ["All", ...new Set(courseDataArray.map((item) => item.category))];

  const filteredCourses =
    activeCategory === "All"
      ? courseDataArray
      : courseDataArray.filter((item) => item.category === activeCategory);

  return (
    <section className="tf__courses_2 tf__courses_3 overflow-hidden  mt_95">
      <div className="container overflow-hidden">
        {/* Heading */}
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto text-center">
            <div className="tf__heading_area mb-4">
              <h5>OUR POPULAR COURSES</h5>
              <h2>Educational For Students Popular Courses</h2>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="d-flex flex-wrap justify-content-center mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-primary mx-2 mb-3 ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="row">
          {filteredCourses.map((item) => (
            <div
              className="col-xl-4 col-md-6 col-sm-12 wow fadeInUp mb-4"
              key={item.id}
            >
              <div className="tf__single_courses h-100">
                <div className="tf__single_courses_img position-relative">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="img-fluid w-100"
                  />
                  <a className={`categories ${item.color}`} href="#">
                    {item.category}
                  </a>
                </div>
                <ul className="tf__single_course_header d-flex justify-content-between p-2">
                  <li>
                    <i className="fas fa-user"></i> {item.instructor}
                  </li>
                  <li>
                    <i className="fas fa-folder-open"></i> {item.lessons}
                  </li>
                </ul>
                <div className="tf__single_courses_text p-3 text-center">
                  <Link className="title d-block mb-2" href={`/courses/${item.slug}`}>
                    {item.title}
                  </Link>
                  <p className="description mb-2">{item.description}</p>
                  <ul className="list-unstyled">
                    <li>{item.students}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection2;
