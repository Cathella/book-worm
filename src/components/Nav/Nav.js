import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Nav.css';

export default function Nav() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="HomeSchool" />
        </div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/lessons">Lessons</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/discussions">Discussions</Link>
      </nav>
    </header>
  );
}
