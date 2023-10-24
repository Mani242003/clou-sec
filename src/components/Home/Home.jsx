import React,{useEffect,useRef} from "react";
import "./Home.css";
import Lottie from "lottie-react";
import HomeAniRight from "./HomeAnmiRecent.json";
import star from "../../assets/Home/str.json";
import Logo from "../../assets/Home/Logo.png";
import {motion,useInView,useAnimation} from "framer-motion";

import {BsFillArrowRightCircleFill} from "react-icons/bs"

import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function Home() {


  const ref =useRef(null)
  const isView =useInView(ref,{once:false})
 const mainControls=useAnimation()
  useEffect(()=>{
    if(isView){
      mainControls.start('visible')
    }
  },[isView])
 
  
  return (
    <section className="home-wrapper" id="mainPage" >
      <div ref={ref} className="home-container"  >

        <motion.div className="home-left-container" 
          variants={{
            hidden:{opacity:0,y:-75},
            visible:{opacity:1,y:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}}>
          <motion.div

          // variants={{
          //   hidden:{opacity:0,y:75},
          //   visible:{opacity:1,y:0}
          // }}
          // initial="hidden"
          // animate={mainControls}
          // transition={{duration:0.5 ,delay:0.25}}
          
          className="home-title-container">
            <h1 className="home-title-text">
              Your Cloud,
              <br />
              <span className="hom-typeWriter-text">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 300,
                    strings: ["FORTIFIED", "STRENGTH"],
                  }}
                />
              </span>
            </h1>
          </motion.div>

          <div className="home-des-container">
            <span className="home-des-text">
              Welcome to ClouSec, where we bring you a comprehensive solution
              for enhanced security, streamlined inventory management, and
              efficient suppress workflow handling. Our cutting-edge product
              empowers businesses to stay ahead in the ever-evolving landscape
              of security challenges and inventory control.
            </span>
          </div>
          <div className="home-rateUs-container">
            <div className="home-rateUs-top">
              <div className="home-start-lottie">
                <Lottie animationData={star} />
              </div>
              <div className="home-logo-conatiner">
                <img src={Logo} alt="" width={30} />
              </div>
              <span className="home-top-start-text">5.0</span>
            </div>
            <div className="home-rateUs-top">
              <span className="home-bottom-start-text">
                Based on 1000+ customer reviews
              </span>
            </div>
          </div>
          <div className="home-button-container">
            <Link 
            
            to="contact"
            spy={true}
            offset={-70}
            duration={600}
            style={{zIndex:50}}>
              <button className="home-button-left" style={{width:"100%"}} >Get started <BsFillArrowRightCircleFill color="white" size={20} /></button> 
              </Link>
           
            <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={10}
            duration={100}>
            <button className="home-button-right">
              ABOUT US 
            </button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}} className="home-right-container"  >
          <div className="lottie-container">
            <Lottie animationData={HomeAniRight} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export default Home;
