import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import Model from "../components/Hero-Model/Model";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Counter from "../components/Counter";
import ShowProject from "./ShowProject";
import Marquee from "./Marquee";
import FeatureCards from "./FeatureCards";
import LineAnimation from "./LineAnimation";

const Hero = () => {
  useGSAP(() =>{
    gsap.fromTo(".hero-text h1 ",
      {
        y: 100,
        opacity: 0,
        duration: 1,
    },
    {
      y: 0,
        opacity: 1,
        duration: 1,
        stagger:0.1,
        ease: "power2.out",
    },
)
  })
  return (
    <section id="hero" className="overflow-hidden">
      <div className="absolute left-0 top-0 z-10 ">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="hero-layout">
        {/* left-content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="hero-text">
            <h1>
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((item) => (
                    <span
                      key={item.text}
                      className="flex items-center md:gap-3 gap-1 pb-2 "
                    >
                      <img
                        src={item.imgPath}
                        className="xl:size-12 md:size-10 size-7 md:px-2 p-1
                                  rounded-full bg-white-50"
                      />
                      <span>{item.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>
          <p className="py-7 md:text-xl pointer-events-none ">
            Hi😎, I'm Aman, a developer based in Nepal with passion for code.
          </p>
          <Button
            title="See My Work"
            id="counter"
            icon="/images/arrow-down.svg"
            className="md:w-80 md:h-16 w-56 h-12"
          />
        </header>
        {/* right-content */}
        <figure>
          <div className="hero-3d-layout">
            <Model />
          </div>
        </figure>
      </div>
      <Counter />
      <div className="">
        <ShowProject />
        <Marquee />
        <FeatureCards />
        <LineAnimation />
      </div>
    </section>
  );
};

export default Hero;
