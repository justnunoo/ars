import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css"
import BootstrapClient from '@/components/bootstrap/BootstrapClient';
import '../lib/fontawesome'; // Import FontAwesome configuration
// Import Owl Carousel styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

// import TestComponent from "@/components/TestComponent/testComponent";

// import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <TestComponent /> */}
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
