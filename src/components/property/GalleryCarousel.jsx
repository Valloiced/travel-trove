import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function GalleryCarousel({ gallery }) {
    const galleryItems = gallery.map((image) => (
          <img 
              src={image.url_max}
              className="w-full h-full object-contain"
              alt="Carousel items"
          />
    ));

    return (
        <div className="hidden w-screen bg-green -ml-2 max-sm:flex">
            <Carousel
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="w-screen h-64 object-cover"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {galleryItems}
            </Carousel>
        </div>
    )
};