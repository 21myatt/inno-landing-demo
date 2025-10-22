"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Heart,
  Users,
  Laptop,
  BookOpen,
  TrendingUp,
  Target,
  CheckCircle,
  Calendar,
  MessageCircle,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Award,
} from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Navbar from "../sections/HOME/Navbar";
import Hero2 from "../sections/SUPPORT/Hero2";
import OurStory from "../sections/SUPPORT/OurStory";
import ProblemState from "../sections/SUPPORT/ProblemState";
import ImpactArea from "../sections/SUPPORT/ImpactArea";
import SuccssStories from "../sections/SUPPORT/SuccssStories";
import Footer from "../sections/HOME/Footer";
import Booking from "../sections/SUPPORT/Booking";
import PhotoCollage from "../sections/SUPPORT/PhotoCollage";
import NavEng from "../sections/HOME/NavEng";

export default function support() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "inno-house-test-meeting" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* <Navbar /> */}
      <NavEng />
      <Hero2 />
      <OurStory />
      <ProblemState />
      <ImpactArea />
      <SuccssStories />
      <PhotoCollage />
      <Booking
        title="Let's Connect"
        highlight="Connect"
        description="We'd love to discuss how you can support our mission..."
        bullets={[
          "30-minute intro call",
          "Learn about our programs",
          "Discuss partnership options",
        ]}
      />

      <Footer />
    </div>
  );
}
