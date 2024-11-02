import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handlesignup() {
    navigate("/login");
  }
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(inputs);
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        console.log(res);
        toast.success("User created successfully!",{position:"top-right"});
        setTimeout(()=>{
          navigate("/login");
        },2000)
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred. Please try again.");
      });
    //   let user = {
    //     name: inputs.name,
    //     email: inputs.email,
    //     password: inputs.password,
    //   };
    //   localStorage.setItem("userData", JSON.stringify(user));
    //   toast.success("Signup successful!");
    //   handlesignup();
  }

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <Form
            onSubmit={handleSubmit}
            className="p-4 border rounded bg-light shadow"
          >
            <h2 className="text-center mb-4 text-black">Signup</h2>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="text-black">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="name"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-black">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-black" >Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={password || ""}
                maxLength={8}
                minLength={4}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Signup
            </Button>
            <p className="text-center text-danger">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none text-primary">
                Login
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  );
}

export default Signup;
