import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { BsFillImageFill } from "react-icons/bs";
import { RiUserHeartFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import SingleCard from "./SingleCard";

const HeroContent = () => {
  return (
    <div className="heroContent  pt-4">
      <Container>
        <Row className="justify-content-between align-items-center">
          {content.map(({ content, title, IconName }) => (
            <SingleCard
              key={title}
              content={content}
              title={title}
              IconName={IconName}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HeroContent;

const content = [
  {
    title: "Original hand-crafted art",
    IconName: BsFillImageFill,
    content:
      "shop original,unique and affordable art directly from thousands of artists and artisans from india",
  },
  {
    title: "support independent artists",
    IconName: RiUserHeartFill,
    content:
      "buy directly from an artists or artisan and support them to make a living doing they love",
  },
  {
    title: "secure shopping",
    IconName: IoMdCart,
    content: "secure transactions,free 5-day return,international delivery",
  },
];
