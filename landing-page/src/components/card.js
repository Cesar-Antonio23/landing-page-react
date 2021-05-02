import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Cards = () => {
  return (
    <Row className="cards container" style={{marginLeft:"12rem"}}>
      <Col className="col-3">
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/500/325" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3">
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/500/325" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3">
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/500/325" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3">
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/500/325" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
