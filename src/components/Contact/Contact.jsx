import React, { useRef, useState,useEffect } from "react";
import "./contact.scss";
import { IoMdSend } from "react-icons/io";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import emailjs from "emailjs-com";
import { motion, useInView, useAnimation } from "framer-motion";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const isView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isView) {
      mainControls.start("visible");
    }
  }, [isView]);

  const sendEmail = (e) => {
    e.preventDefault();
    if ((name, email, phone, company, message === "")) {
      toast.warn("Required to fill all the field ", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_uzzu3r8",
        "template_xo1li7g",
        e.target,
        "FnSR4424E1UZY3VnZ"
      )
      .then(
        (result) => {
          toast.success("Message Send Successfull", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          toast.warn("Message Send Unsuccessfull", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };
  return (
    <section className="contract_wrapper">
      <div className="contact_container" ref={ref}>
        <motion.div 
         variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        className="contact_box">
          <div className="contact form">
            <span>Ready to Get started ?</span>
            <form onSubmit={sendEmail}>
              <div className="form_box">
                <div className="row50">
                  <div className="inputBox">
                    <span>Name</span>
                    <input
                      type="text"
                      name="user_name"
                      className="contact_input_1"
                      value={name}
                      placeholder="Enter Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="inputBox">
                    <span>Email</span>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Enter Email"
                      className="contact_input_2"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row50">
                  <div className="inputBox">
                    <span>Company Name</span>
                    <input
                      type="text"
                      name="user_company"
                      className="contact_input_4"
                      placeholder="Enter Company"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    />
                  </div>
                  <div className="inputBox">
                    <span>Mobile</span>
                    <PhoneInput
                      placeholder="Your Phone Number"
                      value={phone}
                      className="contact_input_3"
                      name="user_Phone"
                      defaultCountry="IN"
                      onChange={setPhone}
                    />
                    {/* <input
                      type="text"
                      name="user_company"
                      className="contact_input_4"
                      placeholder="Enter Company"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    /> */}
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea
                      name="message"
                      value={message}
                      placeholder="Write Your Message here..."
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Send Message" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="contact info">
            <div className="contactinfoBorder">
              <span className="contact_right_bottom_header">
                India Head Office
              </span>
            </div>
            <span className="contact_right_bottom_des">
              No 52/1, Meenambal Salai, Vivekandhar Nagar, Kodungaiyur, (Near
              S.K Mahal), Chennai – 600118<br/>
              Mobile: 97908 45787, 93453 36553
            </span>
           
          </div>
          <div className="contact map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7556802680433!2d80.1871948!3d12.9874725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e00209a4465%3A0x5e274e9203d8b285!2sStigmata%20Techno%20Solutions!5e0!3m2!1sta!2sin!4v1697789605910!5m2!1sta!2sin"
              allowfullscreen="true"
              loading="lazy"
              width={350}
              style={{border:"0"}}
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ToastContainer />
        </motion.div>

        {/* <div className="contact_left_container">
            <div className="contact_form">
            <form onSubmit={sendEmail}>
            <span> Ready to Get started ?</span>
            <div className="contact_left_input_row1">
              <input
                type="text"
                name="user_name"
                className="contact_input_1"
                value={name}
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter Email"
                className="contact_input_2"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="contact_left_input_row2">
              <PhoneInput
                placeholder="Your Phone Number"
                value={phone}
                className="contact_input_3"

                name="user_Phone"
                defaultCountry="IN"
                onChange={setPhone}
              />
              <input
                type="text"
                name="user_company"
                className="contact_input_4"
                placeholder="Enter Company"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </div>
            <textarea
              name="message"
              className="contact_input_5"
              value={message}
              rows={7}
              placeholder="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <input className="contact_left_bottom_btn" type="submit" value="send Message" />
            <ToastContainer />
          </form>



            </div>
        </div>
        <div className="contact_right_container">
       
          <div className="contact_right_top_container">
            <span className="contact_right_top_header">
              Looking for Excellent Business ideas ?
            </span>
            <span className="contact_right_top_des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quo omnis, voluptas dolorum corrupti quasi adipisci sed
              voluptatibus molestias illo eligendi ad molestiae.
            </span>
            <a href="contact">
              <button>
                Get Started <BsFillArrowRightCircleFill color="white" />{" "}
              </button>
            </a>
          </div>
          <div className="contact_right_bottom_container">
           
          </div>
        
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
