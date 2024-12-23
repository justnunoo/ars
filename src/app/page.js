import "./page.css";
import Section from "@/components/section/section";
import MainCarousel from "@/components/MainCarousel/MainCarousel";
import ContactForm from "@/components/MessageForm/MessageForm";
import CarouselComponent from "@/components/SwiperCarousel/SwiperCarousel";
// import CarouselComponent from "@/components/TestComponent/testComponent";
import TestComponent from "@/components/TestComponent/testComponent";

export default function HomePage() {

  return (
    <div className="mx-2">
      <MainCarousel />
      <Section />
      <CarouselComponent />
      <ContactForm />
      {/* <TestComponent /> */}
    </div>
  );
}