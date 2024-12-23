"use client";

import { useEffect } from "react";
import "./MessageForm.css"

export default function ContactForm() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-up");

    const handleScroll = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom > 0
        ) {
          element.classList.add("in-view");
        } else {
          element.classList.remove("in-view"); // Remove the class if the element goes out of view
        }
      });
    };

    // Throttle the scroll event to improve performance
    const throttledScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledScroll);
    handleScroll(); // Initial check for elements already in view

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <div id="contact">
      <h2 className="animate-up text-center">Contact Us</h2>
      <form id="contact-form">
        <label htmlFor="name" className="animate-up">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="animate-up"
          required
        />

        <label htmlFor="email" className="animate-up">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="animate-up"
          required
        />

        <label htmlFor="message" className="animate-up">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="animate-up"
          required
        ></textarea>

        <button type="submit" className="animate-up">
          Send
        </button>
      </form>
    </div>
  );
}

// Utility function for throttling
function throttle(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
