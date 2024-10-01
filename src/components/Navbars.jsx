import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import blogimage2 from "/blogimage2.jpg";
import { Link, Outlet } from "react-router-dom";
function Navbars() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img className="fluid nav-image " src={blogimage2} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 group-item"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="items" to="/">
                Home
              </Link>
              <Link className="items" to="/categories">
                Categories
              </Link>
              <Link className="items" to="/posts">
                Posts
              </Link>
              <Link className="items" to="/about">
                About
              </Link>
              <Link className="items" to="/contact">
                Contactus
              </Link>
              <Link className="items" to="/dashboard">
                Dashboard
              </Link>
            </Nav>
            <NavDropdown
              title="Accounts"
              className="items"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/signup">Sign-up</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Navbars;
