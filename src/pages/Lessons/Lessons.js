import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Nav from '../../components/Nav/Nav';
import './Lesson.css';

export default function Lessons() {
  const mainDiv = useRef();
  const popularDiv = useRef();
  const interestDiv = useRef();

  const scrollRight = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth * -1, 0);
  };
  const scrollRight2 = () => {
    popularDiv.current.scrollBy(popularDiv.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft2 = () => {
    popularDiv.current.scrollBy(popularDiv.current.childNodes[0].offsetWidth * -1, 0);
  };
  const scrollRight3 = () => {
    interestDiv.current.scrollBy(interestDiv.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft3 = () => {
    interestDiv.current.scrollBy(interestDiv.current.childNodes[0].offsetWidth * -1, 0);
  };

  return (
    <div className="main">
      <Nav />
      <section className="content">
        <div className="d-flex align-items-center justify-content-between py-5">
          <h3 className="fw-bold">Lessons</h3>
          <Link to="/add-lesson" className="start-button">Add Lesson</Link>
        </div>
        <div className="mb-5">
          <section className="border-bottom pb-2 d-flex align-items-end justify-content-between">
            <h3 className="fs-6">
              <small className="py-1 px-2 rounded-badge bg-light-yellow">New Additions</small>
            </h3>
            <div>
              <div id="previousButtonContainer2">
                <div
                  onClick={scrollLeft}
                  onKeyPress={scrollLeft}
                  role="button"
                  tabIndex="0"
                  id="previousButton2"
                >
                  <FaArrowLeft />
                </div>
              </div>
              <div id="nextButtonContainer2">
                <div
                  onClick={scrollRight}
                  onKeyPress={scrollRight}
                  role="button"
                  tabIndex="0"
                  id="nextButton2"
                >
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </section>
          <div className="mt-4 w-100 d-flex justify-content-between align-items-center">
            <div className="row" id="mainDiv" ref={mainDiv}>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <section className="border-bottom pb-2 d-flex align-items-end justify-content-between">
            <h3 className="fs-6">
              <small className="py-1 px-2 rounded-badge bg-light-blue">Popular Lessons</small>
            </h3>
            <div>
              <div id="previousButtonContainer2">
                <div
                  onClick={scrollLeft2}
                  onKeyPress={scrollLeft2}
                  role="button"
                  tabIndex="0"
                  id="previousButton2"
                >
                  <FaArrowLeft />
                </div>
              </div>
              <div id="nextButtonContainer2">
                <div
                  onClick={scrollRight2}
                  onKeyPress={scrollRight2}
                  role="button"
                  tabIndex="0"
                  id="nextButton2"
                >
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </section>
          <div className="mt-4 w-100 d-flex justify-content-between align-items-center">
            <div className="row" id="mainDiv" ref={popularDiv}>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <section className="border-bottom pb-2 d-flex align-items-end justify-content-between">
            <h3 className="fs-6">
              <small className="py-1 px-2 rounded-badge bg-light-pink">You might also be interested in</small>
            </h3>
            <div>
              <div id="previousButtonContainer2">
                <div
                  onClick={scrollLeft3}
                  onKeyPress={scrollLeft3}
                  role="button"
                  tabIndex="0"
                  id="previousButton2"
                >
                  <FaArrowLeft />
                </div>
              </div>
              <div id="nextButtonContainer2">
                <div
                  onClick={scrollRight3}
                  onKeyPress={scrollRight3}
                  role="button"
                  tabIndex="0"
                  id="nextButton2"
                >
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </section>
          <div className="mt-4 w-100 d-flex justify-content-between align-items-center">
            <div className="row" id="mainDiv" ref={interestDiv}>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-5 fw-bold">Learn synonyms in 2 Steps</h2>
                  <div>Primary One (English)</div>
                </section>
                <small className="question bg-white">
                  View Lesson
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
