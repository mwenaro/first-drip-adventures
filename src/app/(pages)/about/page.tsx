"use client";

import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
          <p className="text-gray-700 mt-4">
            Discover the story behind First Drip Adventures, our values, and our
            mission to create unforgettable experiences.
          </p>
        </div>

        {/* Mission, Vision, and Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-blue-600">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To provide unique and memorable adventures that inspire people to
              explore the beauty of Kenya and beyond while prioritizing
              sustainability and community impact.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-blue-600">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              To become a leading adventure company recognized for delivering
              innovative travel experiences and fostering a deep connection with
              nature and culture.
            </p>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-blue-600">Our Values</h2>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              <li>Integrity and transparency</li>
              <li>Commitment to sustainability</li>
              <li>Celebration of diversity and culture</li>
              <li>Customer-centric experiences</li>
            </ul>
          </div>
        </div>

        {/* History Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 text-center">
            Our Journey
          </h2>
          <p className="text-gray-700 mt-4 text-justify">
            First Drip Adventures began as a dream to share the hidden gems of
            Kenya with the world. Starting with just a small team of passionate
            adventurers, we’ve grown into a trusted name in the travel industry,
            offering curated experiences that showcase Kenya’s breathtaking
            landscapes, rich culture, and vibrant communities.
          </p>
          <p className="text-gray-700 mt-4 text-justify">
            Over the years, we’ve expanded our portfolio to include activities
            like safaris, beach getaways, cultural tours, and eco-friendly
            travel options. Despite our growth, we remain deeply committed to
            our roots and the communities that make these adventures possible.
          </p>
        </div>

        {/* Meet the Team Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 text-center">
            Meet the Team
          </h2>
          <p className="text-gray-700 mt-4 text-center">
            Behind every adventure is a passionate team dedicated to making your
            experience exceptional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="text-lg font-semibold mt-4">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-500 text-sm mt-2">
                John is a visionary leader with a passion for travel and
                innovation.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="text-lg font-semibold mt-4">Jane Smith</h3>
              <p className="text-gray-600">Operations Manager</p>
              <p className="text-gray-500 text-sm mt-2">
                Jane ensures every adventure runs smoothly and efficiently.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="text-lg font-semibold mt-4">Michael Brown</h3>
              <p className="text-gray-600">Lead Guide</p>
              <p className="text-gray-500 text-sm mt-2">
                Michael’s deep knowledge and enthusiasm bring each adventure to
                life.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-blue-600">Join Us</h2>
          <p className="text-gray-700 mt-4">
            Whether you’re looking for a thrilling adventure or a relaxing
            escape, First Drip Adventures is here to make it happen.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
