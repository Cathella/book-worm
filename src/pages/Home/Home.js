import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import logo from '../../components/Nav/logo.svg';
import child from './child-image.svg';
import maths from './maths.svg';
import science from './science.svg';
import sst from './sst.svg';
import eng from './eng.svg';
import dashboard from './dashboard.svg';
import features from './features-icon.svg';
import discussion from './discussion.svg';
import scores from './quiz-scores.svg';
import popOne from './pop-1.svg';
import popTwo from './pop-2.svg';
import popThree from './pop-3.svg';
import popFour from './pop-4.svg';
import popFive from './pop-5.svg';
import popSix from './pop-6.svg';
import './Home.css';

export default function Home() {
  const subjectDiv = useRef();
  const lessonDiv = useRef();

  const scrollRight = () => {
    subjectDiv.current.scrollBy(subjectDiv.current.childNodes[0].offsetWidth, 0);
  };

  const scrollRight2 = () => {
    lessonDiv.current.scrollBy(lessonDiv.current.childNodes[0].offsetWidth, 0);
  };

  const scrollLeft = () => {
    subjectDiv.current.scrollBy(subjectDiv.current.childNodes[0].offsetWidth * -1, 0);
  };

  const scrollLeft2 = () => {
    lessonDiv.current.scrollBy(lessonDiv.current.childNodes[0].offsetWidth * -1, 0);
  };

  return (
    <div className="home-app" style={{ background: '#FDF8F9' }}>
      <section className="header">
        <div className="nav d-flex align-items-center justify-content-between">
          <Link to="/" className="logo-img">
            <img src={logo} alt="HomeSchool" />
          </Link>
          <span>
            <Link to="/register" className="upscale-link btn text-dark">Register</Link>
          </span>
        </div>
      </section>
      <div className="intro">
        <div className="row">
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
          <div className="col-md-6 ms-auto">
            <div className="mt-5">
              <img src={child} alt="Child" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-one">
        <div className="mb-5">
          <div className="mt-4 d-flex justify-content-center align-items-center">
            <div id="previousButtonContainer">
              <div
                onClick={scrollLeft}
                onKeyPress={scrollLeft}
                role="button"
                tabIndex="0"
                id="previousButton"
              >
                <FaArrowLeft />
              </div>
            </div>
            <div className="row pb-5" id="mainDiv" ref={subjectDiv}>
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
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <section className="d-flex features-header justify-content-center align-items-center">
          <img src={features} alt="" />
          <h2 className="fw-bold ms-3">Features</h2>
        </section>
        <section className="feat-one">
          <div className="row">
            <div className="col-md-5">
              <div>
                <h2 className="fw-bold mt-5">Customized dashboard to show learning progress</h2>
                <p className="text-muted mt-4">
                  Sign up for customized learning and access to discussions,
                  tests and quizzes.
                </p>
                <div className="mt-4">
                  <Link to="/register" className="btn get-started-btn">Register Child</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mx-auto">
              <div>
                <img src={dashboard} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="feat-one pt-5 mt-5">
        <div className="row ">
          <div className="col-md-6 me-auto">
            <div>
              <img src={discussion} alt="" />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h2 className="fw-bold mt-5 pt-5">Live Discussions about a topic or completed lesson</h2>
              <p className="text-muted mt-4">
                Start a discussion about a topic or a lesson you just watched.
              </p>
              <div className="mt-4">
                <Link to="/register" className="btn get-started-btn">Become a Teacher</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-two">
        <div className="features">
          <section className="feat-one">
            <div className="row">
              <div className="col-md-5">
                <div>
                  <h2 className="fw-bold mt-5">Test examinations and Quizzes.</h2>
                  <p className="text-muted mt-4">
                    Students can try out practise examinations to know how much they have learned.
                  </p>
                  <div className="mt-4">
                    <Link to="/register" className="btn get-started-btn">Attempt Quiz</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div>
                  <img src={scores} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="d-flex features-header justify-content-center align-items-center">
            <h2 className="fw-bold text-dark">Popular Lessons</h2>
          </section>
          <div className="">
            <div className="d-flex justify-content-center mb-4">
              <div id="previousButtonContainer">
                <div
                  onClick={scrollLeft2}
                  onKeyPress={scrollLeft2}
                  role="button"
                  tabIndex="0"
                  id="previousButton"
                >
                  <FaArrowLeft />
                </div>
              </div>
              <div id="nextButtonContainer">
                <div
                  onClick={scrollRight2}
                  onKeyPress={scrollRight2}
                  role="button"
                  tabIndex="0"
                  id="nextButton"
                >
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center">
              <div className="pb-5" id="mainDiv2" ref={lessonDiv}>
                <div className="col-md-2">
                  <img src={popOne} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popTwo} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popThree} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popFour} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popFive} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popSix} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popTwo} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popThree} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popFour} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popFive} alt="" />
                </div>
                <div className="col-md-2">
                  <img src={popSix} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4 text-center text-white">
        <small>All Rights Reserved. &copy; 2022 Homeschool - UG</small>
      </footer>
    </div>
  );
}
