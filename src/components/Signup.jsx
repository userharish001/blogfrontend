import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  function handlesignup() {
    navigate("/login");
  }
  function handleInput(event) {
    const name = event.target.name;
    console.log(name);
    const value = event.target.value;
    console.log(value);
    setInputs({ ...inputs, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(inputs);
    console.log(inputs);
  }
  let user = {
    name: inputs.name,
    email: inputs.email,
    password: inputs.password,
    user: inputs.user,
  };
  localStorage.setItem("userData", JSON.stringify(user));
  return (
    <form onSubmit={handleSubmit} aria-required>
      <Form className="form">
        <h2 className="text-center">Signup</h2>
        <Form.Group className="mb-1" id="name">
          <Form.Label>Enter first name</Form.Label>
          <Form.Control
            type="text"
            placeholder="first name"
            name="name"
            value={inputs.name || ""}
            onChange={handleInput} 
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Enter last name</Form.Label>
          <Form.Control type="text" placeholder="last name " />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>User type</Form.Label>
          <Form.Control
            type="text"
            placeholder="user category"
            name="user"
            value={inputs.user || ""}
            onChange={handleInput} 
          />
        </Form.Group>
        <Form.Group className="mb-1" id="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={inputs.email || ""}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-1" id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={inputs.password || ""}
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" onClick={handlesignup} type="submit">
          Signup
        </Button>

        <p>
          If already have account{" "}
          <Link style={{ textDecoration: "none", color: "red" }} to="/login">
            Login
          </Link>
        </p>
      </Form>
    </form>
  );
}

export default Signup;
