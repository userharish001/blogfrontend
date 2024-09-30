import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Button variant="primary" as={Link} to="/">
        Go Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
