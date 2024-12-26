"use client"
import { motion } from "framer-motion";
import Image from "next/image";

type GalleryImageProps = {
  src: string;
  alt: string;
  onClick?: () => void;
};

export const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-lg font-semibold">{alt}</p>
      </div>
    </motion.div>
  );
};


