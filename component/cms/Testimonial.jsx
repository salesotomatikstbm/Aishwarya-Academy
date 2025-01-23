"use client";
import React, { useEffect, useState } from "react";
import { client } from "../cms/contentfulClient"; // Assuming you're using Contentful for CMS

const Testimonial = () => {
  const [videoEmbedLink, setVideoEmbedLink] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await client.getEntries({ content_type: "testimonial" });
        console.log("Contentful Response:", response); // Debug response

        if (response.items.length > 0) {
          const videoLink = response.items[0]?.fields?.videolink; // Fetch 'videolink' field
          console.log("Fetched Video Link:", videoLink); // Log the whole `videolink` object

          // Check if the videoLink is an object (rich text or reference)
          if (videoLink) {
            // Log the rich-text structure to understand its content
            console.log("Video Link Structure:", JSON.stringify(videoLink, null, 2));

            // Traverse the rich text structure and find the URL
            const videoUrl = findVideoUrl(videoLink);
            if (videoUrl) {
              let videoId = null;

              // Check for various YouTube link formats
              if (videoUrl.includes("youtube.com/watch")) {
                // Extract VIDEO_ID from standard YouTube link
                const match = videoUrl.match(/[?&]v=([^&]+)/);
                videoId = match ? match[1] : null;
              } else if (videoUrl.includes("youtu.be/")) {
                // Extract VIDEO_ID from shortened YouTube link
                const match = videoUrl.match(/youtu\.be\/([^?]+)/);
                videoId = match ? match[1] : null;
              } else if (videoUrl.includes("youtube.com/embed/")) {
                // Direct embed link (already in correct format)
                videoId = videoUrl.split("/embed/")[1];
              }

              if (videoId) {
                const embedLink = `https://www.youtube.com/embed/${videoId}`;
                setVideoEmbedLink(embedLink);
              } else {
                console.error("No valid VIDEO_ID found in link:", videoUrl);
                setError("No valid YouTube video link found.");
              }
            } else {
              console.error("Video URL not found in rich text object.");
              setError("Invalid video link format.");
            }
          } else {
            console.error("No video link found.");
            setError("No video link data found.");
          }
        } else {
          console.error("No items in Contentful response.");
          setError("No testimonial data found.");
        }
      } catch (err) {
        console.error("Error fetching testimonial data:", err);
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchTestimonialData();
  }, []);

  // Function to recursively find video URLs within the rich text object
  const findVideoUrl = (node) => {
    if (node.nodeType === "hyperlink" && node.data?.uri) {
      return node.data.uri;
    }

    if (node.content && Array.isArray(node.content)) {
      for (const childNode of node.content) {
        const videoUrl = findVideoUrl(childNode);
        if (videoUrl) return videoUrl;
      }
    }

    return null;
  };

  if (error) {
    return (
      <div className="container my-5">
        <p className="text-danger">Error: {error}</p>
      </div>
    );
  }

  return (
    <main className=" mt_95">
      {videoEmbedLink && (
        <div className="container my-5">
        <div className="row wow fadeInUp">
            <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
              <div className="tf__heading_area mb_25">
                <h5>OUR Testiomonials</h5>
                <h2>We have helped create clients say me.</h2>
              </div>
            </div>
          </div>
              <div className="ratio ratio-16x9 mt-10">
                <iframe
                  src={videoEmbedLink}
                  title="Testimonial Video"
                  allowFullScreen
                  className="rounded"
                ></iframe>
           
            </div>
         
        </div>
      )}
    </main>
  );
};

export default Testimonial;
