import CoursesSection from "./sections/HOME/CoursesSection";
import FinalCTA from "./sections/HOME/FinalCTA";
import Footer from "./sections/HOME/Footer";
import Hero from "./sections/HOME/Hero";
import Navbar from "./sections/HOME/Navbar";
import Stats from "./sections/HOME/Stats";
import Testimonials from "./sections/HOME/Testimonials";
import WhySection from "./sections/HOME/WhySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhySection />
      <CoursesSection />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
