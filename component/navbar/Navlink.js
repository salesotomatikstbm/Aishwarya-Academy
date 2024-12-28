"use client";
import React from "react";
import Link from "next/link";
import { useEduorContext } from "@/context/EduorContext";
import { usePathname } from "next/navigation"; // Import usePathname

const Navlink = ({ href, children }) => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useEduorContext();
  const pathname = usePathname(); // Get the current URL pathname

  const isActive = pathname === href;

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? "active" : ""}`}
      onClick={handleLinkClick}
    >
      {children}
    </Link>
  );
};

export default Navlink;
