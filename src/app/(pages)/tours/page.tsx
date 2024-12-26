import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    id: 1,
    name: "Beach Safari Adventure",
    image: "/images/beach-safari.jpg",
    description: "Experience the serene beauty of the coastal beaches.",
    price: "$150",
  },
  {
    id: 2,
    name: "Mountain Hiking Expedition",
    image: "/images/mountain-hiking.jpg",
    description: "Explore the breathtaking mountain trails.",
    price: "$200",
  },
  {
    id: 3,
    name: "Wildlife Safari",
    image: "/images/wildlife-safari.jpg",
    description: "Get up close with nature in this thrilling safari.",
    price: "$300",
  },
  {
    id: 4,
    name: "Cultural Heritage Tour",
    image: "/images/cultural-tour.jpg",
    description: "Discover the rich history and culture of the region.",
    price: "$180",
  },
];

const Tours = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Our Tours</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={tour.image}
                alt={tour.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{tour.name}</h2>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">{tour.price}</span>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
