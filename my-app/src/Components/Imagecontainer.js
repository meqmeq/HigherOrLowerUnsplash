import { Card, Button } from "react-bootstrap";

const Imagecontainer = (props) => {
  console.log(props.image);
  return (
    <Card
      style={{
        maxHeight: "100vh",
      }}
      fluid
    >
      <Card.Img
        variant="top"
        src={props.image}
        style={{
          resizeMode: "cover",
          height: "60vh",
          objectFit: "contain",
        }}
        fluid
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Imagecontainer;
