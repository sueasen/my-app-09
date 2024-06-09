import { Carousel } from '@material-tailwind/react';

export function CarouselDefault({ images }) {
  return (
    <Carousel className="rounded-xl">
      {images.map((img, i) => {
        return (
          <img
            src={img}
            alt={'image' + i}
            className="h-96 w-full object-cover m-2"
          />
        );
      })}
    </Carousel>
  );
}
