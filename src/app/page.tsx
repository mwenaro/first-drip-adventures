"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Adventure Awaits
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Explore breathtaking destinations and experience unforgettable
              journeys with First Drip Adventures.
            </p>
            <Link
              href="/tours"
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
            >
              Discover Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose First Drip Adventures?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon="🌍"
              title="Unique Destinations"
              description="We curate exclusive and off-the-beaten-path experiences for every traveler."
            />
            <FeatureCard
              icon="🛡️"
              title="Safety Guaranteed"
              description="Your safety is our priority with well-planned trips and professional guides."
            />
            <FeatureCard
              icon="⭐"
              title="5-Star Reviews"
              description="Trusted by hundreds of travelers for our exceptional service and experiences."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Testimonial
              name="Jane Doe"
              review="The tour was incredible! The team was friendly, and the destinations were stunning."
              image="/testimonials/jane.jpg"
            />
            <Testimonial
              name="John Smith"
              review="An unforgettable adventure! Everything was planned perfectly."
              image="/testimonials/john.jpg"
            />
            <Testimonial
              name="Alice Brown"
              review="Highly recommend! A fantastic experience with amazing customer service."
              image="/testimonials/alice.jpg"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Let us help you create memories that last a lifetime. Book your trip
            today!
          </p>
          <Link
            href="/book"
            className="bg-white text-orange-500 px-6 py-3 rounded-md shadow-md hover:bg-orange-100 transition"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white shadow-md rounded-md p-6">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

// Testimonial Component
const Testimonial = ({
  name,
  review,
  image,
}: {
  name: string;
  review: string;
  image: string;
}) => (
  <div className="bg-white shadow-md rounded-md p-6 text-center">
    <Image
      width={100}
      height={100}
      src={image}
      alt={name}
      className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-gray-300"
    />
    <p className="italic mb-4">&quot;{review}&quot;</p>
    <h4 className="font-bold">{name}</h4>
  </div>
);
