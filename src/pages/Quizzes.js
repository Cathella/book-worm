import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

export default function Quizzes() {
  return (
    <div>
      <Nav />
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
    </div>
  );
}
