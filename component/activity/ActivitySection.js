import React from "react";

const ActivitySection = () => {
  return (
    <section className="tf__activities mt_100 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__heading_area tf__heading_area_left mb_20">
              <h5>OUR Best ACTIVITIES</h5>
              <h2>We School Be Happy With Our Activities.</h2>
            </div>
            <div className="tf__activities_text">
              <p>
                Business tailored it design, management & support services
                business agency elit, sed do eiusmod tempor.{" "}
              </p>
              <div className="row">
                <div className="col-xl-6 col-sm-6">
                  <div className="tf__activities_item light_blue">
                    <span>
                      <i className="fa fa-book"></i>
                    </span>
                    <h3>Parenting Bill</h3>
                  </div>
                  <div className="tf__activities_item green">
                    <span>
                      <i className="fa fa-graduation-cap"></i>
                    </span>
                    <h3>Engineering</h3>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6 xs_mt_0 mt_30 md_margin">
                  <div className="tf__activities_item orange">
                    <span>
                      <i className="fa fa-university"></i>
                    </span>
                    <h3>Sports Training</h3>
                  </div>
                  <div className="tf__activities_item blue">
                    <span>
                      <i className="fa fa-book-medical"></i>
                    </span>
                    <h3>School Directly</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInRight">
            <div className="tf__activities_img">
              <img
                src="images/activities_img.jpg"
                alt="activities"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
