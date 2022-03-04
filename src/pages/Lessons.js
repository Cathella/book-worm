import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

export default function Lessons() {
  return (
    <div>
      <Nav />
      <div>
        <Link to="/add-lesson">Add Lesson</Link>
      </div>
      <h2>Lessons</h2>
      <div>
        <h3>New lesson Additions</h3>
        <div>Lessons</div>
      </div>
      <div>
        <h3>Trending Lessons</h3>
        <div>Lessons</div>
      </div>
      <div>
        <h3>You may be interested in</h3>
        <div>Lessons</div>
      </div>
    </div>
  );
}
