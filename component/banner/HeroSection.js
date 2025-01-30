"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { client } from "../cms/contentfulClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await client.getEntries({ content_type: "heroSection" });
        if (response.items.length > 0) {
          const images = response.items[0].fields.img;

          // Check if `img` is an array and extract image URLs
          const extractedImages = Array.isArray(images)
            ? images.map((img) => img.fields.file.url)
            : [images?.fields?.file?.url]; // If single image, convert to array

          setHeroImages(extractedImages.filter(Boolean)); // Remove undefined values
        } else {
          setError("No hero images found.");
        }
      } catch (err) {
        console.error("Error fetching hero data:", err);
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchHeroData();
  }, []);

  if (error) {
    return (
      <section className="container my-5">
        <p>Error: {error}</p>
      </section>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Faster auto-slide
    fade: true, // Smooth fade transition
    pauseOnHover: false, // Keeps autoplay running
    arrows: false, // Hides next/prev arrows for a cleaner look
  };

  return (
    <main>
      {heroImages.length > 0 ? (
        <Slider {...settings} className="hero-slider">
          {heroImages.map((image, index) => (
            <div key={index} className="hero-slide">
              <img
                src={`https:${image}`}
                alt={`Slide ${index + 1}`}
                className="w-100"
                style={{ height: "100vh", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default HeroSection;
