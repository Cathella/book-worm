import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/lessons">Lessons</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/discussions">Discussions</Link>
      </nav>
    </header>
  );
}
