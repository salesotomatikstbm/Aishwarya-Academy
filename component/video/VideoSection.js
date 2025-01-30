"use client";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const embedUrl = "https://www.youtube.com/embed/EYPe-La941s?autoplay=1"; // YouTube embed URL with autoplay enabled

  return (
    <section className="tf__video mt_100">
      <div className="tf__video_overlay pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto wow fadeInUp">
              <div className="tf__video_text">
                <button 
                  className="venobox play_btn"
                  onClick={openModal} 
                  aria-label="Play Video"
                >
                  <i className="fas fa-play"></i>
                </button>
                <h4>Video About Course Features</h4>
                <p>
                  There are many variations of passages of agency Lorem Ipsum
                  Fasts injecte.
                </p>
                <a className="common_btn" href="#">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for video */}
      <Modal 
        show={isModalOpen} 
        onHide={closeModal} 
        size="lg" 
        centered
        className="modal-video"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="video-modal-header">
          <Modal.Title id="example-modal-sizes-title-lg">Video About Course Features</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-video-body">
          <div className="modal-video-inner">
            <div className="modal-video-movie-wrap">
              <iframe 
                className="video-modal-iframe"
                src={embedUrl}
                allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video About Course Features"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default VideoSection;
