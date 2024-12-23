"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

export default function Carousel() {
  const items = [
    {
      id: 1,
      title: "Item 1",
      description: "This is the first item.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Item 2",
      description: "This is the second item.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Item 3",
      description: "This is the third item.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Item 4",
      description: "This is the fourth item.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Item 5",
      description: "This is the fifth item.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="carousel-container mx-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Set autoplay delay in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        breakpoints={{
          // Adjust the number of slides based on screen width
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="card-img"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
