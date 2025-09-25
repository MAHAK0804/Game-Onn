import Banner from "@/elements/Banner";
import Image from "next/image";
import React from "react";
import partner from "../../../public/assets/about-us-empower.jpg";
import Partner from "./Partner";
import aboutUS from "../../../public/assets/aboutUs.jpeg";
import Features from "./Features";
import ContactUs from "./ContactUs";

export default function AboutPage() {
  return (
    <div className=" mt-10">
      <Banner
        video="https://videos.pexels.com/video-files/2867873/2867873-uhd_2560_1440_24fps.mp4"
        text="Increase your visibility and reach New Audiences by posting your venue on our unique platform, reaching directly to avid players"
      />
      <div className="bg-gray-800 p-5 lg:p-10 ">
        <div className="w-[90%] m-auto flex flex-wrap justify-between">
          <div className="w-full lg:w-[50%]">
            <p className=" text-white text-[20px] my-1 lg:my-3 text-justify">
              Welcome to Game Onn – the revolution in how sports fans meet
              venues! Conceived out of love for sport and a dream to transform
              the booking process, Game Onn exists to serve players who are
              hungry for convenience, variety, and competitive matches.
            </p>
            <p className=" text-white text-[20px] my-3 text-justify">
              Why did we create Game Onn? Because we think that discovering and
              reserving the ultimate venue for your favorite sport should be as
              easy and exciting as the game itself. From the adrenaline of a
              basketball match, to the tactics of a squash game, or the
              collaboration and strategy of football, your next match is just a
              couple of clicks away.
            </p>
          </div>
          <div className="w-full lg:w-[40%] shadow-lg rounded-lg h-[40vh]">
            <Image
              src={aboutUS}
              alt="partner"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto flex flex-wrap justify-between my-10">
        <div className="w-full lg:w-1/2 shadow-lg rounded-lg">
          <Image
            src={partner}
            alt="partner"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 p-5 lg:p-10">
          <h3 className="text-3xl my-10">Empowering Our Partners</h3>
          <p className=" text-[18px] my-3 text-justify text-gray-500">
            We have designed Game Onn to give you power. Our site not only makes
            searching and booking easy but also gives you instant access to the
            best venues at your fingertips. You can now easily book a court,
            field, or arena that suits your time, location, and sporting
            requirements. Game Onn provides you with secure payments and instant
            confirmations to safeguard your time and investment, so you can
            concentrate on what matters most – the game.
          </p>
          <p className=" text-[18px] my-3 text-justify text-gray-500">
            So, get ready and let Game Onn unleash your potential – because
            every game matters, and your next great sports experience starts
            with us.
          </p>
        </div>
      </div>
      <Partner />
      <Features />
      <div id="contact-us">
        <ContactUs />
      </div>
    </div>
  );
}
