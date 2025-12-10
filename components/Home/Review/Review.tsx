"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Testimonals"
        subHeading="Lorem ipsum dolor sit amet elit, sed do eismod tempor"
      />

      <div className="w-[80%] mx-auto mt-16">
        <Carousel
          showDots={false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ReviewCard image="/images/u1.png" title="Grea Quality" username="Jesica Lange" userRole="App Developer"/>
          <ReviewCard image="/images/u2.png" title="Awesome Work!" username="Yasin Dabak" userRole="FullStack Developer"/>
          <ReviewCard image="/images/u3.png" title="Best Work!" username="Emre Dabak" userRole="Electirc Electronic Engineer"/>
          
      

        </Carousel>
      </div>
    </div>
  );
};

export default Review;
