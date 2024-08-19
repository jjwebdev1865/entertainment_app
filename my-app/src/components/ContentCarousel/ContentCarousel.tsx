import React from "react";
import Carousel from 'react-multi-carousel';

const responsiveCarouselSizes = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface ContentCarouselProps {
  contentList: any[]
};

//  Explore this more later
// carousel from: https://www.npmjs.com/package/react-multi-carousel
export const ContentCarousel = ({ contentList }: ContentCarouselProps) => {
  return (
    <div style={{ padding: '0 24px'}}>
      <Carousel 
        responsive={responsiveCarouselSizes}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        transitionDuration={500}
      >
        {contentList.map(item => {
          return (
            <div key={`favorite-movie-${item.id}`}>
              <img src={item.poster} height={400} width={300} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};