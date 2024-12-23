"use client"

import { useState, useEffect } from "react";
import "./page.css";
import Section from "@/components/section/section";
import MainCarousel from "@/components/MainCarousel/MainCarousel";
import ContactForm from "@/components/MessageForm/MessageForm";
import CarouselComponent from "@/components/SwiperCarousel/SwiperCarousel";
// import CarouselComponent from "@/components/TestComponent/testComponent";
import TestComponent from "@/components/TestComponent/testComponent";
import Footer from "@/components/footer/footer";
import TawkToChat from "@/components/TawktoChat/TawktoChat";
import Loading from "@/app/loading";
import Header from "@/components/header/header";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-2">
      <Header />
      <MainCarousel />
      <Section />
      <CarouselComponent />
      <ContactForm />
      <Footer />
      <TawkToChat />
      {/* <TestComponent /> */}
    </div>
  );
}