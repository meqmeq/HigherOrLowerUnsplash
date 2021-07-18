import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navvy from "./Components/Navvy";
import Imagecontainer from "./Components/Imagecontainer";
import test1 from "./ImageTest/test1.jpg";
import test2 from "./ImageTest/test2.jpg";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [score, updateScore] = useState(0);

  return (
    <>
      <Container fluid>
        <Navvy />
        <Row>
          <Col>
            <Imagecontainer image={test1} title="Doggo" />
          </Col>
          <Col>
            <Imagecontainer image={test2} title="Cateo" />
          </Col>
        </Row>
        <Row>
          <h1>Score: {score}</h1>
        </Row>
      </Container>
    </>
  );
}

export default App;
