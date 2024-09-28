import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const userData = localStorage.getItem("userData");
  const userObject = JSON.parse(userData);

  function handlebutton() {
    if (userObject.email === email && userObject.password === password) {
      navigate("/dashboard");
    } else {
      alert("Invalid password and email address");
    }
  }
  return (
    <Form className="form">
      Login
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handlebutton} type="submit">
        Login
      </Button>
      <p>
        If have no account{" "}
        <Link style={{ textDecoration: "none", color: "red" }} to="/signup">
          Signup
        </Link>
      </p>
    </Form>
  );
}

export default Login;
