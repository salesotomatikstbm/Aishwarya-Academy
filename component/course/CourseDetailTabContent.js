import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

const CourseDetailTabContent = ({ courseData }) => {
  const [activeKey, setActiveKey] = useState("overview");

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <Tab.Container activeKey={activeKey} onSelect={handleSelect}>
      <div>
        <Nav
          variant="pills"
          className="nav nav-pills"
          id="pills-tab"
          role="tablist"
        >
          <Nav.Item>
            <Nav.Link eventKey="overview">Overview</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews" id="reviews">Syllabus</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="instructors">Instructors</Nav.Link>
          </Nav.Item>
          
        </Nav>
      </div>
      <Tab.Content id="pills-tabContent">
        <Tab.Pane eventKey="overview">
          <div className="tf__course_overview">
            <h3>Description</h3>
            <p>
            {courseData.disc1}
            </p>
            <p>
            {courseData.disc2}
            </p>
           
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="instructors">
          <div className="tf__course_instructor">
            <div className="row">
              <div className="col-xl-5 col-md-6">
                <div className="tf__course_instructor_img">
                  <img
                    src={`/${courseData.instructorImg}`}
                    alt="instructor"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-md-6">
                <div className="tf__course_instructor_text">
                  <h4>{courseData.instructor}</h4>
                  <p>+958754125215456</p>
                  <p>example@gmail.com</p>
                  
                  <ul className="d-flex flex-wrap align-items-center">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                
              </div>
              
            </div>
            
          </div>
        </Tab.Pane>

        
        <Tab.Pane eventKey="reviews">
          <div className="tf__course_overview">

          <h3>Course Syllabus:</h3>
            <ul>
              <li>{courseData.syllabus[0]}</li>
              <li>{courseData.syllabus[1]}</li>
              <li>{courseData.syllabus[2]}</li>
              <li>{courseData.syllabus[3]}</li>
              <li>{courseData.syllabus[4]}</li>
              <li>{courseData.syllabus[5]}</li>
              <li>{courseData.syllabus[6]}</li>
              <li>{courseData.syllabus[7]}</li>
              <li>{courseData.syllabus[8]}</li>
              <li>{courseData.syllabus[9]}</li>
            </ul>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              minus soluta! Facere alias, eos dolorem explicabo vitae nulla
              atque, aspernatur corrupti asperiores neque fuga id odit adipisci
              et dolores ut rerum placeat distinctio dicta. Dolorum distinctio
              iure quos iste beatae, cumque possimus nobis.
            </p>

            <h3>Course features:</h3>
            <ul>
            <li>{courseData.benefits[0]}</li>
            <li>{courseData.benefits[1]}</li>
            <li>{courseData.benefits[2]}</li>
            <li>{courseData.benefits[3]}</li>
            <li>{courseData.benefits[4]}</li>
            <li>{courseData.benefits[5]}</li>
            <li>{courseData.benefits[6]}</li>
            <li>{courseData.benefits[7]}</li>
            <li>{courseData.benefits[8]}</li>
            <li>{courseData.benefits[9]}</li>
            </ul>
            <p>
              Amet consectetur adipisicing elit. Aliquam, minus soluta! Facere
              alias, eos dolorem explicabo vitae nulla atque, aspernatur
              corrupti asperiores neque fuga id odit adipisci et dolores ut
              rerum placeat distinctio dicta. Dolorum distinctio iure quos iste
              beatae, cumque possimus nobis.
            </p>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default CourseDetailTabContent;
