import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SingleCard = ({ IconName, content, title }) => {
  return (
    <Col md={4}>
      <Card className="singleCard">
        <Card.Header>{IconName && <IconName />}</Card.Header>
        <Card.Body>
          <Card.Title>{title && title}</Card.Title>
          <Card.Text>{content && content}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
