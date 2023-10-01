import "./RoadMap.css";
import aws from "../../assets/roadmap/aws.png";
import EC2 from "../../assets/roadmap/EC2.png";
import azure from "../../assets/roadmap/azure.png";
import cloudIaac from "../../assets/roadmap/cloudIaac.png";
import googlecloud from "../../assets/roadmap/google-cloud.png";
import cloudTrail from "../../assets/roadmap/cloudTrail.png";
import {BsFillCalendarFill} from "react-icons/bs"

const RoadMap = () => {
  return (
    <section className="r-wraper " id="roadMap">
      {/* <div className="roadmap-circle1"></div>
      <div className="roadmap-circle2"></div>
      <div className="roadmap-circle3"></div>
      <div className="roadmap-circle4"></div> */}


      <div className="r-header-titel">
        <span className="primaryText r-header">
          Elevating Cloud Security to<br/> New Horizons
        </span>
      </div>
      

      <div className="r-timeLine-container" >
        <div className="r-container r-left-container" >
          <img src={aws} alt="" className="r-left-outerImg" />
          <div className="textBoxContainer" style={{ background: "#E4F6EF" }}>
            <div className="textBoxContainer-left" style={{ background: "#E4F6EF" }}>
              <img src={aws} alt="" />
              <small className="r-date"><BsFillCalendarFill  /> SEP,2023</small>
            </div>
            <div className="textBoxContainer-right" >
              <p className="r-dec" style={{ color: "#5AA8B2" }}>
                AWS Identity Center Dashboard implementation
              </p>
              <span className="left-container-arrow left-container-arrow-modified-1" ></span>
            </div>
          </div>
        </div>

        <div className="r-container r-right-container">
          <img src={EC2 } alt="" className="r-left-outerImg" />

          <div className="textBoxContainer" style={{ background: "#F6FDD6" }}>
            <div className="textBoxContainer-right">
              <p className="r-dec" style={{ color: "#6F7730" }}>EC2 and EKS dashboard</p>
              <span className="right-container-arrow right-container-arrow-modified-2" ></span>
            </div>
            <div className="textBoxContainer-left" style={{ background: "#F6FDD6" }}>
              <img src={EC2 } alt="" />
              <small className="r-date" ><BsFillCalendarFill   /> OCT,2023</small>
            </div>

            {/* <small className="r-date"></small>
            <p className="r-dec">EC2 and EKS dashboard</p> */}
          </div>
        </div>

        <div className="r-container r-left-container">
          <img
            src={cloudIaac}
            alt=""
            className="r-left-outerImg"
          />

          <div className="textBoxContainer"   style={{ background: "#FEF6D6" }}>
            <div className="textBoxContainer-left" style={{ background: "#FEF6D6" }}>
              <img src={cloudIaac} alt="" />
              <small
                className="r-date"
              >
                <BsFillCalendarFill  /> NOV,2023
              </small>
            </div>
            <div className="textBoxContainer-right">
              <p className="r-dec" style={{ color: "#A3894E" }}>
                AWS Identity Center Dashboard implementation
              </p>
              <span className="left-container-arrow left-container-arrow-modified-3" ></span>
            </div>
          </div>
        </div>

        <div className="r-container  r-right-container">
          <img
            src={cloudTrail}
            alt=""
            className="r-left-outerImg"
          />

          <div className="textBoxContainer" style={{ background: "#E4F6EF" }}>
            <div className="textBoxContainer-right">
              <p className="r-dec" style={{ color: "#5AA8B2" }}>Cloud Trail Analytics</p>
            </div>
            <div className="textBoxContainer-left" style={{ background: "#E4F6EF" }}>
              <img src={cloudTrail} alt="" />
              <small className="r-date" ><BsFillCalendarFill  /> DEC,2023</small>
              <span className="right-container-arrow right-container-arrow-modified-4" ></span>
            </div>
          </div>
        </div>

        <div className="r-container r-left-container" >
          <img src={azure} alt="" className="r-left-outerImg" />

          <div className="textBoxContainer" style={{ background: "#F6FDD6" }} >
            <div className="textBoxContainer-left" style={{ background: "#F6FDD6" }}>
              <img src={azure} alt="" />
              <small className="r-date"><BsFillCalendarFill  /> MAR,2024</small>
            </div>
            <div className="textBoxContainer-right">
              <p className="r-dec " style={{ color: "#6F7730" }}>Azure Integration</p>
              <span className="left-container-arrow left-container-arrow-modified-5" ></span>
            </div>
          </div>
        </div>

        <div className="r-container  r-right-container" >
          <img
            src={googlecloud}
            alt=""
            className="r-left-outerImg"
          />

          <div className="textBoxContainer" style={{ background: "#FEF6D6" }}>
            <div className="textBoxContainer-right">
              <p className="r-dec " style={{ color: "#A3894E" }}>GCP Integration</p>
              <span className="right-container-arrow right-container-arrow-modified-6"></span>
            </div>
            <div className="textBoxContainer-left" style={{ background: "#FEF6D6" }}  >
              <img src={googlecloud} alt="" />
              <small className="r-date"> <BsFillCalendarFill  /> JUL,2024</small>
            </div>
          </div>
        </div>
        {/* <div className="home-annimation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>
      </div>*/}
      </div>
    </section>
  );
};

export default RoadMap;
