import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DayNightToggle from "react-day-and-night-toggle";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Logo from "../../../asset/images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaKey,
  FaPaste,
  FaQuestion,
  FaRegEdit,
  FaSignOutAlt,
} from "react-icons/fa";
import { Image } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Header = () => {
  const { isDarkMode, handleModeToggole, user, logOut } =
    useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("LogOut Success"))
      .catch((error) => console.error(error.message));
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user.displayName}
    </Tooltip>
  );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={isDarkMode ? "bg-dark" : "funta-bg"}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img className="me-2" width={50} src={Logo} alt="" />
          <h3>FuntaLearning</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="courses">
              <FaCode /> Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              <FaQuestion /> FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              <FaPaste /> Blog
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center align-self-center">
            {user ? (
              <>
                <Nav.Link onClick={handleLogOut}>
                  <FaSignOutAlt /> Log Out
                </Nav.Link>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Image
                    className="border border-success me-2"
                    style={{ height: "40px", width: "40px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                </OverlayTrigger>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">
                  <FaRegEdit></FaRegEdit> Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <FaKey /> Login
                </Nav.Link>
              </>
            )}

            <Nav.Link>
              <DayNightToggle
                onChange={handleModeToggole}
                checked={isDarkMode}
              />
            </Nav.Link>

            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
