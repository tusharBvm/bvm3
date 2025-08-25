import React from "react";
import bread from "../Assets/images/bistro4-slider-pic1.jpeg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/images/logo.png";

<style></style>;

function Header() {
  return (
    <>
      <div className="bistro">
        <div className="container-fluid">
          <div className="bg-img row">
            <div className="col-6 p-0 bg ">
              <div className="health">
                <h1 className="health-h1">
                  Healthy <br />
                  Fresh Meals
                    <p className="health-p">
                  {/* <span style={{ color: "#ffc61a" }}>Open everyday</span>{" "}
                  &nbsp;&nbsp; 7 PM - 8 AM  */}
                  Open everyday 7 PM -  8 AM
                </p>
                  <button className="rounded-pill read-more"> Read more</button>

                </h1>
              

              </div>
            </div>
            <div className="col-6 p-0 ">
              <img className="bg-img-set" src={bread} alt="" />
            </div>
            <div className="bistro-nav">
              <Navbar
                collapseOnSelect
                expand="lg"
                className="bg-body-tertiary p-30"
              >
                <Navbar.Brand>
                  <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto"></Nav>
                  <Nav>
                    <Nav.Link href="#features" className="p-16 fw-bold">
                      Start
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="p-16 fw-bold">
                      About
                    </Nav.Link>
                    <Nav.Link href="#features" className="p-16 fw-bold">
                      Menu
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="p-16 fw-bold">
                      Our Story
                    </Nav.Link>
                    <Nav.Link href="#features" className="p-16 fw-bold">
                      Our Specials
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="p-16 fw-bold">
                      Contact
                    </Nav.Link>
                    <Nav.Link href="#features" className="p-16 fw-bold">
                      Buy Now
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              {/* <div>
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
              <img src={border} alt="" />
            </div> */}
              <hr style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
