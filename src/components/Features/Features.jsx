import "./Features.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import accesscontrol from "../../assets/features/accesscontrol.svg";
import insights from "../../assets/features/insights.svg";
import compliance from "../../assets/features/compliance.svg";
import suppress from "../../assets/features/suppress.svg";
import inventory from "../../assets/features/inventory.svg";

const Features = () => {
  var settings = {
    infinite: true,
    dots:true,
    // slidesToShow:{mani},

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 1;
    }
    if (!document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 3;
    }
  };
  return (
    <section className="Features-wrapper" id="fea">
      <div className="Features-Container" >
        <div className="features-header-container">
          <span className="features-header-text">
            Explore Our Product Features
          </span>
        </div>
        <div className="feature-slider-container">
          <Slider {...settings} slidesToShow={getMenuStyle()} className="">
            <div className="features-slider-content">
            <div className="features-slider-content-inner">
            <div className="features-slider-header-container">
                <span
                  className="features-slider-header"
                  style={{ color: "#F37D73" }}
                >
                  Executive Security Dashboard
                </span>
              </div>

              <div className="features-slider-middel-container">
                <img src={insights} alt=""  width={110} />
              </div>
              <div className="features-slider-bottom">
                <span className="features-slider-text1">
                  Executive Security Health Dashboard
                </span>
                <span className="features-slider-text2">
                  Gain Real-Time Insights And Actionable Data At A Glance With
                  Our Executive Security Dashboard, Providing Top-Level
                  Executives.
                </span>
              </div>
            </div>
            </div>
            <div className="features-slider-content">
              <div className="features-slider-content-inner">
              <div className="features-slider-header-container">
                <span
                  className="features-slider-header"
                  style={{ color: "#E4C353" }}
                >
                  Compliance Dashboard
                </span>
              </div>
              <div className="features-slider-middel-container">
                <img src={compliance} alt=""  width={110} style={{marginTop:"10%"}}/>
              </div>
              <div className="features-slider-bottom">
                <span className="features-slider-text1">
                  Compliance Specific Dashboard
                </span>
                <span className="features-slider-text2">
                  Stay Compliant With Ease Using Our Compliance Specific
                  Dashboard, Tailored To Track And Report On Regulatory
                  Requirements, Ensuring Your Organization.
                </span>
              </div>
              </div>
            
            </div>
            <div className="features-slider-content">
              <div className="features-slider-content-inner">
              <div className="features-slider-header-container">
                <span
                  className="features-slider-header"
                  style={{ color: "#20C58B" }}
                >
                  Effective Suppress Management
                </span>
              </div>
              <div className="features-slider-middel-container">
                <img src={suppress} alt=""  width={110} />
              </div>
              <div className="features-slider-bottom">
                <span className="features-slider-text1">
                  Workflow For Suppress Security Findings
                </span>
                <span className="features-slider-text2">
                  Streamline Your Threat Response With Effective Suppress
                  Management, A Powerful Tool To Identify, Prioritize, And
                  Mitigate Security Incidents.
                </span>
              </div>
              </div>
           
            </div>
            <div className="features-slider-content">
              <div className="features-slider-content-inner">
              <div className="features-slider-header-container">
                <span
                  className="features-slider-header"
                  style={{ color: "#7F77EF" }}
                >
                  Inventory Management Dashboard
                </span>
              </div>
              <div className="features-slider-middel-container">
                <img src={inventory} alt=""  width={110}/>
              </div>
              <div className="features-slider-bottom">
                <span className="features-slider-text1">
                  Inventory Management
                </span>
                <span className="features-slider-text2">
                  Take Control Of Your Digital Assets With Our Inventory
                  Management Solution, Empowering You To Monitor And Manage Your
                  Cloud Resources Efficiently And Optimize Utilization.
                </span>
              </div>

              </div>
             
            </div>
            <div className="features-slider-content">
              <div className="features-slider-content-inner">
              <div className="features-slider-header-container">
                <span
                  className="features-slider-header"
                  style={{ color: "#E276E2" }}
                >
                  Access Control Dashboard
                </span>
              </div>
              <div className="features-slider-middel-container">
                <img src={accesscontrol} alt="" width={70} />
              </div>
              <div className="features-slider-bottom">
                <span className="features-slider-text1">Access Control</span>
                <span className="features-slider-text2">
                  Robust And Granular Permissions For Cloud Resources,
                  Bolstering Security Layers And Preventing Unauthorized Entry
                  To Critical Data And Resources
                </span>
              </div>
              </div>
           
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Features;

// const SliderCard = ({ title, imageUrl, description }) => {
//   return (
//     <div className="feature-slider-card">
//       <div className="features-slider-header">{title}</div>
//       <div className="features-slider-img">
//         <img src={imageUrl} alt="" />
//       </div>
//       <div className="features-slider-des">{description}</div>
//     </div>
//   );
// };
