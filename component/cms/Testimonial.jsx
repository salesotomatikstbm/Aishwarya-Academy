"use client";
import React, { useEffect, useState } from "react";
import { client } from "../cms/contentfulClient"; // Assuming you're using Contentful for CMS
import Slider from "react-slick"; // Import react-slick

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
          const richTextFields = [item?.fields?.videolink, item?.fields?.videolink2];
          return richTextFields.map((richText) => findVideoUrl(richText)).filter(Boolean);
        });

        if (videoLinks.length === 0) {
          console.error("No valid video links found.");
          setError("No testimonials with valid video links.");
          return;
        }

        const embedLinks = videoLinks.map((videoUrl) => {
          let videoId = null;

          if (videoUrl.includes("youtube.com/watch")) {
            const match = videoUrl.match(/[?&]v=([^&]+)/);
            videoId = match ? match[1] : null;
          } else if (videoUrl.includes("youtu.be/")) {
            const match = videoUrl.match(/youtu\.be\/([^?]+)/);
            videoId = match ? match[1] : null;
          } else if (videoUrl.includes("youtube.com/embed/")) {
            videoId = videoUrl.split("/embed/")[1];
          }

          return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
        });

        setVideoEmbedLinks(embedLinks.filter(Boolean));
      } catch (err) {
        console.error("Error fetching testimonial data:", err);
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchTestimonialData();
  }, []);

  // Function to recursively find video URLs within the rich text object
  const findVideoUrl = (node) => {
    if (!node) return null;

    if (node.nodeType === "hyperlink" && node.data?.uri) {
      return node.data.uri; // Return the hyperlink URL
    }

    if (node.content && Array.isArray(node.content)) {
      for (const childNode of node.content) {
        const videoUrl = findVideoUrl(childNode);
        if (videoUrl) return videoUrl;
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
          <Slider
      className="row testimonial_slider"
      slidesToShow={2} // Set the number of slides to show
      infinite={true}
      dots={false}
      arrows={false}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
          >
            {videoEmbedLinks.map((link, index) => (
              <div className="col-xl-6 wow fadeInUp tf__single_testimonial " key={index}>
                
                <div className="ratio ratio-16x9 ">
                  <iframe
                    src={link}
                    title={`Testimonial Video ${index + 1}`}
                    allowFullScreen
                    className="rounded"
                  ></iframe>
                </div>
              </div>
            ))}
          </Slider>
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
