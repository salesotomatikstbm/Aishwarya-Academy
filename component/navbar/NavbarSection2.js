"use client";
import React, { useEffect, useRef } from "react";
import NavigationSection from "./NavigationSection";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";

const NavbarSection2 = () => {
  const {
    isHeaderFixed,
    handleMobileNavOpen,
    isMobileNavOpen,
    setIsMobileNavOpen,
    handleMobileNavClose,
  } = useEduorContext();
  const navMenuRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the navigation menu
    const handleClickOutside = (event) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        isMobileNavOpen
      ) {
        setIsMobileNavOpen(false); // Close the mobile navigation menu
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileNavOpen, setIsMobileNavOpen]);
  return (
    <nav
      className={`navbar navbar-expand-lg main_menu_2 ${
        isHeaderFixed ? "menu_fix" : ""
      }`}
      ref={navMenuRef}
    >
      <div className="container">
        <div className="main_menu_2_area">
          <Link className="navbar-brand" href="/">
            <img
              src="images/logo2.png"
              alt="Eduor"
              className="img-fluid w-100"
            />
          </Link>
          {isMobileNavOpen ? (
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleMobileNavClose}
            >
              <i className="fa fa-times close_icon"></i>
            </button>
          ) : (
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleMobileNavOpen}
            >
              <i className="fa fa-bars menu_icon"></i>
            </button>
          )}

          <NavigationSection
            position=""
            btnPosition={true}
            navRef={navMenuRef}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection2;
