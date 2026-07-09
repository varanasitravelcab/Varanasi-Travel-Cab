import Link from "next/link";

// HomeSeoContent.jsx
// Long-form SEO content block for the homepage. Same content and links as
// before — only the colors are updated to match the rest of the site
// (black background, #002855 navy, #0466c8 blue accent, white text).

export default function HomeSeoContent() {
  return (
    <div className="flex items-center justify-center">
      <section className="w-full lg:rounded-[3rem] flex items-center justify-center flex-col bg-gray-100 px-4 md:px-10 py-16">
        <h2 className="text-[0.78rem] md:text-2xl font-bold tracking-[1.5px] uppercase text-[#0466c8] mb-5">
          Best Cab Service in Varanasi
        </h2>

        <div className="max-w-5xl mx-auto text-black leading-7">
          <h2
            className="text-3xl font-poppins font-extrabold text-center text-black leading-[1.2] mb-[14px]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
          >
           Varanasi Travel Cab - Trusted Taxi Service & Car Rental in Varanasi
          </h2>

          <p className="mb-4">
            Welcome to Varanasi Travel Cab, your trusted destination for{" "}
            <Link
              href="/car-rental-in-varanasi"
              className="text-[#0466c8] underline hover:text-green-600 transition-colors"
            >
              car rental in Varanasi
            </Link>
            ,{" "}
            <Link
              href="/taxi-service-in-varanasi"
              className="text-[#0466c8] underline hover:text-green-600 transition-colors"
            >
              taxi service in Varanasi
            </Link>
            ,{" "}
            <Link
              href="/airport-taxi-varanasi"
              className="text-[#0466c8] underline hover:text-green-600 transition-colors"
            >
              airport taxi service
            </Link>
            
            . We provide safe, affordable, and reliable transportation solutions
            for tourists, pilgrims, families, and corporate travelers across
            Varanasi and nearby destinations.
          </p>

          <p className="mb-4">
            Whether you need a local taxi for city travel, a Varanasi airport
            cab, railway station transfer, full-day sightseeing taxi, or an
            outstation cab service from Varanasi, we ensure a smooth and
            comfortable travel experience with professional drivers and
            well-maintained vehicles.
          </p>

          <p className="mb-4">
            As one of the leading taxi service providers in Varanasi, our focus
            is on punctuality, customer satisfaction, transparent pricing, and
            safety. We are available 24/7 to make your journey convenient and
            stress-free.
          </p>

          <h3 className="text-2xl font-bold text-[#0466c8] mt-8 mb-3">
            Complete Taxi & Car Rental Solutions in Varanasi
          </h3>

          <p className="mb-4">
            We offer comprehensive transportation services including local cab
            booking, airport transfers, railway station pickups, outstation
            taxi services, one-way cab services, round trips, corporate travel,
            and customized tour packages in Varanasi.
          </p>

          <p className="mb-4">
            Our cab services cover all major attractions and destinations such
            as Kashi Vishwanath Temple, Dashashwamedh Ghat, Assi Ghat, Sarnath,
            Banaras Hindu University (BHU), Ramnagar Fort, and Lal Bahadur
            Shastri International Airport. We also provide outstation taxi
            services to Ayodhya, Prayagraj, Bodh Gaya, Vindhyachal, Lucknow,
            and other nearby cities.
          </p>

          <h3 className="text-2xl font-semibold text-[#0466c8] mt-8 mb-3">
            Comfortable Vehicles & Professional Drivers
          </h3>

          <p className="mb-4">
            Our fleet includes hatchbacks, sedans, SUVs, Innova, Ertiga, and
            Tempo Travellers to meet every travel requirement. All vehicles are
            regularly serviced, clean, and equipped to provide a safe and
            comfortable ride.
          </p>

          <p className="mb-4">
            Our experienced drivers possess excellent knowledge of local routes,
            tourist destinations, and highways, ensuring timely pickups and a
            hassle-free travel experience.
          </p>

          <h3 className="text-2xl font-semibold text-[#0466c8] mt-8 mb-3">
            Why Choose Cab Services Varanasi?
          </h3>

          <ul className="list-disc pl-6 mb-6 marker:text-[#0466c8]">
            <li>24/7 taxi service in Varanasi</li>
            <li>Affordable and transparent pricing</li>
            <li>No hidden charges</li>
            <li>Professional and verified drivers</li>
            <li>Clean and well-maintained vehicles</li>
            <li>Local, airport, and outstation taxi services</li>
            <li>Easy booking through phone and WhatsApp</li>
            <li>Safe, reliable, and comfortable journeys</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#0466c8] mt-8 mb-3">
            Book Your Cab in Varanasi Today
          </h3>

          <p>
            Looking for the best cab service in Varanasi? Cab Services Varanasi
            is your trusted travel partner for local taxi booking, airport
            transfers, sightseeing tours, and outstation travel. Contact us
            today to book your ride and experience safe, comfortable, and
            affordable taxi services in Varanasi.
          </p>
        </div>
      </section>
    </div>
  );
}