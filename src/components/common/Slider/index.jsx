import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import SliderCard from "./SliderCard";
import SlickSlider from "react-slick";
import settings from "./config";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useHistory } from "react-router";

const Slider = ({
  title,
  subTitle,
  items,
  hidePrev,
  textCenter,
  arrowPosition,
  viewAllPath,
  handleFollow,
}) => {
  const history = useHistory();

  const handlePath = () => history.push(`${viewAllPath ? viewAllPath : "/"}`);

  return (
    <Container className={`my-4 slider ${hidePrev} ${arrowPosition}`}>
      {subTitle && <h6 className="slider__subTitle">{subTitle}</h6>}

      <div className="d-flex justify-content-between align-items-center">
        <h1 className="slider__title">{title}</h1>
        {viewAllPath && (
          <h6 className="viewAllPath" onClick={handlePath}>
            view all
          </h6>
        )}
      </div>

      <SlickSlider
        {...settings}
        nextArrow={<GrNext />}
        prevArrow={<GrPrevious />}>
        {items &&
          items.map((item, i) => (
            <SliderCard
              textCenter={textCenter}
              handleFollow={handleFollow}
              key={i}
              {...item}
            />
          ))}
      </SlickSlider>
    </Container>
  );
};

export default Slider;
