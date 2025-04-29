import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import VenueDetCard from "./VenueDetCard";
type ResponsiveProps = {
  data: Venue[];
};
function Responsive({ data }: ResponsiveProps) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
        {data.map((venue: any) => (
          <>
            <Link
              href={`venues/${venue.id}`}
              className="block border border-gray-600 h-90 mx-4 rounded-2xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-2xl hover:bg-gray-100"
            >
              <div className="w-full h-1/2">
                <Image
                  src={venue.img}
                  alt="Venue"
                  className="w-full h-full object-cover"
                />
              </div>
              <VenueDetCard
                name={venue.venueName}
                rating={venue.rating}
                cost={venue.cost}
                distance={venue.distance}
                loc={venue.loc}
              />
            </Link>
          </>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
