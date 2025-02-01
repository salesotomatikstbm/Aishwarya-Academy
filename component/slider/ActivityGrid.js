"use client";
import React from "react";
import { whyChooseUsData } from "@/data/Data"; // Ensure correct path

const ActivityGrid = () => {
  return (
    <div className="container">
      <div className="row g-3">
        {whyChooseUsData?.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-4 col-4 d-flex">
            <div className="tf__activities_item p-3 border rounded shadow text-center w-100 d-flex flex-column justify-content-center align-items-center equal-box">
              <h3 className="title-text mt-2 mb-1">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for Equal Box Heights & Responsive Text */}
      <style jsx>{`
        .equal-box {
          min-height: 150px; /* Ensures all boxes have the same height */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title-text {
          font-size: 1.2rem; /* Default size */
        }
        @media (max-width: 576px) {
          .title-text {
            font-size: 0.9rem; /* Smaller text for mobile */
          }
          .equal-box {
            min-height: 120px; /* Adjust height for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default ActivityGrid;
