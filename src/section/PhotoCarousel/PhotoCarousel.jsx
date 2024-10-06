import React from 'react';
import Slider from 'react-slick';
import "../../styles/section/_photocarousel.scss";
import BackEnd from "../../assets/icon/Achievement/backend.png";
import Mobile from "../../assets/icon/Achievement/mobile.png";
import Intern from "../../assets/icon/Achievement/internfullstack.png";
import Carousel1st from "../../assets/icon/PhotoCarousel/carousel1st.jpeg";
import Carousel1 from "../../assets/icon/PhotoCarousel/carousel1.png";
import Carousel2 from "../../assets/icon/PhotoCarousel/carousel2.png";
import Carousel3 from "../../assets/icon/PhotoCarousel/carousel3.png";
import Carousel4 from "../../assets/icon/PhotoCarousel/carousel4.png";
import Carousel5 from "../../assets/icon/PhotoCarousel/carousel5.png";
import Carousel6 from "../../assets/icon/PhotoCarousel/carousel6.png";
import Carousel7 from "../../assets/icon/PhotoCarousel/carousel7.png";
import Carousel8 from "../../assets/icon/PhotoCarousel/carousel8.png";
import Carousel9 from "../../assets/icon/PhotoCarousel/carousel9.png";
import Carousel10 from "../../assets/icon/PhotoCarousel/carousel10.png";
import Carousel11 from "../../assets/icon/PhotoCarousel/carousel11.jpg";
import Carousel12 from "../../assets/icon/PhotoCarousel/carousel12.png";
import Carousel13 from "../../assets/icon/PhotoCarousel/carousel13.png";
import Carousel14 from "../../assets/icon/PhotoCarousel/carousel14.png";
import Carousel15 from "../../assets/icon/PhotoCarousel/carousel15.png";
import Carousel16 from "../../assets/icon/PhotoCarousel/carousel16.png";

const PhotoCarousel = () => {
  // Array of photo URLs
  const photos = [
    Carousel1st,
    Carousel1,
    Carousel2,
    Carousel3,
    Carousel4,
    Carousel5,
    Carousel6,
    Carousel7,
    Carousel8,
    Carousel9,
    Carousel10,
    Carousel11,
    Carousel12,
    Carousel13,
    Carousel14,
    Carousel15,
    Carousel16
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 50, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 500, 
    pauseOnHover: true, 
  };

  return (
    <div className="photo-carousel">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="carousel-item">
            <img src={photo} alt={`College Photo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;