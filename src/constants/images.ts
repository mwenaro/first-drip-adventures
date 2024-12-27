let images: any[] = []
for (let i = 1; i <= 27; i++) {
  images.push({ src: `/numbered/${i}.jpg`, alt: `Image ${i}` })

}

export const SITE_IMAGES = images