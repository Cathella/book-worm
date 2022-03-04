import React from 'react';
import Nav from '../components/Nav';

export default function Dashboard() {
  return (
    <div>
      <Nav />
      <div>
        <h3>Latest Lessons</h3>
        <div>Lessons</div>
      </div>
      <div>
        <h3>Latest Discussions</h3>
        <div>Discussions</div>
      </div>
      <div>
        <h3>Practise Quizzes</h3>
        <div>Quizzes</div>
      </div>
    </div>
  );
}
