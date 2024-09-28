import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Data from "../components/Data";

const Dashboard = () => {
  return (
    <div>
      {" "}
      <h2 style={{ textAlign: "center" }}>
        Only authroized person can access this page{" "}
      </h2>
      <Card className="bg-dark text-white">
        <Card.Img src="..." alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Data/>
    </div>
  );
};

export default Dashboard;
