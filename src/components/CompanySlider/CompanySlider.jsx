import React from "react";
import "./CompanySlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImgs from "../../assets/companyImages/images";
import Logo1 from "../../assets/companyImages/Logo1.png";
import Logo2 from "../../assets/companyImages/Logo2.jpg";
import Logo3 from "../../assets/companyImages/Logo3.jpg";
import Logo4 from "../../assets/companyImages/Logo4.jpg";
import Logo5 from "../../assets/companyImages/Logo5.png";
import Logo6 from "../../assets/companyImages/Logo6.png";
import Logo8 from "../../assets/companyImages/Logo8.png";
import Logo9 from "../../assets/companyImages/Logo9.jpg";


const CompanySlider = () => {
  console.log("imag", sliderImgs);
  console.log("dummy");

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
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
    <section className="section-companySlider">
      <div className="companySlider-conatiner">
        <div className="companySlider-header-container">
          <span className="companySlider-header-text">Trusted by 30+ World Wide Customers</span>
        </div>
        <div className="inner-companyslider-container">
          <Slider {...settings} slidesToShow={getMenuStyle()} >
            <div className="companyLogo-container">
              <img src={Logo1} alt="" className="companyLogo" />
            </div>
            <div className="companyLogo-container">
            <img src={Logo2} alt="" className="companyLogo" />
            </div >
            <div className="companyLogo-container">
            <img src={Logo3} alt="" className="companyLogo" />
            </div>
            <div className="companyLogo-container">
            <img src={Logo4} alt="" className="companyLogo" />
            </div>     
            <div className="companyLogo-container">
            <img src={Logo8} alt="" className="companyLogo" />
            </div>
            <div className="companyLogo-container">
            <img src={Logo9} alt="" className="companyLogo" />
            </div>
            
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CompanySlider;

const CompanySliderItem = (imgUrl) => {
  return (
    <div className="Company-slider-item-container">
      <img src={imgUrl} alt="" width={50} />
    </div>
  );
};
