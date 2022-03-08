import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Nav from '../../components/Nav/Nav';
import './Dashboard.css';

export default function Dashboard() {
  const latestDiv = useRef();
  const latestDisc = useRef();
  const quizDiv = useRef();

  const scrollRight = () => {
    latestDiv.current.scrollBy(latestDiv.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft = () => {
    latestDiv.current.scrollBy(latestDiv.current.childNodes[0].offsetWidth * -1, 0);
  };
  const scrollRight2 = () => {
    latestDisc.current.scrollBy(latestDisc.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft2 = () => {
    latestDisc.current.scrollBy(latestDisc.current.childNodes[0].offsetWidth * -1, 0);
  };
  const scrollRight3 = () => {
    quizDiv.current.scrollBy(quizDiv.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft3 = () => {
    quizDiv.current.scrollBy(quizDiv.current.childNodes[0].offsetWidth * -1, 0);
  };

  return (
    <div className="main">
      <Nav />
      <section className="content">
        <div className="d-flex align-items-center justify-content-between py-5">
          <h3 className="fw-bold">My Dashboard</h3>
        </div>
        <div className="mb-5">
          <section className="border-bottom pb-2 d-flex align-items-end justify-content-between">
            <h3 className="fs-6">
              <small className="py-1 px-2 rounded-badge bg-light-yellow">Latest Lessons</small>
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
            <div className="row" id="mainDiv" ref={latestDiv}>
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
              <small className="py-1 px-2 rounded-badge bg-light-blue">Latest Discussions</small>
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
            <div className="row" id="mainDiv" ref={latestDisc}>
              <div className="col-md-3">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">Primary One</h2>
                  <div>Mathematics</div>
                  <small>(Fractions)</small>
                </section>
                <small className="question bg-white">
                  What do you understand by Photosynthesis?
                </small>
              </div>
              <div className="col-md-3">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">Primary One</h2>
                  <div>Mathematics</div>
                  <small>(Fractions)</small>
                </section>
                <small className="question bg-white">
                  What do you understand by Photosynthesis?
                </small>
              </div>
              <div className="col-md-3">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">Primary One</h2>
                  <div>Mathematics</div>
                  <small>(Fractions)</small>
                </section>
                <small className="question bg-white">
                  What do you understand by Photosynthesis?
                </small>
              </div>
              <div className="col-md-3">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">Primary One</h2>
                  <div>Mathematics</div>
                  <small>(Fractions)</small>
                </section>
                <small className="question bg-white">
                  What do you understand by Photosynthesis?
                </small>
              </div>
              <div className="col-md-3">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">Primary One</h2>
                  <div>Mathematics</div>
                  <small>(Fractions)</small>
                </section>
                <small className="question bg-white">
                  What do you understand by Photosynthesis?
                </small>
              </div>
              <div className="col-md-3">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">Primary One</h2>
                  <div>Mathematics</div>
                  <small>(Fractions)</small>
                </section>
                <small className="question bg-white">
                  What do you understand by Photosynthesis?
                </small>
              </div>
              <div className="col-md-3">
                <section className="carrd">
                  <h2 className="fs-4 fw-bold">Primary One</h2>
                  <div>Mathematics</div>
                  <small>(Fractions)</small>
                </section>
                <small className="question bg-white">
                  What do you understand by Photosynthesis?
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <section className="border-bottom pb-2 d-flex align-items-end justify-content-between">
            <h3 className="fs-6">
              <small className="py-1 px-2 rounded-badge bg-light-pink">Practice Quizzes</small>
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
            <div className="row" id="mainDiv" ref={quizDiv}>
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
          </div>
        </div>
      </section>
    </div>
  );
}
