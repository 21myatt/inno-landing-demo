"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Heart,
  Users,
  Lightbulb,
  Rocket,
  Globe,
  Handshake,
  Target,
  Sparkles,
  CheckCircle,
  Calendar,
  Mail,
  Facebook,
  Phone,
  BookOpen,
  Award,
  Zap,
} from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import NavEng from "../sections/HOME/NavEng";
import Hero3 from "../sections/COLLABORATE/Hero3";
import Footer from "../sections/HOME/Footer";
import JourneySoFar from "../sections/COLLABORATE/JourneySoFar";
import HowtoCollab from "../sections/COLLABORATE/HowtoCollab";
import Booking from "../sections/SUPPORT/Booking";

const Collaborate = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

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
      <NavEng />
      <Hero3 />
      <JourneySoFar />
      <HowtoCollab />
      <Booking
        title="Ready to Collaborate?"
        highlight="Collaborate"
        description="Book a meeting with our team to explore partnership opportunities. Let's discuss how we can create impact together and empower the next generation of Migrants."
        bullets={[
          "30-minute discovery call",
          "Discuss collaboration ideas",
          "Plan next steps together",
        ]}
      />
      <Footer />
    </div>
  );
};

export default Collaborate;
