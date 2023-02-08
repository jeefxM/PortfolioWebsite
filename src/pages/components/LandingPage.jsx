import React from "react";
import LandingSection from "./LandingSection";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div className=" bg-first text-white font-poppins">
      <Navbar />
      <LandingSection />
    </div>
  );
}

export default LandingPage;
