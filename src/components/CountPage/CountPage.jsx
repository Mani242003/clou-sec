import React,{useState} from "react";
import "./CountPage.css";
import { Link } from "react-scroll";
import ovalShape from "../../assets/Ellipse 4.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const CountPage = () => {
  const [counterOn, setcounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
    <section className="countPage-wrapper">
      <div className="countPage-container">
        <div className="countPage-circleTop"></div>
        <div className="countPage-main-content">
          <div className="countPage-left-container">
            <span className="countpage-left-text-1">
              Actionable Reports to Grow your Business
            </span>

            <span className="countpage-left-text-2">
              Conveniently syndicate client-centric users for transparent
              scenarios. Uniquely evolve partnerships rather than cross-platform
              interfaces.
            </span>
            <Link>
              <button className="countpage-left-button">Get start Now !</button>
            </Link>
          </div>
          <div className="countPage-right-container">
            <div className="countPage-right-oval-circle">
              <img src={ovalShape} alt="" />
            </div>
            <div className="countPage-right-count-container1 countPage-right-count-container">
              <span className="countPage-right-count-content-text1">{counterOn &&  <CountUp start={0} end={9} duration={6} delay={0} />} / 10</span>
              <span className="countPage-right-count-content-text2">
                Overall our customer satisfaction score
              </span>
            </div>
            <div className="countPage-right-count-container2  countPage-right-count-container">
              <span className="countPage-right-count-content-text1">{counterOn &&  <CountUp start={0} end={95} duration={15} delay={0} />} %</span>
              <span className="countPage-right-count-content-text2">
                Our Customer customer satisfaction score
              </span>
            </div>
            <div className="countPage-right-count-container3  countPage-right-count-container ">
              <span className="countPage-right-count-content-text1">{counterOn &&  <CountUp start={0} end={30} duration={10} delay={0} />} +</span>
              <span className="countPage-right-count-content-text2">
              Happy customer in worldwide
              </span>
            </div>
          </div>
        </div>

        <div className="countPage-circlebottom"></div>
      </div>
    </section>
    </ScrollTrigger>
  );
};

export default CountPage;
