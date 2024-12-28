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
      <ul className={`navbar-nav ${position}`}>
        <li className="nav-item">
          <a className="nav-link">
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
          </ul>
        </li>
        <li className="nav-item">
          <Navlink href="/about">about us</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/courses">courses</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/blog">blog</Navlink>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            pages <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            <li>
              <SubNavlink href="/courses/development-theory-learn">
                courses details
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/blog/learn-with-these-award-winning-best-blog-collage-courses">
                blog details
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/events">event</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/events/outdoor-this-games">
                event details
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/team">team</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/team/john-smith">team details </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/faq">FAQs</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/sign-in">sign in</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/sign-up">sign up</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/terms-condition">
                terms and condition
              </SubNavlink>
            </li>
            <li>
              <SubNavlink href="/privacy-policy">privacy policy</SubNavlink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Navlink href="/contact">contact</Navlink>
        </li>
        {btnPosition ? null : (
          <li className="nav-item">
            <a className="nav-link common_btn" href="#">
              LEARN MORE
            </a>
          </li>
        )}
      </ul>
      {btnPosition ? (
        <a className="common_btn_2 ms-auto" href="#">
          learn more
        </a>
      ) : null}
    </div>
  );
};

export default NavigationSection;
