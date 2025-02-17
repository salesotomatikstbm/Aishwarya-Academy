"use client";
import React from "react";
import { services } from "@/data/Data";

const CategoryGrid = () => {
  return (
    <div className="container">
      <div className="row gy-3">
        {services.map((item) => (
          <div
            className="col-6 col-sm-4 col-lg-4"
            key={item.id}
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <div className="tf__popular_service_single">
              <span
                className="service-icon"
                style={{
                  background: `url(${item.bgImage}) center/cover no-repeat`,
                }}
              ></span>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
              <a href="#" className="service-link">
                <i className="fas fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Effect in CSS */}
      <style jsx>{`
        .tf__popular_service_single {
          text-align: center;
          word-break: break-word;
          height: 100%;
          padding: 15px;
          border-radius: 5px;
          border: 2px solid red;
          background-clip: padding-box;
          position: relative;
          transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          box-shadow: 0px 4px 10px rgba(255, 0, 0, 0.5);
        }

        .tf__popular_service_single::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 5px;
          background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
          z-index: -1;
        }

        .tf__popular_service_single:hover {
          box-shadow: 0px 6px 15px rgba(255, 0, 0, 0.7);
        }

        .service-icon {
          display: block;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 15px;
        }

        .service-title {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .service-desc {
          font-size: 0.875rem;
          line-height: 1.5;
          min-height: 60px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .service-link {
          font-size: 0.9rem;
          color: black;
          text-decoration: none;
        }

        .service-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default CategoryGrid;