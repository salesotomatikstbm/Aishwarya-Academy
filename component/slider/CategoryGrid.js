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
              className={`tf__popular_service_single ${item.color} p-3 border rounded shadow`}
              style={{
                textAlign: "center",
                wordBreak: "break-word",
                height: "100%",
                padding: "0 15px",
                background: `url(${item.bgImage}) center/cover no-repeat`, // Dynamic background
              }}
            >
              <span
                className="d-block mb-3"
                style={{
                  fontSize: "2rem", 
                  background: `url(${item.bgImage}) center/cover no-repeat`,
                  width: "80px", // Adjust the size of the icon
                  height: "80px", // Adjust the size of the icon
                  borderRadius: "50%", // Make the icon circular
                  margin: "0 auto",
                }}
              >
                {/* Empty span for the background image to act as the icon */}
              </span>
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
    </div>
  );
};

export default CategoryGrid;
