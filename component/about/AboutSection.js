import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="tf__about ">
      <div className="container">
        {/* <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  src="images/about_top_img.jpg"
                  alt="about"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h4>Study Off Flexibly</h4>
                  <p>
                    We can provide you with a reliable handyan in Please input
                    an email address down below school. Please input anand
                    school. included the today.
                  </p>
                </div>
                <a href="#" className="common_btn">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
            <div className="tf__heading_area tf__heading_area_left mb_40">
                <h2>About Aishwarya Academy</h2>
              </div>
              <p style={{ textAlign: "justify" }}>
                Aishwarya Academy is dedicated to providing quality education with a structured approach to learning. Our experienced faculty and innovative teaching methods help students build a strong foundation for their future.
              </p>
              <ul style={{ textAlign: "justify" }}>
                <li>Comprehensive learning programs designed for all students.</li>
                <li>Interactive and engaging teaching methods for better understanding.</li>
                <li>Personalized guidance to enhance individual learning potential.</li>
                <li>Regular assessments and feedback to track progress effectively.</li>
              </ul>
              {/* <Link href="/about" className="common_btn">
                about more
              </Link> */}
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
  <div className="tf__about_img d-none d-md-block">
    <img
      src="images/about_img.png"
      alt="about"
      className="img-fluid w-100"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
