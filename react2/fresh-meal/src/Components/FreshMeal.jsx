import React from "react";
import logo from "../Assets/images/logo.png";
import meal2 from "../Assets/images/bistro4-slider-pic1.jpeg";
import bistro from "../Assets/images/bistro4-about-pic1.jpg";
import eatting from "../Assets/images/eatting.jpg";
import dishes from "../Assets/images/dishes.jpg";
import story from "../Assets/images/story.jpg";
import logo2 from "../Assets//images/logo2.png";
import dish1 from "../Assets/images/dish1.jpg";
import dish2 from "../Assets/images/dish2.jpg";
import dish3 from "../Assets/images/dish3.jpg";
import dish4 from "../Assets/images/dish4.jpg";
import dish5 from "../Assets/images/dish5.jpg";
import dish6 from "../Assets/images/dish6.jpg";
import gallery from "../Assets/images/gallery.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { FaDownload, FaImages } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function FreshMeal() {
  return (
    <>
      {/* header start */}
      <div className="container-fluid border-btm header-cnt header px-4">
        <div className="logo">
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="menubar">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ">
                  <a class="nav-link spacing fw-bold" href="#">
                    Start
                  </a>
                  <a class="nav-link spacing fw-bold" href="#about">
                    About
                  </a>
                  <a class="nav-link spacing fw-bold" href="#menu">
                    Menu
                  </a>
                  <a class="nav-link spacing fw-bold" href="#story">
                    Our story
                  </a>
                  <a class="nav-link spacing fw-bold" href="#speical">
                    Our specials
                  </a>
                  <a class="nav-link spacing fw-bold" href="#contact">
                    Contact
                  </a>
                  <a class="nav-link spacing fw-bold" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* header end  */}

      {/* img-cnt  start*/}
      <div className="container-fluid d-flex p-0 main bg">
        <div className="w-50 bg">
          <div className="img-cnt">
            <h1 className="fresh-meeal">Healthy Fresh Meals</h1>
            <p className="time-cnt">
              <span style={{ color: "#ffc61a" }}>Open everyday</span>{" "}
              <span style={{ color: "white" }}>7 AM - 8 PM</span>
            </p>
            <button className="rounded-pill read-more">
              <a href="#about" className="readmore-a">
                Read more
              </a>
            </button>
          </div>
        </div>
        <div className="w-50">
          <img className="img-set" src={meal2} alt="" />
        </div>
      </div>
      {/* img-cnt end*/}

      {/* best-bistro start */}
      <div className="container-fluid space" id="about">
        <div className="container">
          <div class="row ">
            <div class="col-md-6 col-12 space-2">
              <img className="bistro-img " src={bistro} alt="" />
            </div>
            <div class="col-md-6 col-12 space-2">
              <div className="bistro-cnt mt-55">
                <div className="mb-40">
                  <p>Our Location</p>
                  <h1>The best bistro in NY</h1>
                  <span className="bistro-span">
                    Mauris rhoncus orci in imperdiet placerat.
                  </span>
                </div>

                <hr />
                <div className="row mt-55">
                  <div className="col-1">
                    <IoLocationSharp size={35} color="#fa811e" />
                  </div>
                  <div className="col-4">
                    <span className="icon-span">
                      Level 13, 2 Elizabeth St, Melbourne, Victoria 3000,
                      Australia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* best-bistro end */}

      <div className="box"></div>

      {/* healthy eating start   */}
      <div className="container-fluid space">
        <div className="container">
          <div className="d-flex justify-content-center">
            <hr className="border-cnt" />
            <p className="why-cnt">Why healthy eating matters</p>
            <hr className="border-cnt" />
          </div>

          <div className="row p-100">
            <div className=" col-md-3 col-12 ">
              <div className="eating-cnt mt-55">
                <div className="mb-40">
                  <h2>Ut ultricies imperdiet</h2>
                  <span className="eating-span">
                    Aliquam fringilla aliquam ex sit amet elementum. Proin
                    bibendum feugiat.
                  </span>
                </div>

                <hr />

                <div className="mb-40 mt-36">
                  <h2>Curabitur ut egestas</h2>
                  <span className="eating-span">
                    Integer magna purus, commodo in diam nec, pretium auctor.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <img src={eatting} alt="" className="bistro-img" />
            </div>
            <div className=" col-md-3 col-12">
              <div className="eating-cnt align mt-55 ">
                <div className="mb-40">
                  <h2>Mauris accumsan</h2>
                  <span className="eating-span rtl-text ">
                    Phasellus venenatis leo eu semper varius. Maecenas sit amet
                    molestie leo.
                  </span>
                </div>
                <hr />

                <div className="mb-40 mt-36">
                  <h2>Nulla sit amet vestibulum</h2>
                  <span className="eating-span">
                    Nulla nec tortor vitae eros iaculis hendrerit aliquet non
                    sit amet vestibulum.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="rounded-pill menu-btn">
              <a href="#menu">See Our Menu</a>
            </button>
          </div>
        </div>
      </div>
      {/* healthy eating end   */}

      <div className="box"></div>

      {/* selected dishes start */}
      <div className="container-fluid space bg-green" id="menu">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-12 pd">
              <div className="dishes-cnt mt-55">
                <div className="mb-40">
                  <p>Selected</p>
                  <h1>Dishes</h1>
                  <span className="dishes-span">
                    Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam
                    vel justo cursus, faucibus lorem eget eros.
                  </span>
                  <div className="row mt-55">
                    <div className="col-10">
                      <p>Proin gravida gravida</p>
                    </div>
                    <div className="col-2">
                      <h4 className="text-light">$22</h4>
                    </div>
                  </div>
                  <hr className="dishes-hr" />
                  <div className="row">
                    <div className="col-10">
                      <p>Lorem ipsum</p>
                    </div>
                    <div className="col-2">
                      <h4 className="text-light">$18</h4>
                    </div>
                  </div>
                  <hr className="dishes-hr" />
                  <div className="row">
                    <div className="col-10">
                      <p>Curabitur et ligula</p>
                    </div>
                    <div className="col-2">
                      <h4 className="text-light">$10</h4>
                    </div>
                  </div>
                  <hr className="dishes-hr" />
                  <div className="row">
                    <div className="col-10">
                      <p>Aliquam sem hendrerit</p>
                    </div>
                    <div className="col-2">
                      <h4 className="text-light">$12</h4>
                    </div>
                  </div>
                  <div className="mt-36">
                    <button className="rounded-pill menu-btn">
                      <a href="">
                        <FaDownload /> &nbsp;&nbsp;Full menu (.pdf)
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <img className="bistro-img mt-130" src={dishes} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* selected dishes end */}

      {/* story start */}
      <div className="container-fluid bg-story " id="story">
        <div className="container">
          <div className="row">
            <div className="col-6 space">
              <div className="story-cnt mt-55">
                <div className="mb-40">
                  <p>Our story</p>
                  <h1>Fusce ut velit tempus arcu molestie</h1>
                  <span className="story-span">
                    Mauris rhoncus orci in imperdiet placerat. Vestibulum
                    euismod nisl suscipit ligula volutpat, a feugiat urna
                    maximus. <br />
                    <br /> Cras massa nibh, tincidunt ut eros a, vulputate
                    consequat odio. Vestibulum vehicula tempor nulla, sed
                    hendrerit urna interdum in. Donec et nibh maximus, congue
                    est eu, mattis nunc. Praesent ut quam quis quam venenatis
                    fringilla. Morbi vestibulum id tellus commodo mattis.
                    Aliquam erat volutpat. Aenean accumsan id mi nec semper.
                  </span>
                  <h6 className="story-span2">
                    <a href="">
                      See our specials <MdKeyboardArrowDown size={25} />
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <div>
                <img src={story} className="bistro-img" alt="" />
              </div>
              <div className="row">
                <div className="col-4"></div>
                <div className="story-cnt2 col-6 ">
                  <div className="mb-40">
                    <h2>1997</h2>
                    <span className="eating-span">
                      Aliquam fringilla aliquam ex sit amet elementum. Proin
                      bibendum.
                    </span>
                  </div>

                  <hr />

                  <h2>168</h2>
                  <span className="eating-span">
                    Integer magna purus, commodo in diam nec, pretium auctor.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* story end */}

      {/* special start  */}
      <div className="container-fluid space" id="speical">
        <div className="container">
          <div className="row ">
            <div className="col-9">
              <p className="speicial-p">What we offer</p>
              <h1 className="special-h1">Our specials</h1>
            </div>
            <div className="col-3">
              <img src={logo2} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 */}

      <div className="container-fluid pb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <img src={dish1} alt="" style={{ width: "100%" }} />
              <p className="dish-p">Aliquam fringilla aliquam</p>
            </div>
            <div className="col-md-4  col-12">
              <img src={dish2} alt="" style={{ width: "100%" }} />
              <p className="dish-p">Lorem ipsum </p>
            </div>
            <div className="col-md-4 col-12">
              <img src={dish3} alt="" style={{ width: "100%" }} />
              <p className="dish-p">Nulla mauris dolor </p>
            </div>
            <div className="col-md-4 col-12 mt-3">
              <img src={dish4} alt="" style={{ width: "100%" }} />
              <p className="dish-p">Curabitur rutrum</p>
            </div>
            <div className="col-md-4 col-12 mt-3">
              <img src={dish5} alt="" style={{ width: "100%" }} />
              <p className="dish-p">Class aptent taciti</p>
            </div>
            <div className="col-md-4 col-12 mt-3">
              <img src={dish6} alt="" style={{ width: "100%" }} />
              <p className="dish-p">Maecenas sit amet</p>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="rounded-pill menu-btn">
              <a href="">Gallery</a>
            </button>
          </div>
        </div>
      </div>
      {/* specal-end */}

      {/* photos Start */}
      <div className="container-fluid bg-story space">
        <div className="container">
          <div className="text-center">
            <h4 className="theme">BE BISTRO</h4>
            <h1 className="special-h1">
              See our photos <br /> on instagram
            </h1>
            <img className="gallery-img mt-55" src={gallery} alt="" />
            <button className="rounded-pill menu-btn mt-5">
              <a href="">
                <FaImages /> &nbsp; View our instagram
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* photos end */}

      {/* footer start */}
      <div className="container-fluid space footer-bg" id="contact">
        <div className="container">
          <img src={logo2} alt="" />
          <h1 className="footer-h1 mt-3">Contact us</h1>
          <div className="row">
            <div className="col-3">
              <p className="footer-p mt-5">
                Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
              </p>
              <p className="footer-p mt-5">Everyday: 7 AM - 8 PM</p>
            </div>
            <div className="col-4">
              <p className="footer-p mt-5">Phone</p>
              <h2 className="footer-h2">+61 (0) 3 8376 6284</h2>
              <p className="footer-p mt-5">E-mail</p>
              <p className="footer-p2">noreply@envato.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreshMeal;
