import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

export default function Lessons() {
  const mainDiv = useRef();

  const scrollRight = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth * -1, 0);
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
          <h3 className="fs-6 border-bottom pb-3"><small className="py-1 px-2 rounded-badge bg-light-yellow">New Additions</small></h3>
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
            <div className="row" id="mainDiv" ref={mainDiv}>
              {/* {doctors} */}
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
        <div className="mb-5">
          <h3 className="fs-6 border-bottom pb-3"><small className="py-1 px-2 rounded-badge bg-light-blue">Popular Lessons</small></h3>
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
            <div className="row" id="mainDiv" ref={mainDiv}>
              {/* {doctors} */}
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
        <div className="mb-5">
          <h3 className="fs-6 border-bottom pb-3"><small className="py-1 px-2 rounded-badge bg-light-pink">You might be interested in</small></h3>
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
            <div className="row" id="mainDiv" ref={mainDiv}>
              {/* {doctors} */}
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
      </section>
    </div>
  );
}
