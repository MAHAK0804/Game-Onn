import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import VenueGame from "./VenueGame";
import VenueHost from "./VenueHost";
import { ITopVenues } from "@/interfaces";

export default function TopVenuesSlider({ data }: { data: ITopVenues[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="slider-container my-8 lg:my-10 mx-1">
      <Slider {...settings}>
        {data.map((venue: ITopVenues, index: number) => (
          <>
            {/* venue */}
            <div key={index} className="px-2">
              <div className="relative rounded-md mb-5 shadow-md border border-gray-100 h-full ">
                <Image
                  src={venue.img}
                  alt="Venue"
                  width={400}
                  height={650}
                  className="w-full h-auto object-cover"
                />
                {/* <div className="absolute text-center w-full top-2 z-10">
                  <VenueGame title={venue.game} />
                </div> */}
                <VenueHost
                  venuename={venue.venueName}
                  reviews={venue.reviews}
                  desc={venue.desc}
                />
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}
