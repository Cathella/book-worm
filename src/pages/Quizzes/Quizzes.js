import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './Quizzes.css';

export default function Quizzes() {
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
          <h3 className="fw-bold">Quizzes</h3>
          <Link to="/add-question" className="start-button">Add a Question</Link>
        </div>
        <div className="mb-5">
          <h3 className="fs-6 border-bottom pb-3"><small className="py-1 px-2 rounded-badge bg-light-yellow">Recently Created</small></h3>
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
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
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
          <h3 className="fs-6 border-bottom pb-3"><small className="py-1 px-2 rounded-badge bg-light-blue">Popular Quizzes</small></h3>
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
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
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
          <h3 className="fs-6 border-bottom pb-3"><small className="py-1 px-2 rounded-badge bg-light-pink">Topic Quizzes</small></h3>
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
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
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
          <h3 className="fs-6 border-bottom pb-3"><small className="py-1 px-2 rounded-badge bg-light-yellow">Practice Exams</small></h3>
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
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
                </small>
              </div>
              <div className="col-md-4">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">QUIZ</h2>
                  <div>Primary One (Mathematics)</div>
                  <small>10 Questions</small>
                </section>
                <small className="question bg-white">
                  Attempt Quiz
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
