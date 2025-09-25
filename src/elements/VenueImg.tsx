import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import { Venues } from "@/interfaces";

function VenueImg({ data }: { data: Venues | undefined }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        {data?.img.map((venue: StaticImageData, index: number) => (
          <div key={index} className="px-2">
            <div className="relative rounded-2xl mb-5 border border-gray-100 h-[300px] overflow-hidden">
              <Image
                src={venue}
                alt="Venue"
                fill
                className="object-cover rounded-2xl overflow-hidden"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VenueImg;
