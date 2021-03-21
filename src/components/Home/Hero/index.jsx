import HeroContent from "./HeroContent/HeroContent";
import CarouselSlider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="hero">
      <CarouselSlider {...settings}>
        {images.map((item, i) => (
          <div className="hero__slider" key={i}>
            <img src={item} alt={item} />
          </div>
        ))}
      </CarouselSlider>
      <HeroContent />
    </div>
  );
};

export default Hero;

const images = [
  "/images/bg-(1).jpg",
  "/images/bg-(2).jpg",
  "/images/bg-(5).jpg",
];
