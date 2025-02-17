"use client";

import { courseDataArray } from "@/data/Data";
import { useState } from "react";
import Link from "next/link";

const CourseSection2 = () => {
  const [activeCategory, setActiveCategory] = useState(courseDataArray[0]?.category || "");

  // Get all unique categories
  const categories = [...new Set(courseDataArray.map((item) => item.category))];

  // Filter courses based on the selected category
  const filteredCourses = courseDataArray.filter((item) => item.category === activeCategory);

  return (
    <section className="tf__courses_2 tf__courses_3 overflow-hidden ">
      <div className="container overflow-hidden">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto text-center">
            <div className="tf__heading_area mb-4">
              <h2>our popular courses</h2>
            </div>
          </div>
        </div>

        {/* Desktop Category Filter */}
        <div className="d-none d-md-flex flex-wrap justify-content-center mb-4 ">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn mx-2 mb-3 ${activeCategory === category ? "bg-danger text-white" : "bg-white text-danger border border-white"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Scrollable Category Tabs */}
     {/* Mobile Scrollable Category Tabs */}
<div className="d-block d-md-none mb-4 bg-red">
  <div className="d-flex align-items-center">
    {/* Left Arrow */}
    <button
      className="btn bg-white text-danger border border-white me-2"
      onClick={() => {
        document.getElementById("categoryScroll").scrollBy({ left: -100, behavior: "smooth" });
      }}
    >
      &lt;
    </button>

    <div
      id="categoryScroll"
      className="d-flex overflow-auto pb-2 px-2"
      style={{
        whiteSpace: "nowrap",
        scrollbarWidth: "thin",
        borderRadius: "2px",
        overflowX: "scroll",
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth",
        flexGrow: 1,
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          className={`btn mx-2 ${activeCategory === category ? "bg-danger text-white" : "bg-white text-danger border border-white"}`}
          onClick={() => setActiveCategory(category)}
          style={{ flexShrink: 0 }}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      className="btn bg-white text-danger border border-white ms-2"
      onClick={() => {
        document.getElementById("categoryScroll").scrollBy({ left: 100, behavior: "smooth" });
      }}
    >
      &gt;
    </button>
  </div>
</div>


        {/* Desktop View */}
        <div className="d-none d-md-block">
          <div className="row">
            {filteredCourses.map((item) => (
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp mb-4" key={item.id}>
                <div className="tf__single_courses" style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", marginBottom: "2px", border: "2px solid white", backgroundColor: "white" }}>
                  <Link href={`/courses/${item.slug}`} className="d-block">
                    <div className="tf__single_courses_img position-relative" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", width: "100%", border: "2px solid white" }}>
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%", display: "block", margin: "0 auto" }}
                      />
                    </div>
                    <div className="tf__single_courses_text p-3 text-center" style={{ color: "red" }}>
                      {item.title}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="d-block d-md-none">
          <div className="row">
            {filteredCourses.map((item) => (
              <div className="col-6 wow fadeInUp mb-4" key={item.id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="tf__single_courses" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", border: "2px solid white", backgroundColor: "white" }}>
                  <Link href={`/courses/${item.slug}`} className="d-block">
                    <div className="tf__single_courses_img position-relative" style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid white" }}>
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "200px", display: "block", margin: "0 auto" }}
                      />
                    </div>
                    <div className="tf__single_courses_text p-3 text-center" style={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center", color: "red" }}>
                      {item.title}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection2;
