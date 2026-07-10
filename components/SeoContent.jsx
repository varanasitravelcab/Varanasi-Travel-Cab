import React from 'react';
import { 
  Car, 
  Map, 
  ShieldCheck, 
  CheckCircle2, 
  Plane,
  Building2,
  Users,
  Compass,
  Train,
  MapPin,
  Clock
} from 'lucide-react';

export default function SeoContent() {
  const fleetOptions = [
    "Swift Dzire",
    "Maruti Ertiga",
    "Toyota Innova",
    "Toyota Innova Crysta",
    "Premium SUVs",
    "Tempo Traveller (9, 12, 17 & 26 Seater)"
  ];

  const rentalOptions = [
    "Sedan Car Rental in Varanasi",
    "SUV Rental in Varanasi",
    "Innova Crysta Rental",
    "Ertiga Taxi Service",
    "Tempo Traveller Rental",
    "Luxury Car Rental",
    "Family Car Rental",
    "Corporate Car Hire"
  ];

  const localDestinations = [
    "Kashi Vishwanath Temple",
    "Dashashwamedh Ghat",
    "Assi Ghat",
    "Sarnath",
    "Banaras Hindu University (BHU)",
    "Sankat Mochan Temple",
    "Durga Temple",
    "Ramnagar Fort",
    "Bharat Mata Temple",
    "Tulsi Manas Mandir"
  ];

  const airportBenefits = [
    "24/7 Airport Pickup & Drop",
    "Flight Tracking",
    "Professional Chauffeurs",
    "Fixed & Transparent Pricing",
    "No Hidden Charges",
    "Comfortable Air-Conditioned Vehicles"
  ];

  const stations = [
    "Varanasi Junction (Cantt)",
    "Banaras Railway Station",
    "Kashi Railway Station",
    "Manduadih Railway Station"
  ];

  const outstationRoutes = [
    "Varanasi to Ayodhya Taxi",
    "Varanasi to Prayagraj Cab",
    "Varanasi to Bodh Gaya Taxi",
    "Varanasi to Vindhyachal Cab",
    "Varanasi to Lucknow Taxi",
    "Varanasi to Gorakhpur Cab",
    "Varanasi to Chitrakoot Taxi",
    "Varanasi to Gaya Cab",
    "Varanasi to Patna Taxi"
  ];

  const advantages = [
    "Affordable Car Rental in Varanasi",
    "Lowest Taxi Fare Guarantee",
    "Well-Maintained & Sanitized Vehicles",
    "Experienced & Verified Drivers",
    "24×7 Customer Support",
    "Easy Online & WhatsApp Booking",
    "No Hidden Charges",
    "Instant Booking Confirmation",
    "Local, Airport & Outstation Services",
    "Flexible Rental Packages",
    "Safe & Comfortable Journey"
  ];

  return (
    <div className="bg-[#f8fafc] py-24 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Intro Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#0466c8]/10 text-[#0466c8] px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 bg-[#0466c8] rounded-full animate-pulse" />
            Car Rental & Taxi Service
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#002855] leading-tight font-poppins">
            Rent a Car in Varanasi <br/>
            <span className="text-[#0466c8] text-2xl md:text-4xl mt-2 block">Affordable Car Rental – Varanasi Travel Cab</span>
          </h2>
          <p className="text-[#475569] text-[1.05rem] leading-[1.85]">
            Looking for the <strong>best car rental service in Varanasi</strong>? <strong>Varanasi Travel Cab</strong> offers reliable, affordable, and comfortable <strong>car rental and taxi services in Varanasi</strong> for tourists, pilgrims, families, corporate travelers, and local residents. Whether you need a taxi for <strong>local sightseeing</strong>, <strong>airport transfers</strong>, <strong>railway station pickups</strong>, or <strong>outstation travel</strong>, we provide clean, well-maintained vehicles with experienced, professional drivers to ensure a safe and hassle-free journey.
          </p>
          <p className="text-[#475569] text-[1.05rem] leading-[1.85]">
            With flexible booking options, transparent pricing, and 24/7 customer support, Varanasi Travel Cab is your trusted travel partner for every trip in and around Varanasi.
          </p>
        </div>

        {/* Fleet & Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[#002855] mb-4 flex items-center gap-3 font-poppins">
              <Car className="text-[#0466c8]" size={28} />
              Best Car Rental Service in Varanasi
            </h3>
            <p className="text-[#475569] text-[0.95rem] leading-[1.7] mb-6">
              At <strong>Varanasi Travel Cab</strong>, we understand that every traveler has different transportation needs. That's why we offer a wide range of vehicles suitable for solo travelers, couples, families, business professionals, and large groups.
            </p>
            <h4 className="font-semibold text-[#0F172A] mb-4">Our fleet includes:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fleetOptions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#475569] text-sm">
                  <CheckCircle2 size={16} className="text-[#0466c8]" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[#475569] text-sm mt-6 italic bg-[#F0F7FF] p-3 rounded-lg border border-[#0466c8]/10">
              All vehicles are regularly serviced, GPS-enabled, sanitized, and maintained to provide maximum comfort, safety, and reliability.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[#002855] mb-4 flex items-center gap-3 font-poppins">
              <Compass className="text-[#0466c8]" size={28} />
              Wide Range of Rental Cars
            </h3>
            <p className="text-[#475569] text-[0.95rem] leading-[1.7] mb-6">
              Whether you're planning a short city ride or a long-distance road trip, Varanasi Travel Cab has the perfect vehicle for your journey. Choose from hourly, full-day, multi-day, or customized rental packages according to your travel requirements and budget.
            </p>
            <h4 className="font-semibold text-[#0F172A] mb-4">Our car rental options include:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rentalOptions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#475569] text-sm">
                  <CheckCircle2 size={16} className="text-[#0466c8]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#002855] font-poppins">Our Premium Services</h2>
            <div className="w-24 h-1 bg-[#0466c8] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Local Taxi */}
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0466c8]/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-[#0466c8]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#002855] mb-3">Local Taxi Service</h3>
              <p className="text-[#475569] text-sm mb-4">Explore the spiritual and cultural beauty of Varanasi with our reliable local taxi service. Available for hourly and full-day bookings.</p>
              <ul className="space-y-2">
                {localDestinations.slice(0, 5).map((dest, idx) => (
                  <li key={idx} className="text-[#475569] text-[0.85rem] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0466c8] rounded-full"></div>
                    {dest}
                  </li>
                ))}
                <li className="text-[#0466c8] text-[0.85rem] font-medium italic mt-2">+ Many more destinations...</li>
              </ul>
            </div>

            {/* Airport Taxi */}
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0466c8]/10 rounded-xl flex items-center justify-center mb-6">
                <Plane className="text-[#0466c8]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#002855] mb-3">Airport Transfers</h3>
              <p className="text-[#475569] text-sm mb-4">Punctual airport taxi services with convenient pickup and drop-off facilities to and from Lal Bahadur Shastri International Airport (VNS).</p>
              <ul className="space-y-2">
                {airportBenefits.map((benefit, idx) => (
                  <li key={idx} className="text-[#475569] text-[0.85rem] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0466c8] rounded-full"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Railway Station */}
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0466c8]/10 rounded-xl flex items-center justify-center mb-6">
                <Train className="text-[#0466c8]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#002855] mb-3">Railway Station</h3>
              <p className="text-[#475569] text-sm mb-4">Arriving by train? We offer reliable taxi services to and from major stations. Our drivers monitor schedules to ensure timely pickups.</p>
              <ul className="space-y-2">
                {stations.map((station, idx) => (
                  <li key={idx} className="text-[#475569] text-[0.85rem] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0466c8] rounded-full"></div>
                    {station}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outstation */}
            <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#0466c8]/10 rounded-xl flex items-center justify-center mb-6">
                <Map className="text-[#0466c8]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#002855] mb-3">Outstation Cabs</h3>
              <p className="text-[#475569] text-sm mb-4">Planning a road trip? Affordable outstation taxi services to major religious, historical, and tourist destinations.</p>
              <ul className="space-y-2">
                {outstationRoutes.slice(0, 6).map((route, idx) => (
                  <li key={idx} className="text-[#475569] text-[0.85rem] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0466c8] rounded-full"></div>
                    {route}
                  </li>
                ))}
                <li className="text-[#0466c8] text-[0.85rem] font-medium italic mt-2">One-way & round-trips available</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Why Choose Us & Footer */}
        <div className="bg-[#002855] rounded-[32px] p-8 md:p-14 shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 rounded-full bg-[#0466c8] opacity-30 blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
            <div className="lg:col-span-3">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 font-poppins text-white">
                <ShieldCheck className="text-[#0466c8]" size={36} />
                Why Choose Varanasi Travel Cab?
              </h3>
              <p className="text-blue-100 mb-8 text-[1.05rem] leading-[1.8] max-w-2xl">
                Thousands of customers trust <strong>Varanasi Travel Cab</strong> because we focus on safety, comfort, affordability, and customer satisfaction. Our commitment to quality service has made us one of the preferred taxi providers in Varanasi.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <CheckCircle2 className="text-[#0466c8] shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-100 font-light text-[0.9rem]">{adv}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 flex flex-col justify-center bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4 font-poppins text-white">Book Your Car Rental Today</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Whether you need a taxi for a temple visit, business meeting, airport transfer, family vacation, or outstation journey, Varanasi Travel Cab is ready to serve you with the best car rental services in Varanasi.
              </p>
              <div className="p-4 bg-[#0466c8]/20 border border-[#0466c8]/50 rounded-xl text-center">
                <p className="font-semibold text-white">
                  Varanasi Travel Cab - Your Trusted Car Rental & Taxi Service in Varanasi.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}