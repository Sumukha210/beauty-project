import AbstractPainting from "./AbstractPainting";
import ArtistsToFollow from "./ArtistsToFollow";
import EmergingPaintings from "./EmergingPaintings";
import FeatureCategories from "./FeatureCategories";
import FigurativePainting from "./FigurativePainting";
import HandiCraft from "./Handicraft";
import HandmadeJewelry from "./HandmadeJewellery";
import Hero from "./Hero";
import Landscape from "./Landscape";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureCategories />
      <EmergingPaintings />
      <HandmadeJewelry />
      <HandiCraft />
      <ArtistsToFollow />
      <Landscape />
      <AbstractPainting />
      <FigurativePainting />
    </>
  );
};

export default Home;
