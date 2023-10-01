import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import clouSecLogo from "./clouSecLogo.png";
import { RiMenu3Fill } from "react-icons/ri";
import OutsideClickHandler from "react-outside-click-handler";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [menuOpened, setmenuOpened] = useState(false);
  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { top: !menuOpened && "-1999%" };
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <section className="nav-wrapper">
      <div
        className={nav ? "nav-container navActive " : "nav-container "}
        id="home"
      >
        <div
          
        >
          <Link className="nav-logo"  to="mainPage"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={600} >
            <img src={clouSecLogo} alt="" width={120} />
          </Link>
        </div>

        <OutsideClickHandler
          onOutsideClick={() => {
            setmenuOpened(false);
          }}
        >
          <div className="nav-center-container">
            <ul className="nav-menu " style={getMenuStyle(menuOpened)}>
              <li
                onClick={() => {
                  setmenuOpened(false);
                }}
              >
                <Link
                  to="mainPage"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={600}
                  onClick={() => {
                    setmenuOpened(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                onClick={() => {
                  setmenuOpened(false);
                }}
              >
                <Link
                  to="fea"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  onClick={() => {
                    setmenuOpened(false);
                  }}
                >
                  Features
                </Link>
              </li>
              <li
                onClick={() => {
                  setmenuOpened(false);
                }}
              >
                <Link
                  to="roadMap"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={600}
                  onClick={() => {
                    setmenuOpened(false);
                  }}
                >
                  Roadmap
                </Link>
              </li>
              <li
                onClick={() => {
                  setmenuOpened(false);
                }}
              >
                <Link
                  to="solution"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={600}
                  onClick={() => {
                    setmenuOpened(false);
                  }}
                >
                  Solutions
                </Link>
              </li>
              <li
                onClick={() => {
                  setmenuOpened(false);
                }}
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={600}
                  onClick={() => {
                    setmenuOpened(false);
                  }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  className="navbar-button"
                  onClick={() => {
                    setmenuOpened(false);
                  }}
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={600}
                    onClick={() => {
                      setmenuOpened(false);
                    }}
                  >
                    Request Demo
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </OutsideClickHandler>
      </div>
      <div
        className="menuIcon"
        onClick={() => {
          setmenuOpened((pre) => !pre);
        }}
      >
        <RiMenu3Fill size={34} />
      </div>
    </section>
  );
}

export default Navbar;
