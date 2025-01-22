"use client";
import React, { useEffect, useState } from "react";
import { client } from "../cms/contentfulClient";

const HeroSection = () => {
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await client.getEntries({ content_type: "heroSection" }); // Use the correct content type ID
        if (response.items.length > 0) {
          setHeroData(response.items[0].fields); // Use the first entry's fields
        } else {
          setError("No hero data found.");
        }
      } catch (err) {
        console.error("Error fetching hero data:", err); // Log the full error
        setError(err.message || "An unexpected error occurred."); // Set the error message
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

  return (
    <main>
      {heroData?.img?.fields?.file?.url && (
        <div
          className="hero-image-container rounded-lg overflow-hidden mx-auto"
          style={{
            backgroundImage: `url(https:${heroData.img.fields.file.url})`,
            backgroundSize: "contain", // Ensure the whole image fits within the container
            backgroundRepeat: "no-repeat", // Prevent repeating the image
            backgroundPosition: "center", // Center the image in the container
            height: "100vh", // Use full viewport height to make the image visible in full size
          }}
        >
          {/* Overlay text or buttons can be added here */}
        </div>
      )}
    </main>
  );
};

export default HeroSection;
