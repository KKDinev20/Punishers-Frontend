import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/logo.svg';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title={<span className="resume-dropdown-title">Resume</span>} className={activeLink === 'resume' ? 'active navbar-link resume-dropdown' : 'navbar-link resume-dropdown'} onSelect={() => onUpdateActiveLink('resume')}>
                <NavDropdown.Item href="#resume">Resume Builder</NavDropdown.Item>
                <NavDropdown.Item href="#resume">Resume Templates</NavDropdown.Item>
                <NavDropdown.Item href="#resume">Resume Samples</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span className="cv-dropdown-title">CV</span>} className={activeLink === 'cv' ? 'active navbar-link cv-dropdown' : 'navbar-link cv-dropdown'} onSelect={() => onUpdateActiveLink('cv')}>
                <NavDropdown.Item href="#cv">CV Builder</NavDropdown.Item>
                <NavDropdown.Item href="#cv">CV Templates</NavDropdown.Item>
                <NavDropdown.Item href="#cv">CV Samples</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span className="about-dropdown-title">About</span>} className={activeLink === 'about' ? 'active navbar-link about-dropdown' : 'navbar-link about-dropdown'} onSelect={() => onUpdateActiveLink('about')}>
                <NavDropdown.Item href="#about">Teams</NavDropdown.Item>
                <NavDropdown.Item href="#about">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#about">Reviews</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <span className="navbar-text-login">
              <HashLink to="#login">
                <button className="vvd"><span>Log in</span></button>
              </HashLink>
            </span>
            <span className="navbar-text">
              <HashLink to="#signup">
                <button className="vvd"><span>Sign up</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
