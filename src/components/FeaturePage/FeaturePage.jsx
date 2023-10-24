import React,{useRef,useEffect} from "react";
import "./FeaturePage.css";
import accesscontrol from "../../assets/features/accesscontrol.svg";
import insights from "../../assets/features/insights.svg";
import compliance from "../../assets/features/compliance.svg";
import suppress from "../../assets/features/suppress.svg";
import inventory from "../../assets/features/inventory.svg";
import servicesdummyit from "../../assets/features/bookmark-services.svg";
import {motion,useInView,useAnimation} from "framer-motion";


import { BsFillRecord2Fill } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";

const FeaturePage = () => {
  const ref =useRef(null)
  const isView =useInView(ref,{once:false})
 const mainControls=useAnimation()
  useEffect(()=>{
    if(isView){
      mainControls.start('visible')
    }
  },[isView])
 
  return (
    <section className="FeaPage-wrapper" id="fea">
      <div className="FeaPage-Container" ref={ref}>
        <div className="feaPage-header">
          <span className="feaPage-header-text1">
            Explore Our Product Features
          </span>
          <span className="feaPage-header-text2">
            Best Features Grow Your Business Value
          </span>
          <span className="feaPage-header-text3">
            Globally actualize cost effective with resource maximizing
            leadership skills.
          </span>
        </div>
        <motion.div   variants={{
            hidden:{opacity:0,y:-75},
            visible:{opacity:1,y:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}} className="feaPage-main-content" >
          <div className="feaPage-col-1">
            <div className="feaPage-col-1-img-container">
              <img src={servicesdummyit} alt="" />
            </div>
            <span className="feaPage-col-1-text-1"> Advanced features </span>
            <span className="feaPage-col-1-text-2">
              Synergistically pursue accurate initiatives without economically
              sound imperatives. Professionally architect unique process
              improvements via optimal.
            </span>
            <span className="feaPage-col-1-text-3"> Included with...</span>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />

              <span className="feaPage-col-1-text-4">Access Control</span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">
                Executive Security Dashboard
              </span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">Compliance Dashboard</span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">
                Effective Suppress Management
              </span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">Inventory Management</span>
            </div>
          </div>
          <div className="feaPage-main-col-2">
            <div className="feaPage-col-2-top-container">
              <div
                className="feaPage-col-1-img-container"
                style={{
                  background: "#E3C6E8",
                  width: "4rem",
                  height: "4rem",
                }}
              >
                <img
                  src={accesscontrol}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <span className="feaPage-col-1-text-1"> Access Control </span>
              <span className="feaPage-col-1-text-2">
                Robust And Granular Permissions For Cloud Resources, Bolstering
                Security Layers
              </span>
              <div className="feaPage-col-2-top-bottom-container">
                <span className="feaPage-col-2-text-4">View Detials</span>
                <IoMdArrowRoundForward color="#64748B" size={24} />
              </div>
            </div>
            <div className="feaPage-col-2-bottom-container">
              <div
                className="feaPage-col-1-img-container"
                style={{
                  background: "#EDE7D1",
                  width: "4rem",
                  height: "4rem",
                }}
              >
                <img
                  src={compliance}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                />
              </div>
              <span className="feaPage-col-1-text-1">Compliance Dashboard</span>
              <span className="feaPage-col-1-text-2">
                Stay Compliant With Ease Using Our Compliance Specific
                Dashboard, Tailored To Track And Report
              </span>
              <div className="feaPage-col-2-bottom-bottom-container">
                <span className="feaPage-col-2-text-4">View Detials</span>
                <IoMdArrowRoundForward color="#64748B" size={24} />
              </div>
            </div>
          </div>
          <div className="feaPage-main-col-2">
            <div className="feaPage-col-2-top-container">
              <div
                className="feaPage-col-1-img-container"
                style={{
                  background: "#B7B4E9",
                  width: "4rem",
                  height: "4rem",
                }}
              >
                <img
                  src={inventory}
                  alt=""
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
              </div>
              <span className="feaPage-col-1-text-1">
                {" "}
                Inventory Management
              </span>
              <span className="feaPage-col-1-text-2">
                Take Control Of Your Digital Assets With Our Inventory
                Management Solution,A Powerful Tool To Identify, Prioritize,
              </span>
              <div className="feaPage-col-2-top-bottom-container">
                <span className="feaPage-col-2-text-4">View Detials</span>
                <IoMdArrowRoundForward color="#64748B" size={24} />
              </div>
            </div>
            <div className="feaPage-col-2-bottom-container">
              <div
                className="feaPage-col-1-img-container"
                style={{
                  background: "#BAF1E0",
                  width: "4rem",
                  height: "4rem",
                }}
              >
                <img
                  src={suppress}
                  alt=""
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
              </div>
              <span className="feaPage-col-1-text-1">
                {" "}
                Effective Suppress Management{" "}
              </span>
              <span className="feaPage-col-1-text-2">
                Streamline Your Threat Response With Effective Suppress
                Management
              </span>
              <div className="feaPage-col-2-bottom-bottom-container">
                <span className="feaPage-col-2-text-4">View Detials</span>
                <IoMdArrowRoundForward color="#64748B" size={24} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturePage;
