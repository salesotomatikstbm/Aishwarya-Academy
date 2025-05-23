"use client";
import React from "react";
import { useEduorContext } from "@/context/EduorContext";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";

const NavigationSection = ({ position, btnPosition, navRef }) => {
  const { isMobileNavOpen } = useEduorContext();
  return (
    <div
      ref={navRef}
      className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
      id="navbarNav"
    >
      {/* <ul className={`navbar-nav ${position}`}>
        <li className="nav-item">
        <Navlink href="/">home</Navlink> */}










        
          {/* <a className="nav-link">
            Home <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            <li>
              <SubNavlink href="/">home 1</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/home-2">home 2</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/home-3">home 3</SubNavlink>
            </li>
          </ul> */}






        {/* </li>
        <li className="nav-item">
          <Navlink href="/about">about us</Navlink>
        </li> */}



{/* 
        <li className="nav-item">
          <a className="nav-link">
            Courses <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
          <li>
              <SubNavlink href="/bank">
                BANK
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/tnpsc">
                TNPSC
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/ssc">
                SSC
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/police">
                POLICE
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/railway">RAILWAY</SubNavlink>
            </li>
          </ul>
         
        </li> */}
        
        {/* <li className="nav-item">
          <Navlink href="/courses">courses</Navlink>
        </li> */}

        {/* <li className="nav-item">
          <Navlink href="/blog">blog</Navlink>
        </li> */}
       
        {/* <li className="nav-item">
          <Navlink href="/contact">contact</Navlink>
        </li> */}







{/* 
        {btnPosition ? null : (
          <li className="nav-item">
            <Navlink href="/contact">contact us</Navlink>
            
          </li>
        )}
      </ul>
      {btnPosition ? (
        <a className="common_btn_2 ms-auto " href="#">
          learn more
        </a>
      ) : null} */}
    </div>
  );
};

export default NavigationSection;
