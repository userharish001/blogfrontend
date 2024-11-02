import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactus = () => {
  const notify = () => {
    toast("We will connect with you as soon as possible");
  };

  return (
    <Container fluid className="d-flex align-items-center min-vh-100 bg-light">
      <Container className="my-5 p-5 bg-white rounded shadow">
        <div className="text-center mb-4">
          <h1 className="mb-3 text-primary">Work With Us</h1>
          <p className="text-muted">
            Please upload your information to join our team.
          </p>
        </div>
        <Form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="form"
          className="text-start"
        >
          <input
            type="hidden"
            name="access_key"
            value="9cbbd7d0-14de-4dcc-84ee-2b862f330233"
          />
          <input type="hidden" name="subject" value="New Submission" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="first_name">
                <Form.Label className="text-black">First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="John"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lname">
                <Form.Label className="text-black">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  placeholder="Doe"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label className="text-black">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label className="text-black">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="+1 (555) 1234-567"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button
              variant="primary"
              type="submit"
              onClick={notify}
              className="w-100"
            >
              Click to Submit
            </Button>
          </div>
        </Form>
      </Container>
    </Container>
  );
};

export default Contactus;
