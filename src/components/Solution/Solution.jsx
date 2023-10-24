import React, { useRef, useEffect } from "react";
import "./Solution.css";
import Lottie from "lottie-react";
import solutionLotiee1 from "../../assets/solution/solutionLotiee1.json";
import lotiee4 from "../../assets/solution/lotiee4.json";
import soutionLotiee2 from "../../assets/solution/soutionLotiee-2.json";
import lotiee5 from "../../assets/solution/lotiee5.json";
import { Link } from "react-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion, useInView, useAnimation } from "framer-motion";

const Solution = () => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isView) {
      mainControls.start("visible");
    }
  }, [isView]);
  return (
    <section className="solution-wrapper" id="solution">
      <div className="solution-container">
        <div className="solution-header">
          <span className="solution-header-text">
            Why Choose Clousec for Unbeatable <br /> Cloud Security?
          </span>
        </div>
        <div className="solution-main-content-container">
          <div
            ref={ref}
            className="solution-main-content "
            style={{ background: "#E4F6EF" }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              className="solution-main-content-left "
            >
              <span
                className="solution-left-content-text1"
                style={{ color: "#5AA8B2" }}
              >
                Centralized Security Findings Visibility
              </span>
              <span className="solution-left-content-text2">
                Centralized Security Findings
                <br />
                Visibility
              </span>
              <span className="solution-left-content-text3">
                Centralized security findings visibility is a critical aspect of
                modern cybersecurity and risk management strategies. It involves
                aggregating, monitoring, and analyzing security-related data and
                incidents from various sources across an organization's IT
                infrastructure. This centralized approach provides a
                comprehensive and unified view of an organization's security
                posture. It allows security teams to detect, investigate, and
                respond to threats more efficiently.
              </span>
              <div className="solution-left-content-bottom">
                <Link to="mainPage">
                  <span className="solution-left-content-text4">
                    Learn more
                  </span>
                </Link>
                <AiOutlineArrowRight />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="solution-main-content-right"
            >
              <div className="solution-lottie-container">
                <Lottie animationData={solutionLotiee1} />
              </div>
            </motion.div>
          </div>
          <div
            className="solution-main-content"
            style={{ background: "#FEF6D6" }}
          >
            <div className="solution-main-content-right">
              <div className="solution-lottie-container solution-modified-lottie">
                <Lottie animationData={lotiee5} />
              </div>
            </div>
            <div className="solution-main-content-left">
              <span
                className="solution-left-content-text1"
                style={{ color: "#A3894E" }}
              >
                Compliance and Audit Readiness
              </span>
              <span className="solution-left-content-text2">
                Compliance and Audit <br />
                Readiness
              </span>
              <span className="solution-left-content-text3">
                Compliance and audit readiness are integral aspects of
                contemporary business operations. Compliance refers to the
                adherence to regulatory standards, industry-specific guidelines,
                and internal policies. Organizations must remain compliant with
                these requirements to ensure ethical practices, data security,
                and legal obligations are met. Being audit-ready, on the other
                hand, signifies an organization's state of preparedness to
                undergo audits by external or internal parties. Achieving and
                maintaining compliance and audit readiness necessitates
                meticulous record-keeping, stringent internal controls, and an
                unwavering commitment to upholding industry standards.
              </span>
              <div className="solution-left-content-bottom">
                <Link to="mainPage">
                  <span className="solution-left-content-text4">
                    Learn more
                  </span>
                </Link>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div
            className="solution-main-content"
            style={{ background: "#E4F6EF" }}
          >
            <div className="solution-main-content-left">
              <span
                className="solution-left-content-text1"
                style={{ color: "#5AA8B2" }}
              >
                Effective Workflow for Suppressing
                <br />
                Security Findings
              </span>
              <span className="solution-left-content-text2">
                Effective Workflow for Suppressing
                <br />
                Security Findings
              </span>
              <span className="solution-left-content-text3">
                Creating an effective workflow for suppressing security findings
                is a crucial element of modern cybersecurity operations. In the
                digital age, where organizations face an ever-increasing number
                of security alerts and findings, it's essential to streamline
                the process of managing and prioritizing these issues. The first
                step in developing an effective workflow is to establish a clear
                and well-documented policy for security finding suppression.
                This policy should outline the criteria for suppressing
                findings, who has the authority to make these decisions, and the
                justifications required for suppression.
              </span>
              <div className="solution-left-content-bottom">
                <Link to="mainPage">
                  <span className="solution-left-content-text4">
                    Learn more
                  </span>
                </Link>
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="solution-main-content-right">
              <div className="solution-lottie-container">
                <Lottie animationData={lotiee4} />
              </div>
            </div>
          </div>
          <div
            className="solution-main-content"
            style={{ background: "#F6FDD6" }}
          >
            <div className="solution-main-content-right">
              <div className="solution-lottie-container">
                <Lottie animationData={soutionLotiee2} />
              </div>
            </div>
            <div className="solution-main-content-left">
              <span
                className="solution-left-content-text1"
                style={{ color: "#6F7730" }}
              >
                Improved Collaboration and Communication Flexibility
              </span>
              <span className="solution-left-content-text2">
                Improved Collaboration and Communication Flexibility
              </span>
              <span className="solution-left-content-text3">
                Improved collaboration and communication flexibility are
                indispensable in the contemporary workplace, characterized by
                remote and distributed teams, diverse work styles, and global
                interactions. Collaboration is the lifeblood of innovation and
                productivity, and for it to thrive, effective communication is
                vital. Modern organizations are recognizing the importance of
                breaking down silos and promoting an environment where teams can
                seamlessly share information, insights, and expertise. This not
                only fosters innovation but also ensures that critical knowledge
                is disseminated throughout the organization.
              </span>
              <div className="solution-left-content-bottom">
                <Link to="mainPage">
                  <span className="solution-left-content-text4">
                    Learn more
                  </span>
                </Link>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
