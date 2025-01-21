import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import Button from "../../properties/Button";
import Image from "./images/2.webp";
import ImageOne from "./images/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { allData, testData } from "../../constants/index";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Home() {
  const [visible, setVisible] = useState(false);

  const [data, setData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const sendcontact = (e) => {
    e.preventDefault();

    if (data.name.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.phone.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.subject.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.message.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    }

    setData({
      name: "",
      phone: "",
      subject: "",
      message: "",
    });

    alert("Thanks for connecting with us");
  };

  //sliding testimonial section

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: slideIndex,
    autoplay: true,
    autoplaySpeed: 30, // Set the duration between slides in milliseconds
    afterChange: (current) => setSlideIndex(current),
  };

  //hereeee

  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.2, // Adjust the threshold as needed
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sectionRefs.current.forEach((sectionRef) => {
      observer.observe(sectionRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="savenest-home">
      <div className="savenest-header" id="home">
        <div className="savenest-logo">
          <img src={ImageOne} alt="logo" />
        </div>
        <div className="savenest-link">
          <ul className="home-list">
            <li className="home-link">
              {/* <a href="#">Home</a> */}
            </li>
            <li className="home-link">
              <a href="#about">About</a>
            </li>
            <li className="home-link">
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </div>
        <div className="savenest-signin">
          <Link to="/signup">
            <Button btnName="SignUp"></Button>
          </Link>
        </div>
        <div className="savenest-humberger">
          {!visible && <MdOutlineMenu onClick={() => setVisible(true)} />}
          {visible && <GrFormClose onClick={() => setVisible(false)} />}
        </div>
      </div>
      {visible && (
        <div className="semi-nav">
          <ul className="semi-nav-list">
            <li className="semi-nav-link">
              <a href="#home">Home</a>
            </li>
            <li className="semi-nav-link">
              <a href="#about">Who we are</a>
            </li>
            <li className="semi-nav-link">
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </div>
      )}
      <div className="savenest-intro" id="about">
        <div className="savenest-secone">
          <h1>
            Track Your  <br /> Transaction
          </h1>
          <div className="respo-image">
            <img src={Image} alt="images" />
          </div>
          <p>
            Welcome to Web-Wallet! We provide a convenient way for saving, whether
            you're an individual or want to be part of a team. Our user-friendly
            interface allows for easy organization and retrieval of your saved
            pages. But that's not all we also offer collaborative features for
            teams.
          </p>
          <a href="#howwork">
            <Button btnName="Explore more"></Button>
          </a>
          <span className="left-arrow">
            <MdOutlineArrowForward />
          </span>
        </div>
        <div className="savenest-sectwo">
          <img src={Image} alt="img" />
        </div>
      </div>
      <div
        className="savenest-home-about slide-up"
        ref={(ref) => (sectionRefs.current[0] = ref)}
      >
        <h1 className="home-about-header">
          Who <span> we are</span>
        </h1>
        <div className="par">
          <p className="home-about-par">
            We strive to help people create and implement financial plans, track
            expenses, and identify areas where they can reduce spending. It
            encourages goal-oriented savings by providing tools to set and track
            financial goals, offering calculators, trackers, and reminders to
            stay on track. Additionally, the website aims to educate users about
            money-saving strategies, investment options, and personal finance
            best practices. Ultimately, the aim is to enable users to take
            control of their finances, develop healthy saving habits, and
            achieve their financial goals through effective planning and smart
            money management.
          </p>
        </div>
      </div>
      <div
        className="savenest-home-work slide-up"
        id="howwork"
        ref={(ref) => (sectionRefs.current[1] = ref)}
      >
        <h1 className="hwork">How it works</h1>
        <div className="savenest-home-cards">
          {allData.map((data) => (
            <div className="home-card">
              <p className="home-number">{data.number}</p>
              <h1 className="home-title">{data.title}</h1>
              <p className="home-description">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="savenest-home-test slide-up"
        ref={(ref) => (sectionRefs.current[2] = ref)}
      >
        <h1 className="home-test-header">Testimonials</h1>
        <slider {...settings}>
          <div className="testimonial-home-intro">
            {testData.map((test) => (
              <div className="all-home-test" key={testData.id}>
                <div className="test-image">
                  <img src={test.image} alt="pict" />
                </div>
                <div className="test-descri">
                  <p className="test-descri-para">{test.description}</p>
                  <br />
                  <h4 className="test-descri-head">{test.name}</h4>
                </div>
                <div className="test-home-icon">
                  <span>
                    <MdArrowForwardIos />
                  </span>
                  <span>
                    <MdArrowBackIosNew />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </slider>
      </div>
      <div
        className="savenest-home-contact slide-up"
        id="connect"
        ref={(ref) => (sectionRefs.current[3] = ref)}
      >
        <h1 className="home-contact-header">Connect with us</h1>
        <div className="both-savenest">
          <div className="contact-home-info">
            <h2 className="contact-home-head">
              We would love to <br /> hear from you
            </h2>
            <p className="contact-home-data">
              Share your feedback with us! We value your thoughts on our
              money-saving website. Contact us today and help us enhance your
              savings experience.
            </p>

            <div className="contact-home-icon">
              <p className="phone-ic">
                <span>
                  <BsFillTelephoneFill />
                </span>{" "}
                (+250)788263772
              </p>
              <p className="email-ic">
                <span>
                  <MdMarkEmailUnread />
                </span>
                webwallet@gmail.com
              </p>
            </div>
          </div>
          <div className="contact-home-form">
            <input
              type="text"
              placeholder="Your Name"
              className="name"
              name="name"
              onChange={handleChange}
              value={data.name}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="phone"
              name="phone"
              onChange={handleChange}
              value={data.phone}
            />
            <br />
            <input
              type="text"
              placeholder="Subject"
              className="subject"
              name="subject"
              onChange={handleChange}
              value={data.subject}
            />
            <br />
            <textarea
              className="message"
              rows="8"
              placeholder="Message"
              name="message"
              onChange={handleChange}
              value={data.message}
            ></textarea>
            <input
              type="submit"
              value="SEND"
              id="send-btn"
              onClick={sendcontact}
            />
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
      <div className="savenest-footer">
        <h1 className="footer-home-header">WebWallet</h1>
        <p className="par-foot">
          Start saving and secure your financial future. Our saving website is
          here to help <br /> you achieve your money-saving goals.
        </p>
        <div className="footer-icons">
          <span>
            <BsFacebook />
          </span>
          <span>
            <BsTwitter />
          </span>
          <span>
            <BsLinkedin />
          </span>
          <span>
            <BsInstagram />
          </span>
        </div>
        <div className="footer-lists">
          <ul className="footer-list">
            <li className="footer-link">Home</li>
            <li className="footer-link">AboutUs</li>
            <li className="footer-link">Connect</li>
          </ul>
        </div>
        <div className="footer-right">@2024 WebWallet | All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Home;
