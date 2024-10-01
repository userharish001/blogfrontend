import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = ({ full }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={full} />
      </Card>{" "}
      <Card style={{ width: "100rem" }}>
        <Card.Body>
          <Card.Text>
            Experience the breathtaking beauty of the majestic mountains, where
            the sky kisses the peaks.Relax on the serene beach, where the waves
            gently caress the shore and the sun sets in a blaze of colors.Wander
            through the vibrant forest, filled with lush greenery and the sweet
            sounds of nature.Marvel at the stunning city skyline, illuminated by
            the lights of bustling streets and towering skyscrapers.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
