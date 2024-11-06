import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import blogimage2 from "/blogimage2.jpg";
import { Link } from "react-router-dom";

function Navbars() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const handleClose = () => setExpanded(false);

  return (
    <div className="mb-5">
      <Navbar expand="lg" className="bg-body-tertiary fixed-top" expanded={expanded}>
        <Container fluid>
          <img className="fluid nav-image" src={blogimage2} alt="Logo" />
          <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 group-item"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="items" to="/" onClick={handleClose}>
                Home
              </Link>
              <Link className="items" to="/posts" onClick={handleClose}>
                Posts
              </Link>
              <Link className="items" to="/about" onClick={handleClose}>
                About
              </Link>
              <Link className="items" to="/contact" onClick={handleClose}>
                Contactus
              </Link>
              <Link className="items" to="/signup" onClick={handleClose}>
                Dashboard
              </Link>
            </Nav>
            <NavDropdown
              title="Accounts"
              className="items"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/signup" onClick={handleClose}>Sign-up</NavDropdown.Item>
              <NavDropdown.Item href="/login" onClick={handleClose}>Login</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
