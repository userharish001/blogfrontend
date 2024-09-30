import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import cartoon from "/cartoon.jpg";
import animals from "/animals.jpg";
import team from "/team.jpg";
import one from "/one.png";

const About = () => {
  return (
    <Container className="mt-5">
      {/* Introduction Section */}
      <section className="text-center mb-5">
        <h1 className="display-4">About Our Blog</h1>
        <p className="lead">
          Welcome to our blog where we dive into the fascinating worlds of
          animals and cartoons. Whether you're here to learn more about your
          favorite animal species or explore the universe of classic and modern
          cartoons, we’ve got it all!
        </p>
      </section>

      {/* Mission Section */}
      <section className="text-center mb-5">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide accurate and engaging information about
          animals and cartoons that educates and entertains people of all ages.
          We aim to make learning about nature and animated characters fun and
          accessible for everyone.
        </p>
      </section>

      {/* Categories Section */}
      <section className="mb-5">
        <Row>
          {/* Animals Category */}
          <Col md={6} className="mb-4">
            <Card className="h-100 text-center">
              <Image src={animals} fluid className="rounded-top" />
              <Card.Body>
                <Card.Title>All About Animals</Card.Title>
                <Card.Text>
                  Explore the animal kingdom with us as we cover species from
                  around the world. From fascinating facts to amazing habitats,
                  there's so much to learn about our planet’s wildlife.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Cartoons Category */}
          <Col md={6} className="mb-4">
            <Card className="h-100 text-center">
              <Image src={cartoon} fluid className="rounded-top" />
              <Card.Body>
                <Card.Title>Cartoons We Love</Card.Title>
                <Card.Text>
                  From classic animated films to the latest in animated series,
                  we delve into the world of cartoons. Learn about the
                  characters, history, and creators behind some of the most
                  iconic cartoons.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Team Section */}
      <section className="text-center mb-5">
        <h2>Meet the Team</h2>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Image
              src={one}
              roundedCircle
              fluid
              style={{ height: "12rem", width: "12rem" }}
            />
            <h5 className="mt-3">Harish</h5>
            <p>Founder & Lead Writer</p>
          </Col>
          <Col md={4} className="mb-4">
            <Image
              src={team}
              roundedCircle
              fluid
              style={{ height: "12rem", width: "12rem" }}
            />
            <h5 className="mt-3">John Doe</h5>
            <p>Editor & Content Curator</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
