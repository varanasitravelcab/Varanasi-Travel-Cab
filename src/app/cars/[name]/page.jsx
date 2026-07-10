"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { X, CheckCircle } from "lucide-react";
import Link from "next/link";

import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import Side from "../../../../components/Side";
import PolicyAccordion from "../../../../components/PolicyAccordion";

import { carsInfo } from "../../../utils/CarInfo";

export default function CarDetails() {
  const params = useParams();

  const [open, setOpen] = useState(false);

  const car = useMemo(() => {
    const name = decodeURIComponent(params.name);

    return carsInfo.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
  }, [params.name]);

  if (!car) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Car Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />

      <section  style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 50%, rgba(249,115,22,0.25) 100%), url('https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80') center/cover no-repeat",
      }} className=" w-full mx-auto px-6 py-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="bg-[#FFF8F6]/2 backdrop-blur-3xl rounded-3xl p-8 order-2 lg:order-1">

            <h1 className="text-3xl text-white font-bold mb-2">
              {car.name}
            </h1>

            <p className="text-white mb-6">
              {car.location}
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">
              Rates
            </h2>

            <div className="space-y-4">
              {car.rates.map((rate, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <span className="text-white">
                    {rate.label}
                  </span>

                  <div className="flex items-center gap-6">
                    <span className="font-semibold text-white">
                      {rate.price}
                    </span>

                    <X
                      className="text-white"
                      size={18}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 items-center justify-center">

              <Link
                href={`/contact?car=${encodeURIComponent(car.name)}`}
              >
                <button
                  onMouseEnter={() => window.cursor?.enter()}
                  onMouseLeave={() => window.cursor?.leave()}
                  className="bg-[#F97316] cursor-pointer active:bg-[#FF3600]/60 hover:bg-[#FF3600]/60 transition-all text-white px-8 py-4 rounded-full font-semibold"
                >
                  Book Now
                </button>
              </Link>

              <a
                href="tel:+918467007704"
                onMouseEnter={() => window.cursor?.enter()}
                onMouseLeave={() => window.cursor?.leave()}
                className="flex cursor-pointer items-center justify-center w-12 h-12 hover:bg-[#FF3600]/60 transition-all rounded-full bg-[#F97316] text-white"
              >
                <i className="fa-solid fa-phone"></i>
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="relative rounded-3xl overflow-hidden order-1 lg:order-2">

            <Image
              src={car.image || "/no.jpg"}
              alt={car.name}
              width={800}
              height={500}
              priority
              className="object-contain w-full h-full"
            />

          </div>

        </div>
      </section>

      <section className="w-full py-20 bg-[#F8FAFC] flex items-center justify-center">

        <div className="max-w-5xl px-6">

          <p className="text-[#F97316] font-semibold mb-4 flex items-center gap-2">
           
            General Information
          </p>

          <h2 className="text-4xl font-bold text-black mb-6">
            Know About {car.name}
          </h2>

          <p className="text-gray-600 max-w-4xl mb-10 leading-relaxed">
            Rent the <strong>{car.name}</strong> in Varanasi for airport
            transfers, local sightseeing, railway station pickup, corporate
            travel and outstation trips. All our vehicles are professionally
            maintained, sanitized and driven by experienced chauffeurs to
            ensure a safe, comfortable and hassle-free journey.
          </p>

          <ul className="space-y-4">

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#F97316]" />
              <span className="font-semibold text-black">
                Professional Driver Included
              </span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#F97316]" />
              <span className="font-semibold text-black">
                Clean & Sanitized Vehicle
              </span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#F97316]" />
              <span className="font-semibold text-black">
                Airport Pickup & Drop
              </span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#F97316]" />
              <span className="font-semibold text-black">
                Local & Outstation Travel
              </span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#F97316]" />
              <span className="font-semibold text-black">
                24x7 Booking Support
              </span>
            </li>

          </ul>

        </div>

      </section>

      <PolicyAccordion />

      <Footer />
    </>
  );
}