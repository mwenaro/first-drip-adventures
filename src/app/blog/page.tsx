import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Destinations in East Africa",
      description: "Discover the must-visit places for an unforgettable adventure in East Africa.",
      image: "/images/blog1.jpg",
      date: "Dec 20, 2024",
      author: "John Doe",
    },
    {
      id: 2,
      title: "A Guide to Kenyan Safaris",
      description: "Everything you need to know before embarking on a Kenyan safari experience.",
      image: "/images/blog2.jpg",
      date: "Nov 15, 2024",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Wildlife Photography Tips",
      description: "Capture stunning wildlife moments with these expert photography tips.",
      image: "/images/blog3.jpg",
      date: "Oct 10, 2024",
      author: "Samuel Green",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
        <p className="text-center text-gray-600 mb-12">
          Stay updated with the latest news, travel tips, and inspiration for your next adventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
