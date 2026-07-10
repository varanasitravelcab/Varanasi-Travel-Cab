import React from "react";
import {
  CheckCircle2,
  MapPin,
  Clock,
  CarFront,
  ShieldCheck,
  Briefcase,
  Plane,
  Compass,
} from "lucide-react";

export default function CarRentalSeoContent() {
  const services = [
    {
      icon: <Clock size={20} />,
      text: "24/7 Car Rental Service Across Varanasi",
    },
    {
      icon: <Plane size={20} />,
      text: "Airport Pickup & Drop from Lal Bahadur Shastri Airport",
    },
    {
      icon: <Compass size={20} />,
      text: "Local Sightseeing for Kashi Vishwanath, Sarnath & Ghats",
    },
    {
      icon: <MapPin size={20} />,
      text: "Outstation Taxi Services to Ayodhya, Prayagraj, Lucknow & More",
    },
    {
      icon: <CarFront size={20} />,
      text: "Hourly, Full-Day & Multi-Day Car Rental Packages",
    },
    {
      icon: <Briefcase size={20} />,
      text: "Corporate Travel & Business Cab Services",
    },
    {
      icon: <ShieldCheck size={20} />,
      text: "Sedans, SUVs, Innova Crysta, Ertiga & Tempo Travellers",
    },
  ];

  const reasons = [
    "Affordable car rental with transparent pricing",
    "Professional and experienced chauffeurs",
    "Clean, sanitized and well-maintained vehicles",
    "24/7 booking assistance and customer support",
    "Reliable local, airport and outstation taxi services",
    "Easy booking through phone and WhatsApp",
    "No hidden charges with safe and comfortable rides",
  ];

  return (
    <div className="bg-[#f8fafc] py-24 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">

            <div className="inline-flex items-center gap-2 bg-[#0466c8]/10 text-[#0466c8] px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 bg-[#0466c8] rounded-full animate-pulse" />
              Car Rental Services in Varanasi
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002855] leading-tight">
              Best Car Rental in <br />
              <span className="text-[#0466c8]">Varanasi</span>
            </h2>

            <p className="text-[#475569] text-[1.05rem] leading-[1.9]">
              Cab Services Varanasi offers reliable and affordable
              chauffeur-driven car rental services for local sightseeing,
              airport transfers, railway station pickup and drop, corporate
              travel, and outstation journeys. Every vehicle is clean,
              comfortable, and driven by experienced professionals to ensure a
              safe and hassle-free travel experience.
            </p>

            <p className="text-[#475569] text-[1.05rem] leading-[1.9]">
              Whether you're visiting Varanasi for pilgrimage, tourism,
              business, or family vacations, we provide flexible rental
              solutions tailored to your travel plans. Explore Kashi
              Vishwanath Temple, Assi Ghat, Sarnath, Banaras Hindu University
              (BHU), and every major attraction comfortably with our premium
              taxi services.
            </p>

            <div className="pt-6 border-t border-gray-200">
              <p className="italic text-gray-500 text-[0.95rem] leading-relaxed">
                "From short city rides to long-distance journeys, we ensure
                comfortable travel with transparent pricing and dependable
                service throughout Varanasi and beyond."
              </p>
            </div>

          </div>

          {/* Highlight Card */}
          <div className="relative group">

            <div className="absolute -inset-1 bg-gradient-to-r from-[#0466c8] to-[#002855] rounded-[24px] blur opacity-25 group-hover:opacity-40 transition duration-700"></div>

            <div className="relative bg-white rounded-[24px] p-8 md:p-12 shadow-xl ring-1 ring-gray-900/5">

              <div className="w-14 h-14 rounded-xl bg-[#002855] flex items-center justify-center mb-6 shadow-lg shadow-[#002855]/30">
                <Compass className="text-white" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-[#002855] mb-5">
                Affordable Car Rental Options
              </h3>

              <p className="text-[#475569] text-[1.05rem] leading-[1.9]">
                Choose from hatchbacks, sedans, SUVs, Innova Crysta, Ertiga,
                and Tempo Travellers for every travel requirement. Whether you
                need a car for a few hours, full-day sightseeing, airport
                transfers, or multi-day outstation travel, we offer flexible
                packages designed to match your budget and schedule.
              </p>

            </div>

          </div>

        </div>

        {/* Services & Reasons Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Services Card */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">

            <h3 className="text-2xl font-bold text-[#002855] mb-8 flex items-center gap-3">
              <CarFront className="text-[#0466c8]" size={28} />
              Our Car Rental Services
            </h3>

            <div className="space-y-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F0F7FF] transition-colors duration-300 border border-transparent hover:border-[#0466c8]/10"
                >
                  <div className="mt-0.5 text-[#0466c8]">
                    {service.icon}
                  </div>
                  <span className="text-[#1E293B] font-medium text-[0.95rem]">
                    {service.text}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Reasons Card */}
          <div className="bg-[#002855] rounded-[24px] p-8 md:p-10 shadow-xl text-white relative overflow-hidden group">

            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#0466c8] opacity-20 blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>

            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10 text-white">
              <ShieldCheck className="text-[#0466c8]" size={28} />
              Why Choose Cab Services Varanasi?
            </h3>

            <div className="space-y-5 relative z-10">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2
                    className="text-[#0466c8] shrink-0 mt-0.5"
                    size={22}
                  />
                  <span className="text-gray-100 leading-relaxed text-[0.95rem]">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0466c8] to-[#002855] rounded-[28px] p-10 md:p-14 text-center text-white shadow-xl">

          <h3 className="text-3xl md:text-4xl font-bold mb-5">
            Book Your Car Rental in Varanasi Today
          </h3>

          <p className="max-w-4xl mx-auto text-lg leading-8 text-blue-50">
            Looking for the best car rental in Varanasi? Cab Services Varanasi
            is your trusted travel partner for local taxi booking, airport
            transfers, railway station pickup, outstation cab services, and
            customized travel packages. We are committed to providing safe,
            affordable, and reliable transportation with professional drivers
            and well-maintained vehicles for every journey.
          </p>

        </div>

      </div>
    </div>
  );
}