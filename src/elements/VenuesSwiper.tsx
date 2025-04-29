import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import VenueGame from "./VenueGame";
import VenueHost from "./VenueHost";
function Responsive2({ data }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        {data.map((venue: any, index: any) => (
          <>
            <div key={index} className="px-2">
              <div className="relative rounded-2xl mb-5 shadow-xl border border-gray-100 overflow-hidden">
                <Image
                  src={venue.img}
                  alt="Venue"
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute text-center w-full top-2 z-10">
                  <VenueGame title={venue.game} />
                </div>
                <VenueHost
                  img={venue.person.pic}
                  name={venue.person.name}
                  date={venue.date}
                  heading={venue.heading}
                  details={venue.details}
                />
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive2;
