"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "✈️",
    title: "Airport Taxi Service",
    desc: "24/7 airport taxi service in Varanasi with timely pickup and drop to Lal Bahadur Shastri International Airport. Safe, comfortable and reliable transfers.",
  },
  {
    icon: "🚖",
    title: "Local Cab Service",
    desc: "Affordable local taxi service in Varanasi for city rides, temple visits, shopping, hotels, railway stations and daily travel with experienced drivers.",
  },
  {
    icon: "🛣️",
    title: "Outstation Cab Service",
    desc: "Book one-way and round-trip outstation cabs from Varanasi to Prayagraj, Ayodhya, Lucknow, Bodh Gaya, Gorakhpur and nearby destinations.",
  },
  {
    icon: "🏛️",
    title: "Varanasi Sightseeing Tour",
    desc: "Visit Kashi Vishwanath Temple, Assi Ghat, Ramnagar Fort and other popular attractions with our sightseeing taxi packages.",
  },
  {
    icon: "🛕",
    title: "Religious Tour Packages",
    desc: "Comfortable pilgrimage taxi services for Kashi, Ayodhya, Vindhyachal, Prayagraj, Chitrakoot and Bodh Gaya with customized travel plans.",
  },
  {
    icon: "🚉",
    title: "Railway Station Pickup",
    desc: "Fast taxi pickup and drop services from Varanasi Junction, Banaras Railway Station and Pt. Deen Dayal Upadhyay Junction at affordable prices.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family & Group Travel",
    desc: "Spacious SUVs, Innova Crysta, Ertiga and premium vehicles for family vacations, group tours and comfortable long-distance journeys.",
  },
  {
    icon: "💼",
    title: "Corporate Cab Service",
    desc: "Executive cab services for business meetings, airport transfers, corporate travel, conferences and employee transportation in Varanasi.",
  },
  {
    icon: "🚐",
    title: "Tempo Traveller Rental",
    desc: "Luxury Tempo Traveller rental in Varanasi for weddings, group tours, family vacations, school trips and religious pilgrimages.",
  },
  {
    icon: "💍",
    title: "Wedding Car Rental",
    desc: "Premium wedding car rentals with luxury sedans and SUVs for weddings, receptions, engagements and special occasions in Varanasi.",
  },
  {
    icon: "🌙",
    title: "24×7 Taxi Service",
    desc: "Round-the-clock taxi booking in Varanasi for emergency travel, airport transfers, railway pickups and late-night rides across the city.",
  },
  {
    icon: "🚗",
    title: "Car Rental with Driver",
    desc: "Hire clean, well-maintained cars with professional drivers for hourly, daily and customized trips across Varanasi and North India.",
  },
];

export default function Services() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".service-card",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="services" className="py-16  bg-gray-100 px-[5vw]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}

        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <p className="uppercase tracking-[2px] text-[#0466C8] font-bold text-sm md:text-lg mb-3">
            Our Cab Services in Varanasi
          </p>

          <h2 className="font-poppins font-extrabold text-[#0F172A] leading-tight text-[clamp(2rem,4vw,3rem)]">
            Best Taxi & Car Rental Services
            <br />
            in Varanasi
          </h2>

          <p className="mt-5 text-[#64748B] text-base md:text-lg leading-8 max-w-3xl mx-auto">
            Book trusted taxi services in Varanasi for airport transfers,
            sightseeing, railway station pickup, outstation travel, corporate
            trips, weddings and religious tours. Clean vehicles, professional
            drivers, transparent pricing and 24×7 customer support.
          </p>
        </div>

        {/* Grid */}

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  const cardRef = useRef(null);

  const enter = () => {
    gsap.to(cardRef.current, {
      y: -8,
      duration: 0.25,
      borderColor: "#0466C8",
      boxShadow: "0 25px 45px rgba(4,102,200,.12)",
      ease: "power2.out",
    });
  };

  const leave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.25,
      borderColor: "#E2E8F0",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      ease: "power2.out",
    });
  };

  return (
    <CardContainer
      className="service-card w-full hover:shadow-[0_0_60px_rgba(4,102,200,0.45)] rounded-2xl active:shadow-[0_0_60px_rgba(249,115,22,0.45)] cursor-pointer hover:backdrop-blur-3xl transition-all "
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <Link href="/rent" aria-label={title}>
        <CardBody
          ref={cardRef}
          className="bg-white border border-slate-200 rounded-2xl p-6 h-full w-full transition-all"
        >
          <CardItem
            translateZ={60}
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-orange-50 flex items-center justify-center text-4xl mb-5"
          >
            {icon}
          </CardItem>

          <CardItem
            translateZ={40}
            as="h3"
            className="font-bold text-xl text-slate-900 mb-3"
          >
            {title}
          </CardItem>

          <CardItem
            translateZ={30}
            as="p"
            className="text-slate-500 leading-7 text-[15px]"
          >
            {desc}
          </CardItem>

          <CardItem
            translateZ={20}
            as="span"
            className="inline-flex items-center mt-6 text-[#0466C8] font-bold"
          >
            Book This Service →
          </CardItem>
        </CardBody>
      </Link>
    </CardContainer>
  );
}