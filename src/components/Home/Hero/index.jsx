import HeroContent from "./HeroContent/HeroContent";

const Hero = () => {
  return (
    <div className="hero">
      <img src="/images/hero-bg.jpg" className="hero__bgImg" alt="" />
      <HeroContent />
    </div>
  );
};

export default Hero;
