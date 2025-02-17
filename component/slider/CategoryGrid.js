"use client";
import React from "react";
import { services } from "@/data/Data";

const CategoryGrid = () => {
  return (
    <div className="container">
      <div className="row gy-3">
        {services.map((item, index) => (
          <div
            className="col-6 col-sm-4 col-lg-4"
            key={item.id}
            style={{
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <div
              className="tf__popular_service_single p-3 border rounded"
              style={{
                textAlign: "center",
                wordBreak: "break-word",
                height: "100%",
                padding: "0 15px",
                border: "2px solid red", // Default red border
                transition: "border-color 0.3s ease",
              }}
            >
              <span
                className="d-block mb-3"
                style={{
                  fontSize: "2rem",
                  background: `url(${item.bgImage}) center/cover no-repeat`,
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  margin: "0 auto",
                }}
              ></span>
              <h3
                className="h5 font-weight-bold mb-2"
                style={{
                  fontSize: "1rem",
                  whiteSpace: "normal",
                }}
              >
                {item.title}
              </h3>
              <p
                className="mb-3"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                  minHeight: "60px",
                  overflow: "hidden",
                }}
              >
                {item.desc}
              </p>
              <a
                href="#"
                className="text-primary"
                style={{
                  fontSize: "0.9rem",
                }}
              >
                <i className="fas fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Hover Effect in CSS */}
      <style jsx>{`
        .tf__popular_service_single:hover {
          border-color: white;
        }
      `}</style>
    </div>
  );
};

export default CategoryGrid;
