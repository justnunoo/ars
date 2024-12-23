'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function TestComponent() {
  const router = useRouter();

  // Helper function to dynamically apply active class
  const isActive = (path) =>
    router.pathname === path ? "nav-link text-light active" : "nav-link text-light";

  const navbarRef = useRef(null);
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const navbar = navbarRef.current;
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        navbar.style.top = "0";
      } else {
        // Scrolling down
        navbar.style.top = "-75px";
      }
      prevScrollPos = currentScrollPos;
    };

    const throttledScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Function to collapse the navbar when a link is clicked
  const handleLinkClick = () => {
    if (navbarCollapseRef.current) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  return (
    <nav
      ref={navbarRef}
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg w-100"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 1050,
        transition: "top 0.3s ease-in-out",
      }}
      id="navbar"
    >
      <div className="container-fluid">
        <Link href="#home" className="navbar-brand d-flex align-items-center">
          <Image
            src="/vercel.svg"
            width={40}
            height={40}
            alt="African Relining Services Logo"
            priority
          />
          <span className="ms-2 text-light">African Relining Services</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          ref={navbarCollapseRef}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="#home" className={isActive("#home")} onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services" className={isActive("#services")} onClick={handleLinkClick}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className={isActive("#about")} onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className={isActive("#contact")} onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Utility function for throttling
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return (...args) => {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
