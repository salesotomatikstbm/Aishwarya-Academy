import { courseDataArray } from "@/data/Data";
import Link from "next/link";
import React from "react";

const CourseSection2 = () => {
  return (
    <section className="tf__courses_2 tf__courses_3">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_20">
              <h5>OUR POPULAR COURSES</h5>
              <h2>Educational For Students Popular Courses.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {courseDataArray.slice(0, 6).map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item.id}>
              <div className="tf__single_courses">
                <div className="tf__single_courses_img">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
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
      </div>
    </section>
  );
};

export default CourseSection2;
