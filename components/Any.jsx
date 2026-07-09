"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import { carsInfo } from "../src/utils/CarInfo.js";

gsap.registerPlugin(ScrollTrigger);

export default function Any() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  // const [packages, setPackages] = useState([]);

  // ✅ Fetch cars from /api/cars
  // useEffect(() => {
  //   async function fetchPackages() {
  //     try {
  //       const res = await fetch("/api/cars");
  //       const data = await res.json();
  //        console.log("Cars from DB:", data);
  //       setPackages(data); // no filtering
  //     } catch (error) {
  //       console.error("Error fetching cars:", error);
  //     }
  //   }
  //   fetchPackages();
  // }, []);

  // ✅ GSAP animations
  useGSAP(() => {
    const fadeIn = gsap.to(sectionRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    const slideInText = gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      fadeIn.scrollTrigger?.kill();
      fadeIn.kill();
      slideInText.scrollTrigger?.kill();
      slideInText.kill();
    };
  }, []);

  return (
    <section
      id="our-fleet"
      className="bg-white flex flex-col items-center justify-center "
      aria-labelledby="fleet-heading"
    >
      <div className="w-full  bg-gray-100 px-1 md:px-10 py-20  ">

        <div ref={headingRef} className="text-center mb-14">

          <span className="uppercase tracking-[2px] font-bold text-[#0466C8] text-sm md:text-lg">
            Our Fleet
          </span>

          <h2
            id="fleet-heading"
            className="mt-4 font-extrabold text-slate-900 leading-tight text-[clamp(2rem,4vw,3rem)]"
          >
            Premium Cars for Taxi And
            <br />
            Car Rental Services in Varanasi
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-slate-500 leading-8 text-base md:text-lg">
            Choose from hatchbacks, sedans, SUVs, Innova Crysta,
            Tempo Travellers and luxury vehicles for airport transfers,
            local sightseeing, outstation travel, corporate bookings,
            weddings and religious tours across Varanasi and North India.
          </p>

        </div>

        <div ref={sectionRef} className="opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">

            {carsInfo.map((car) => (
              <Card
                key={car.id}
                img={car.image}
                name={car.name}
                location={car.location}
                tag={car.tag}
                rates={car.rates}
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

