"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Controller } from "swiper/modules";
import "./SwiperCarousel.css";
import { sliderImages } from "@/app/data";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CarouselComponent() {

  const [controlledSwiper, setControlledSwiper] = useState(null);

  const placeholderImages = [
    { src: "https://via.placeholder.com/400x350?text=Slide+1", title: "Project One" },
    { src: "https://via.placeholder.com/400x350?text=Slide+2", title: "Project Two" },
    { src: "https://via.placeholder.com/400x350?text=Slide+3", title: "Project Three" },
    { src: "https://via.placeholder.com/400x350?text=Slide+4", title: "Project Four" },
    { src: "https://via.placeholder.com/400x350?text=Slide+5", title: "Project Five" },
  ];

  return (
    <div className="container mb-5">
      <h2 className="text-center mb-5">Projects</h2>
      <Swiper
        modules={
          [
            Navigation, 
            Pagination, 
            // Autoplay,
          ]
        }
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{clickable: true}}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            {/* Wrapper for relative positioning */}
            <div className="image-container">
              {/* Image */}
              <Image
                src={image.src}
                alt={`Slider ${index + 1}`}
                width={400}
                height={400}
                className="img-fluid image"
                layout="responsive"
                placeholder="blur"
                priority={true}
              />
              {/* Overlay Text */}
              
              <div className="overlay">
                <div className="text">
                  {image.title}
                </div>
              </div>
              {/* <div className="overlay-text">
                <h3>{image.title}</h3>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
