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
          >
            <div
              className={`tf__popular_service_single ${item.color} p-3 border rounded shadow`}
              style={{
                textAlign: "center",
                wordBreak: "break-word",
                height: "100%",
              }}
            >
              <span
                className="d-block mb-3"
                style={{
                  fontSize: "2rem", 
                }}
              >
                <i className={item.iClassName}></i>
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
