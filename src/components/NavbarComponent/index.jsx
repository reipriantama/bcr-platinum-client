import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './index.scss'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const NavbarComponent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Navbar expand="lg" className="navbar-main">
            <Container>
              <Link style={{ textDecoration: 'none' }} to={'/'}>
              <div className="blue-box"></div>
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow} />
              <Offcanvas show={show} onHide={handleClose} responsive="sm" style={{width:250}} placement='end' className='ms-auto'>
                      <Offcanvas.Header closeButton>
                      <Offcanvas.Title>BCR</Offcanvas.Title>
                      </Offcanvas.Header>
                        <Offcanvas.Body>
                          <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav>
                                  <Nav.Link href="/#ourservices" className='service'>Our Service</Nav.Link>
                                  <Nav.Link href="/#whyus" className='why'>Why Us</Nav.Link>
                                  <Nav.Link href="/#testimonial">Testimonial</Nav.Link>
                                  <Nav.Link href="/#faq">FAQ</Nav.Link>
                                  <Link to="/sign-up"> <button type="button" class="btn btn-success reg">Register</button></Link>
                                </Nav>
                          </Navbar.Collapse>
                        </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
        </>
    )
}

export default NavbarComponent