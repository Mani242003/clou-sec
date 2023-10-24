import React,{useState,useEffect,useRef} from "react";
import "./CountPage.css";
import { Link } from "react-scroll";
import ovalShape from "../../assets/Ellipse 4.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {motion,useInView,useAnimation} from "framer-motion";



const CountPage = () => {
  const [counterOn, setcounterOn] = useState(false)
  const ref =useRef(null)
  const isView =useInView(ref,{once:false})
 const mainControls=useAnimation()
  useEffect(()=>{
    if(isView){
      mainControls.start('visible')
    }
  },[isView])

  return (
    <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
    <section className="countPage-wrapper">
      <div className="countPage-container">
        <div className="countPage-circleTop"></div>
        <div ref={ref} className="countPage-main-content">
          <motion.div   variants={{
            hidden:{opacity:0,y:-75},
            visible:{opacity:1,y:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}} className="countPage-left-container">
            <span className="countpage-left-text-1">
              Actionable Reports to Grow your Business
            </span>

            <span className="countpage-left-text-2">
              Conveniently syndicate client-centric users for transparent
              scenarios. Uniquely evolve partnerships rather than cross-platform
              interfaces.
            </span>
            <Link 
            to="contact"
            spy={true}
            // smooth={true}
            offset={-60}
            duration={600}>
              <button className="countpage-left-button">Get Start Now !</button>
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden:{opacity:0,y:75},
              visible:{opacity:1,y:0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5 ,delay:0.25}} className="countPage-right-container">
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
          </motion.div>
        </div>

        <div className="countPage-circlebottom"></div>
      </div>
    </section>
    </ScrollTrigger>
  );
};

export default CountPage;
