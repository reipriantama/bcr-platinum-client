import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './index.scss'

const NavbarComponent = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar-main">
            <Container>
              <Link style={{ textDecoration: 'none' }} to={'/'}>
              <div className="blue-box"></div>
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                  <Nav.Link href="#ourservices">Our Service</Nav.Link>
                  <Nav.Link href="#whyus">Why Us</Nav.Link>
                  <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                  <Link to="/register"> <button type="button" class="btn btn-success reg">Register</button></Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavbarComponent