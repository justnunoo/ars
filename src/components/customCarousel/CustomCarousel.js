'use client';

import { useState, useEffect, useRef } from "react";
import styles from "./CustomCarousel.module.css";

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3); // Default items visible on large screens
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const placeholderImages = [
    "https://via.placeholder.com/300x200?text=Item+1",
    "https://via.placeholder.com/300x200?text=Item+2",
    "https://via.placeholder.com/300x200?text=Item+3",
    "https://via.placeholder.com/300x200?text=Item+4",
    "https://via.placeholder.com/300x200?text=Item+5",
    "https://via.placeholder.com/300x200?text=Item+6",
  ];

  // Update visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) setVisibleItems(4); // Large screens
      else if (screenWidth >= 768) setVisibleItems(3); // Medium screens
      else setVisibleItems(1); // Small screens
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? placeholderImages.length - visibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === placeholderImages.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    // Swipe thresholds for triggering navigation
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      // Swipe left
      handleNext();
    } else if (swipeDistance < -minSwipeDistance) {
      // Swipe right
      handlePrev();
    }
  };

  return (
    <div
      className={styles.carouselContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className={styles.carouselButton} onClick={handlePrev}>
        &lt;
      </button>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
            width: `${(placeholderImages.length * 100) / visibleItems}%`,
          }}
          ref={carouselRef}
        >
          {placeholderImages.map((src, index) => (
            <div
              key={index}
              className={styles.carouselItem}
              style={{ width: `${100 / visibleItems}%` }}
            >
              <img
                src={src}
                alt={`Placeholder ${index + 1}`}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>
      </div>
      <button className={styles.carouselButton} onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}
