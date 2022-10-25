import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DayNightToggle from "react-day-and-night-toggle";
import "./Header.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //   const handleChange = () => {
  //     setDark(true);
  //     if (dark === true) {
  //       setIsDarkMode(false);
  //       console.log("Off");
  //     } else {
  //       setIsDarkMode(true);
  //       console.log("On");
  //     }
  //   };
  return (
    <Navbar collapseOnSelect expand="lg" className="funta-bg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <DayNightToggle
                onChange={() => setIsDarkMode(!isDarkMode)}
                checked={isDarkMode}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
