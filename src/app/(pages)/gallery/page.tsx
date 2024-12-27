import { GalleryImage } from "@/components/pagez/gallery/GalleryImage";
import { SITE_IMAGES } from "@/constants/images";


const Gallery = () => {

 const images = SITE_IMAGES;
  

  //  [
  //     { src: "/images/lion.jpg", alt: "Majestic Lion" },
  //     { src: "/images/elephant.jpg", alt: "Graceful Elephant" },
  //     { src: "/images/giraffe.jpg", alt: "Towering Giraffe" },
  //     { src: "/images/zebra.jpg", alt: "Striped Zebra" },
  //   ];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <GalleryImage key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default Gallery;
