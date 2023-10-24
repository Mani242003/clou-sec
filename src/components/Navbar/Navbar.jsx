import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { MdQrCodeScanner } from "react-icons/md";
import { routes } from "../../Data/Dummy";
import { Link } from "react-scroll";
import clouSecLogo from "./clouSecLogo.png";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";
import Menuicon from "../../assets/menFii.json";
import Lottie from "lottie-react";

const Navbar = () => {
  const [cliked, setCliked] = useState(false);
  const [nav, setNav] = useState(false);
  const [menuOpened, setmenuOpened] = useState(false);
  useEffect(() => {
    if (document.documentElement.clientWidth <= 769) {
      setmenuOpened(true);
    }
  }, []);

  const handelClicked = (clicked) => {
    setCliked(!clicked);
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
    <section className="nav_wrapper">
      <div className={nav ? "nav_container navActive" : "nav_container"}>
        <div className="nav_logo">
          <Link
            style={{cursor:'pointer'}}
            to="mainPage"
            spy={true}
            offset={10}
            duration={600}

          >
            <img src={clouSecLogo} alt="" width={120} />
          </Link>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setCliked(false);
          }}
        >
          <div className={cliked ? "nav_menu active" : "nav_menu "}>
            <ul className="nav_menu_ul_container">
              {routes.map((route, i) => (
                <li key={i} className="nav_li">
                  <Link
                    to={route.path}
                    spy={true}
                    offset={-70}
                    duration={600}
                    onClick={() => {
                      setCliked(false);
                    }}
            style={{cursor:'pointer'}}
            

                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav_button_container">
              <Link
               to="contact"
               spy={true}
               offset={-70}
               duration={600}
               onClick={() => {
                 setCliked(false);
               }}
            style={{cursor:'pointer'}}
            >
              <button className="nav_button">Request Demo</button>
              </Link>
            </div>
          </div>
        </OutsideClickHandler>

        <div className="menu_icon">
          {cliked ? (
            <AiOutlineClose
              size={33}
              style={{}}
              color="black"
              onClick={() => {
                handelClicked(cliked);
              }}
            />
          ) : (
            <Lottie
              animationData={Menuicon}
              style={{ width: "31px", opacity: 0.8 }}
              color="black"
              onClick={() => {
                handelClicked(cliked);
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
