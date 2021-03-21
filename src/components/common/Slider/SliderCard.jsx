import Card from "react-bootstrap/Card";
import { IoIosPersonAdd } from "react-icons/io";

const SliderCard = ({ img, cardTitle, subTitle, textCenter, handleFollow }) => {
  const handleAddUser = e => {
    handleFollow(e);
  };

  return (
    <>
      <Card>
        <div className="imgContainer">
          {img && <Card.Img src={img} alt={`${img}-image`} />}
          <span className="addUser" onClick={handleAddUser}>
            <IoIosPersonAdd />
          </span>
        </div>

        <Card.Body>
          {cardTitle && (
            <Card.Title style={{ textAlign: textCenter ? "center" : "left" }}>
              {cardTitle}
            </Card.Title>
          )}
          {subTitle &&
            subTitle.map((item, i) => (
              <Card.Text
                key={i}
                className="text-secondary m-0 p-0 text-capitalize">
                {item}
              </Card.Text>
            ))}
        </Card.Body>
      </Card>
    </>
  );
};

export default SliderCard;
