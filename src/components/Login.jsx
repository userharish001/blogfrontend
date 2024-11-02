import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handlebutton(event) {
    event.preventDefault();
    axios
      .post("http:localhost:3001/login", { email, password })
      .then((res) => {
        if (res.data === "success") {
          toast.success("Login successful!", { position: "top-right" });
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000); 
        } else {
          toast.error("Some error in login", { position: "top-right" });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred during login.", { position: "top-right" });
      });
  }
  

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <Form
            onSubmit={handlebutton}
            className="p-4 border rounded bg-light shadow"
          >
            <h2 className="text-center mb-4 text-black">Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-black">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-black">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Login
            </Button>
            <p className="text-center text-black">
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration-none text-primary">
                Signup
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default Login;
