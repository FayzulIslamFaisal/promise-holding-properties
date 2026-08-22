"use client";
import React from "react";
import SecondaryBanner from "@/components/common/SecondaryBanner";
import WhyJoinUs from "./WhyJoinUs";
import HiringProcess from "./HiringProcess";
import OpenPositions from "./OpenPositions";

const CareerWrapper = () => {
  return (
    <>
      <SecondaryBanner
        title="Build Your Future With Us"
        subtitle="Careers at Promise Assets"
        badge="JOIN OUR TEAM"
        imageSrc="/assets/images/banners/career-banner.jpg"
      />
      <OpenPositions />
      <WhyJoinUs />
      <HiringProcess />
    </>
  );
};

export default CareerWrapper;
