import React from "react";
import "./Customer.css";
import customerImg from "../../assets/companyImages/customerimg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillRecord2Fill } from "react-icons/bs";
import Logo1 from "../../assets/companyImages/Logo1.png";
import Logo2 from "../../assets/companyImages/Logo2.jpg";
import Logo3 from "../../assets/companyImages/Logo3.jpg";
import Logo4 from "../../assets/companyImages/Logo4.jpg";
import Logo5 from "../../assets/companyImages/Logo5.png";
import Logo6 from "../../assets/companyImages/Logo6.png";
import Logo8 from "../../assets/companyImages/Logo8.png";
import Logo9 from "../../assets/companyImages/Logo9.jpg";

const Customer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 2;
    }
    if (!document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 3;
    }
  };
  return (
    <section className="customer-wrapper">
      <div className="customer-container">
        <div className="customer-container-left">
          <div className="customer-left-img-container">
            <img src={customerImg} alt="" />
          </div>
        </div>
        <div className="customer-container-right">
          <div className="customer-right-top">
            <span className="customer-right-text-1">WHO WE ARE</span>
            <span className="customer-right-text-2">
              We promise to give you an excellent experience.
            </span>
            <span className="customer-right-text-3">
              Montes vitae mi volutpat nibh semper leo per. Est praesent lorem
              letius vitae velit id parturient quisque facilisi. Ac dui litora
              est scelerisque viverra.
            </span>
            <div className="customer-right-text-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="customer-right-text-4">
                Bibendum imperdiet vulputate per enim neque
              </span>
            </div>
            <div className="customer-right-text-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="customer-right-text-4">
                Risus eget mattis fermentum porta
              </span>
            </div>
            <div className="customer-right-text-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />{" "}
              <span className="customer-right-text-4">
                Sed orci pulvinar cubilia efficitur condimentum
              </span>
            </div>
          </div>
          <div className="customer-right-bottom">
            <span className="customer-right-bottom-text">
              TRUSTED BY 30+ TRUSTED COMPANY
            </span>
            <Slider {...settings}  slidesToShow={getMenuStyle()}>
              <div>
                <div className="companyLogo-container">
                  <img src={Logo1} alt="" className="companyLogo" />
                </div>
              </div>
              <div>
                <div className="companyLogo-container">
                  <img src={Logo2} alt="" className="companyLogo" />
                </div>
              </div>
              <div>
                <div className="companyLogo-container">
                  <img src={Logo3} alt="" className="companyLogo" />
                </div>
              </div>
              <div>
                <div className="companyLogo-container">
                  <img src={Logo4} alt="" className="companyLogo" />
                </div>
              </div>
              <div>
                <div className="companyLogo-container">
                  <img src={Logo8} alt="" className="companyLogo" />
                </div>
              </div>
              <div>
                <div className="companyLogo-container">
                  <img src={Logo9} alt="" className="companyLogo" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
