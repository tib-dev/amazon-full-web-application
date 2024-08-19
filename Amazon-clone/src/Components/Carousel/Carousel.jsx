import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "./data";
import classes from "./Carousel.module.css";
import { TfiAngleLeft } from "react-icons/tfi";

function CarouselComponent() {
  return (
    <div className={classes.carousel_Wrapper}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
      >
        {img.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
      <div className={classes.hero_img}>
        <TfiAngleLeft />
      </div>
    </div>
  );
}
export default CarouselComponent;
