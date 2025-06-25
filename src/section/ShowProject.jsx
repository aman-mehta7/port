import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const ShowProject = () => {
 gsap.registerPlugin(ScrollTrigger);

 const containerRef = useRef(null)
 const project1  = useRef(null)
 const project2  = useRef(null)
 const project3  = useRef(null)

  useGSAP(()=>{
    const cards = [project1.current, project2.current, project3.current];



    cards.forEach((card,index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 20,
          duration: 1,
          delay: (index + 1) * 0.3,
          stagger: 0.3,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
          },
        }
      );
    })



    gsap.fromTo(
      "#work",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  },[])


  return (
    <div
      id="work"
      ref={containerRef}
      className=" w-full px-5 md:px-20 mt-20 xl:pt-28"
    >
      <div className="flex flex-col xl:flex-row gap-7">
        <div ref={project1} className="">
          <img className="rounded-2xl" src="./port/images/project1.png" alt="" />
          <h1 className="text-2xl font-bold mt-8">
            On-Demand Rides Made Simple with a Powerful, User-Friendly App
            called Ryde
          </h1>
          <p className="text-white-50 mt-5">
            An app built with React Native, Expo, & TailwindCSS for a fast,
            user-friendly experience.
          </p>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col  gap-3 text-xl font-bold xl:-mt-5">
          <div ref={project2}>
            <img className="rounded-md" src="./port/images/project2.png" alt="" />
            <h1 className="ml-[5%]">Library Management Platform</h1>
          </div>
          <div ref={project3}>
            <img className="rounded-md" src="./port/images/project3.png" alt="" />
            <h1 className="ml-[5%]">YC Directory - A Startup Showcase App</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProject