"use client";

import { courseDataArray } from "@/data/Data";
import { useState } from "react";
import Link from "next/link";

const BankExam = () => {
  const [activeCategory, setActiveCategory] = useState("Banking");

  // Filter courses to only include "Banking" category
  const filteredCourses = courseDataArray.filter((item) => item.category === "BANK EXAMS");

  return (
    <section className="tf__courses_2 tf__courses_3 overflow-hidden mt_95">
      <div className="container overflow-hidden">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto text-center">
            <div className="tf__heading_area mb-4">
              <h5>OUR BANKING COURSES</h5>
              <h2>Banking Course Exam Covered</h2> {/* Updated Title */}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="d-none d-md-block"> {/* Only visible on desktop */}
          <div className="row">
            {filteredCourses.map((item) => (
              <div
                className="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp mb-4" // 5 courses per row on desktop
                key={item.id}
              >
                <div className="tf__single_courses" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '2px' }}>
                  <Link href={`/courses/${item.slug}`} className="d-block">
                    <div className="tf__single_courses_img position-relative" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', width: '100%' }}>
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        style={{
                          objectFit: 'contain',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          display: 'block',
                          margin: '0 auto', // Centers the image horizontally
                        }}
                      />
                    </div>
                    <div className="tf__single_courses_text p-3 text-center">
                      {item.title}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="d-block d-md-none"> {/* Only visible on mobile */}
          <div className="row">
            {filteredCourses.map((item) => (
              <div
                className="col-6 wow fadeInUp mb-4"  // 2 courses per row on mobile (col-6 means 50% width)
                key={item.id}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Ensures the courses are centered
              >
                <div className="tf__single_courses" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Link href={`/courses/${item.slug}`} className="d-block">
                    <div className="tf__single_courses_img position-relative" style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        style={{
                          objectFit: 'contain',
                          width: '100%',  // Make image responsive
                          height: 'auto',
                          maxHeight: '200px', // Fixed height for better alignment
                          display: 'block',
                          margin: '0 auto', // Centers the image horizontally
                        }}
                      />
                    </div>
                    <div className="tf__single_courses_text p-3 text-center" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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

export default BankExam;
