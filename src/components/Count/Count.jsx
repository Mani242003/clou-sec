import React,{useState} from "react";
import "./Count.css";
import CountUp from "react-countup";
import happyCus from "../../assets/count/happyCus.svg" 
import support from "../../assets/count/support.svg" 
import goal from "../../assets/count/goal.svg"
import itServices from "../../assets/count/customer.svg" 
import ScrollTrigger from "react-scroll-trigger";



const Count = () => {
  const [counterOn, setcounterOn] = useState(false)
  return (
    <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
      <section className="count-wrappper">
        <div className="count-container">
          <div className="count-col-1" >
            <div className="count-1-container count-container">
              <div className="count-left">
                <img src={happyCus} alt="" />
              </div>
              <div className="count-right">
              { counterOn &&  <CountUp start={0} end={999} duration={10} delay={0} className="count-right-num" />}
              <span className="count-right-text">Customer Satisfaction</span>
              </div>
            </div>
            <div className="count-2-container count-container">
              <div className="count-left">
              <img src={goal} alt="" />

              </div>
              <div className="count-right">
                {
              
              counterOn &&  <CountUp start={0} end={100} duration={10} className="count-right-num" />
                }
              <span className="count-right-text">Archive Goals</span>
              </div>
            </div>
          </div>
          <div className="count-col-2" >
            <div className="count-3-container count-container">
              <div className="count-left">
              <img src={support} alt="" />

              </div>
              <div className="count-right">
              {counterOn && <CountUp start={0} end={850} duration={10} className="count-right-num" />}
              <span className="count-right-text">Dedicated Support</span>
              </div>
            </div>
            <div className="count-4-container count-container">
              <div className="count-left">
              <img src={itServices} alt="" />


              </div>
              <div className="count-right">
              {counterOn && <CountUp start={0} end={100} duration={10} className="count-right-num" />}
              <span className="count-right-text">Services</span>

              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollTrigger>
  );
};

export default Count;
