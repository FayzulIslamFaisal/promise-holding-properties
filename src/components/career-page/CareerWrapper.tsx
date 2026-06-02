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
        imageSrc="/assets/images/slider/banner3.png"
      />
      <WhyJoinUs />
      <HiringProcess />
      <OpenPositions />
    </>
  );
};

export default CareerWrapper;
