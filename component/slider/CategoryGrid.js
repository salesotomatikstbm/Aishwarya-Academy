"use client";
import React from "react";
import { services } from "@/data/Data";

const CategoryGrid = () => {
  return (
    <div className="container">
      <div className="row">
        {services.map((item, index) => (
          <div className="col-12 col-sm-3 col-lg-4 mb-4" key={item.id}>
            <div className={`tf__popular_service_single ${item.color} p-4 border rounded shadow`}>
              <span className="display-4 mb-2 d-block">
                <i className={item.iClassName}></i>
              </span>
              <h3 className="h5 font-weight-bold mb-2">{item.title}</h3>
              <p className="mb-4">{item.desc}</p>
              <a href="#" className="text-primary">
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
