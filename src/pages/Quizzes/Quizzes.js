import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './Quizzes.css';

export default function Quizzes() {
  return (
    <div className="main">
      <Nav />
      <section className="content">
        <div>
          <Link to="/add-question">Add a Question</Link>
        </div>
        <h2>Quizzes</h2>
        <div>
          <h3>New Quizzes Additions</h3>
          <div>Quizzes</div>
        </div>
        <div>
          <h3>Trending Quizzes</h3>
          <div>Quizzes</div>
        </div>
        <div>
          <h3>You may be interested in</h3>
          <div>Quizzes</div>
        </div>
      </section>
    </div>
  );
}
