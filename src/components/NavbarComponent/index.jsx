import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";

const NavbarComponent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

    const navigate = useNavigate();

    useEffect(() => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    });

    const handleLogout = () => {
        sessionStorage.clear();
        localStorage.clear();
        setIsAuthenticated(false);
        navigate("/");
        window.location.reload();
    };


    return (
        <>
        <Navbar expand="lg" className="navbar-main">
            <Container>
              <Col sm={8}>
              <Link style={{ textDecoration: "none" }} to={"/"}>
              <div className="blue-box"></div>
              </Link>
              </Col>
              <Col sm={4}>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow} />
              <Offcanvas show={show} onHide={handleClose} responsive="sm" style={{width:250}} placement='end'>
                      <Offcanvas.Header closeButton>
                      <Offcanvas.Title>BCR</Offcanvas.Title>
                      </Offcanvas.Header>
                        <Offcanvas.Body>
                          <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className='header'>
                                  <Nav.Link href="/#ourservices" className='service'>Our Service</Nav.Link>
                                  <Nav.Link href="/#whyus" className='why'>Why Us</Nav.Link>
                                  <Nav.Link href="/#testimonial">Testimonial</Nav.Link>
                                  <Nav.Link href="/#faq">FAQ</Nav.Link>
                                  {
                                    isAuthenticated ? <button type="button" class="btn btn-success reg" onClick={handleLogout}>Logout</button> :
                                    <Link to="/sign-up"> <button type="button" class="btn btn-success reg">Register</button></Link>

                                  }
                                  
                                </Nav>
                          </Navbar.Collapse>
                        </Offcanvas.Body>
                </Offcanvas>
              </Col>
            </Container>
        </Navbar>
        </>
    );
};

export default NavbarComponent;