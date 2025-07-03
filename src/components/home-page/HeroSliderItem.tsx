import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  img: string;
}

interface Props {
  slide: Slide;
}

const HeroSliderItem = ({ slide }: Props) => {
  return (
    <div className="overflow-hidden shadow-md hover:shadow-xl transition duration-300 h-full">
      <div className="relative w-full h-full">
        <Image
          src={slide?.img ? slide.img : '/assets/images/slider/propertiest-01.webp'}
          alt={slide?.title}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10 bg-black/25"
        ></div>

        {/* Title Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <h3 className="text-white text-xl lg:text-2xl xl:text-4xl leading-tight">
            {slide.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderItem;
