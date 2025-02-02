import React from "react";
import ContactForm from "../form/ContactForm";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__contact_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>OUR contact Us</h5>
                <h2>Get Our Contact Now.</h2>
              </div>
              <p>
                Promote your blog posts, case udie, and product ouncems with the
                the branded videoscustomers coming back for services Makes best
                effort.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Call</h3>
                  <a href="callto:++91 9445556041">+91 9445556041</a>
                  
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>mail</h3>
                  <a href="mailto:aishwaryaacademyattur@gmail.com ">aishwaryaacademyattur@gmail.com </a>
                  
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>address</h3>
                  <p>191/C, 60ft Road, Gandhinagar,Attur.636102
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12 wow fadeInUp">
            <div className="tf__contact_map mt_100">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.27386058910278!2d78.59555281268685!3d11.596107639218305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab9d228acc8a01%3A0x6e8dbbdb6c3ba67!2sAishwarya%20Academy%20for%20Kids!5e0!3m2!1sen!2sin!4v1738476856024!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
