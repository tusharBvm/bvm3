import React from "react";
import bread from "../Assets/images/bistro4-slider-pic1.jpeg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Assets/images/logo.png";

<style></style>;

function Header() {
  return (
    <>
      {/* <header class="hero">
    <div id="navbar" class="navbar">
      <h1 class="logo">
        <span class="text-primary"><i class="fas fa-book-open"></i>Edge</span>Ledger
      </h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cases">Cases</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div class="content">
      <h1>The sky is the limit</h1>
      <p>We provide world class financial assistance</p>
      <a href="#about" class="btn">Read More</a>
    </div>
    
  </header> */}

      <div className="bistro">
        <div className="container-fluid">
          <div className="bistro-nav">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
              <Navbar.Brand href="#home">
                <img src={logo} alt="" style={{ background: "red" }} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#features">Start</Nav.Link>
                  <Nav.Link href="#pricing">About</Nav.Link>
                  <Nav.Link href="#features">Menu</Nav.Link>
                  <Nav.Link href="#pricing">Our Story</Nav.Link>
                  <Nav.Link href="#features">Our Specials</Nav.Link>
                  <Nav.Link href="#pricing">Contact</Nav.Link>
                  <Nav.Link href="#features">Buy Now</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
