"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { client } from "../cms/contentfulClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [heroImagesDesktop, setHeroImagesDesktop] = useState([]);
  const [heroImagesMobile, setHeroImagesMobile] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await client.getEntries({ content_type: "heroSection" });
        if (response.items.length > 0) {
          const desktopImages = response.items[0].fields.img2;
          const mobileImages = response.items[0].fields.img;

          // Check if `img` is an array and extract image URLs for both desktop and mobile
          const extractedDesktopImages = Array.isArray(desktopImages)
            ? desktopImages.map((img) => img.fields.file.url)
            : [desktopImages?.fields?.file?.url];

          const extractedMobileImages = Array.isArray(mobileImages)
            ? mobileImages.map((img) => img.fields.file.url)
            : [mobileImages?.fields?.file?.url];

          setHeroImagesDesktop(extractedDesktopImages.filter(Boolean)); // Remove undefined values
          setHeroImagesMobile(extractedMobileImages.filter(Boolean)); // Remove undefined values
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

  useEffect(() => {
    // Preload images once they're fetched
    if (heroImagesDesktop.length > 0 || heroImagesMobile.length > 0) {
      const preloadImages = [...heroImagesDesktop, ...heroImagesMobile];
      preloadImages.forEach((imageSrc) => {
        const img = new Image();
        img.src = `https:${imageSrc}`; // Preload the images
      });
      setIsLoading(false); // Mark as loaded after preloading
    }
  }, [heroImagesDesktop, heroImagesMobile]);

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
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Slider {...settings} className="hero-slider">
          {heroImagesDesktop.map((desktopImage, index) => (
            <div key={index} className="hero-slide">
              {/* Desktop Image */}
              <img
                src={`https:${desktopImage}`}
                alt={`Slide ${index + 1}`}
                className="w-100 d-block d-sm-none" // Show on mobile
                style={{
                  height: "100vh", // Full viewport height for desktop
                  objectFit: "cover", // Ensure full coverage
                }}
              />
              {/* Mobile Image */}
              <img
                src={`https:${heroImagesMobile[index]}`}
                alt={`Slide ${index + 1}`}
                className="w-100 d-none d-sm-block" // Show on desktop
                style={{
                  height: "100vh", // Full viewport height for mobile
                  objectFit: "cover", // Ensure the image covers the screen
                }}
              />
            </div>
          ))}
        </Slider>
      )}
    </main>
  );
};

export default HeroSection;
