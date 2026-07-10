import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  CarFront, 
  ShieldCheck, 
  Briefcase, 
  Plane,
  Compass
} from 'lucide-react';

export default function AboutSeoContent() {
  const services = [
    { icon: <Clock size={20} />, text: "24/7 Premium Taxi Service in Varanasi" },
    { icon: <Plane size={20} />, text: "Real-Time Tracked Airport & Railway Transfers" },
    { icon: <Compass size={20} />, text: "Curated Local Kashi & Temple Sightseeing Tours" },
    { icon: <MapPin size={20} />, text: "Outstation Journeys & Multi-City Itineraries" },
    { icon: <CarFront size={20} />, text: "Flexible One-Way and Round-Trip Bookings" },
    { icon: <Briefcase size={20} />, text: "Corporate Mobility & VIP Travel Solutions" },
    { icon: <ShieldCheck size={20} />, text: "Diverse Fleet: Luxury Sedans, SUVs, and Tempo Travellers" },
  ];

  const reasons = [
    "Rigorously vetted and highly trained local chauffeurs",
    "Immaculately sanitized and premium-maintained vehicles",
    "100% transparent billing with zero surprise or hidden charges",
    "Dedicated 24/7 booking support and on-trip assistance",
    "Unwavering commitment to punctuality and passenger safety"
  ];

  return (
    <div className="bg-[#f8fafc] py-24 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#0466c8]/10 text-[#0466c8] px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 bg-[#0466c8] rounded-full animate-pulse" />
              Discover Varanasi Travel Cab
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002855] leading-tight font-poppins">
              A Premier Chauffeur-Driven <br/><span className="text-[#0466c8]">Mobility Service</span>
            </h2>
            <p className="text-[#475569] text-[1.05rem] leading-[1.85]">
              Based in the spiritual heart of India, we are dedicated to providing seamless, premium, and reliable transportation solutions tailored for pilgrims, corporate executives, and leisure travelers. 
            </p>
            <p className="text-[#475569] text-[1.05rem] leading-[1.85]">
              Whether you require a swift airport transfer, a local temple tour, or a comfortable outstation excursion across North India, our fleet is equipped to ensure your journey is nothing short of exceptional.
            </p>
            <div className="pt-6 border-t border-gray-200/60">
              <p className="text-gray-500 italic leading-relaxed text-[0.95rem]">
                "With an intimate understanding of Varanasi's unique geography—from its ancient narrow lanes to bustling ghats—our experienced chauffeurs guarantee punctual arrivals and smooth navigation."
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group lg:ml-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0466c8] to-[#002855] rounded-[24px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-[24px] p-8 md:p-12 shadow-xl ring-1 ring-gray-900/5">
              <div className="w-14 h-14 bg-[#002855] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#002855]/30">
                <Compass className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 font-poppins">Our Mission</h3>
              <p className="text-[#475569] text-[1.05rem] leading-[1.85]">
                Our mission is to redefine mobility in Kashi by setting the gold standard for safety, comfort, and professionalism. We are driven by a commitment to make premium travel accessible, transparent, and effortlessly reliable for every passenger who books with Varanasi Travel Cab.
              </p>
            </div>
          </div>
        </div>

        {/* Services & Reasons Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Services */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[#002855] mb-8 flex items-center gap-3 font-poppins">
              <CarFront className="text-[#0466c8]" size={28} />
              Premium Services We Offer
            </h3>
            <div className="space-y-4">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F0F7FF] transition-colors duration-300 border border-transparent hover:border-[#0466c8]/10 cursor-default">
                  <div className="mt-0.5 text-[#0466c8]">
                    {service.icon}
                  </div>
                  <span className="text-[#1E293B] font-medium text-[0.95rem]">{service.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reasons */}
          <div className="bg-[#002855] rounded-[24px] p-8 md:p-10 shadow-xl text-white relative overflow-hidden group">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#0466c8] opacity-20 blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
            
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10 font-poppins text-white">
              <ShieldCheck className="text-[#0466c8]" size={28} />
              Why Travelers Choose Us
            </h3>
            <div className="space-y-6 relative z-10">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="text-[#0466c8] shrink-0 mt-0.5" size={22} />
                  <span className="text-gray-100 leading-relaxed font-light text-[0.95rem]">{reason}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}