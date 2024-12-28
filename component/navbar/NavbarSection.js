"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import NavigationSection from "./NavigationSection";

const NavbarSection = ({ style, logo }) => {
  const {
    isHeaderFixed,
    handleMobileNavOpen,
    isMobileNavOpen,
    handleMobileNavClose,
    setIsMobileNavOpen,
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
      className={`navbar navbar-expand-lg main_menu ${style} ${
        isHeaderFixed ? "menu_fix" : ""
      }`}
      ref={navMenuRef}
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src={logo} alt="Eduor" className="img-fluid w-100" />
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
          position="ms-auto"
          btnPosition={false}
          navRef={navMenuRef}
        />
      </div>
    </nav>
  );
};

export default NavbarSection;
