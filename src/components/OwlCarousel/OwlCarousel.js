'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./OwlCarousel.css"

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export default function Owlcarousel() {
  const placeholderImages = [
    "https://via.placeholder.com/600x400?text=Slide+1",
    "https://via.placeholder.com/600x400?text=Slide+2",
    "https://via.placeholder.com/600x400?text=Slide+3",
    "https://via.placeholder.com/600x400?text=Slide+4",
    "https://via.placeholder.com/600x400?text=Slide+5",
  ];

  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  return (
    <div>
      <h2 className="text-center">My Carousel</h2>
      <OwlCarousel className="owl-theme" {...carouselOptions}>
        {placeholderImages.map((src, index) => (
          <div key={index} className="item">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={600}
              height={400}
              style={{ borderRadius: '10px' }}
            />
            <h3 className="text-center mt-3">{`Slide ${index + 1}`}</h3>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
