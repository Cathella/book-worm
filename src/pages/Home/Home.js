import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../components/Nav/logo.svg';
import child from './child-image.svg';
import maths from './maths.svg';
import science from './science.svg';
import sst from './sst.svg';
import eng from './eng.svg';
import features from './features-icon.svg';
import './Home.css';

export default function Home() {
  const mainDiv = useRef();

  const scrollRight = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth * -1, 0);
  };

  return (
    <div className="home-app" style={{ background: '#FDF8F9' }}>
      <section className="header">
        <div className="nav d-flex align-items-center justify-content-between">
          <Link to="/" className="logo-img">
            <img src={logo} alt="HomeSchool" />
          </Link>
          <span>
            <Link to="/login" className="text-muted mx-4 text-decoration-none">Teachers</Link>
            <Link to="/login" className="text-muted mx-4 text-decoration-none">Children</Link>
            <Link to="/register" className="upscale-link btn text-dark">Register</Link>
          </span>
        </div>
      </section>
      <div className="">
        <div className="row intro">
          <div className="col-md-5">
            <section className="get-started">
              <h1 className="fw-bold">
                Organized video lessons for your child’s learning
                <span>.</span>
              </h1>
              <p className="mt-4 text-muted">Sign up for customized learning and access to discussions, tests and quizzes.</p>
              <div className="mt-4">
                <Link to="/register" className="btn get-started-btn">Get Started</Link>
                <Link to="/login" className="text-dark btn upscale-link">Upscale</Link>
              </div>
            </section>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="mt-5">
              <img src={child} alt="Child" />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="mt-4 w-100 d-flex justify-content-between align-items-center">
            <div id="previousButtonContainer">
              <div
                onClick={scrollLeft}
                onKeyPress={scrollLeft}
                role="button"
                tabIndex="0"
                id="previousButton"
              >
                {/* <FaCaretLeft /> */}
              </div>
            </div>
            <div className="row pb-5" id="mainDiv" ref={mainDiv}>
              {/* {doctors} */}
              <div className="col-md-3">
                <img src={maths} alt="" />
              </div>
              <div className="col-md-3">
                <img src={science} alt="" />
              </div>
              <div className="col-md-3">
                <img src={sst} alt="" />
              </div>
              <div className="col-md-3">
                <img src={eng} alt="" />
              </div>
              <div className="col-md-3">
                <img src={maths} alt="" />
              </div>
              <div className="col-md-3">
                <img src={science} alt="" />
              </div>
              <div className="col-md-3">
                <img src={sst} alt="" />
              </div>
            </div>
            <div id="nextButtonContainer">
              <div
                onClick={scrollRight}
                onKeyPress={scrollRight}
                role="button"
                tabIndex="0"
                id="nextButton"
              >
                {/* <FaCaretRight /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="features">
          <section className="d-flex justify-content-center align-items-center">
            <img src={features} alt="" />
            <h2 className="fw-bold ms-3">Features</h2>
          </section>
        </div>
      </div>
    </div>
  );
}
