"use client";
import React, { useEffect, useState } from "react";
import { client } from "../cms/contentfulClient"; // Assuming you're using Contentful for CMS

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await client.getEntries({ content_type: "testimonial" }); // Content Type for Testimonial
        if (response.items.length > 0) {
          setTestimonialData(response.items[0].fields); // Get fields from the first testimonial entry
        } else {
          setError("No testimonial data found.");
        }
      } catch (err) {
        console.error("Error fetching testimonial data:", err); // Log the full error
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchTestimonialData();
  }, []);

  if (error) {
    return (
      <section className="container my-5">
        <p>Error: {error}</p>
      </section>
    );
  }

  return (
    <main>
      {testimonialData && (
        <section className="testimonial-container">
          <div className="testimonial-content">
            <h2>{testimonialData.name}</h2>
            <p>{testimonialData.description}</p>
            {testimonialData.video && (
              <div className="testimonial-video">
                <video width="100%" controls>
                  <source src={testimonialData.video.fields.file.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {testimonialData.media && (
              <div className="testimonial-media">
                <img
                  src={`https:${testimonialData.media.fields.file.url}`}
                  alt={testimonialData.name}
                  className="testimonial-image"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default Testimonial;
