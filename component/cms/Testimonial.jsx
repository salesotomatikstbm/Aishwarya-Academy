"use client";
import React, { useEffect, useState } from "react";
import { client } from "../cms/contentfulClient"; // Assuming you're using Contentful for CMS

const Testimonial = () => {
  const [videoEmbedLinks, setVideoEmbedLinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await client.getEntries({ content_type: "testimonial" });
        console.log("Full Contentful Response:", JSON.stringify(response, null, 2));

        if (!response.items || response.items.length === 0) {
          console.error("No testimonial items found.");
          setError("No testimonials found.");
          return;
        }

        const videoLinks = response.items.flatMap((item) => {
          // Check all video-related fields
          const videoFields = [item?.fields?.videolink, item?.fields?.videolink2, item?.fields?.videolink3, item?.fields?.videolink4];
          return videoFields
            .map((field) => findVideoUrl(field)) // Extract video URL from the field
            .filter(Boolean); // Filter out any null values
        });

        if (videoLinks.length === 0) {
          console.error("No valid video links found.");
          setError("No testimonials with valid video links.");
          return;
        }

        const embedLinks = videoLinks.map((videoUrl) => {
          let videoId = null;

          // Handle multiple YouTube URL formats
          if (videoUrl.includes("youtube.com/watch") || videoUrl.includes("youtu.be/")) {
            const match = videoUrl.match(/[?&]v=([^&]+)/) || videoUrl.match(/youtu\.be\/([^?]+)/);
            videoId = match ? match[1] : null;
          } else if (videoUrl.includes("youtube.com/embed/")) {
            videoId = videoUrl.split("/embed/")[1];
          }

          return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
        });

        setVideoEmbedLinks(embedLinks.filter(Boolean)); // Remove null embed links
      } catch (err) {
        console.error("Error fetching testimonial data:", err);
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchTestimonialData();
  }, []);

  // Function to recursively find all YouTube video URLs within the rich text object
  const findVideoUrl = (node) => {
    if (!node) return null;

    // If it's a hyperlink, check if the URL is a valid YouTube video URL
    if (node.nodeType === "hyperlink" && node.data?.uri) {
      const url = node.data.uri;
      if (url.includes("youtube.com/watch") || url.includes("youtu.be/")) {
        return url; // Return the YouTube URL
      }
    }

    if (node.content && Array.isArray(node.content)) {
      for (const childNode of node.content) {
        const videoUrl = findVideoUrl(childNode);
        if (videoUrl) return videoUrl; // If we find a video URL, return it
      }
    }

    return null;
  };

  return (
    <main className="mt_95">
      {error ? (
        <div className="container my-5">
          <p className="text-danger">Error: {error}</p>
        </div>
      ) : videoEmbedLinks.length > 0 ? (
        <div className="container my-5">
          <div className="row wow fadeInUp">
            <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
              <div className="tf__heading_area mb_25">
                <h5>OUR Testimonials</h5>
                <h2>We have helped create clients say me.</h2>
              </div>
            </div>
          </div>

          <div className="row my-5">
            {videoEmbedLinks.map((link, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={link}
                    title={`Testimonial Video ${index + 1}`}
                    allowFullScreen
                    className="rounded"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <p className="text-danger">No testimonials available.</p>
        </div>
      )}
    </main>
  );
};

export default Testimonial;
