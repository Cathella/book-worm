import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../components/Nav/logo.svg';
import child from './child-image.svg';
import './Home.css';

export default function Home() {
  return (
    <div className="main" style={{ background: '#FDF8F9' }}>
      <header>
        <nav>
          <Link to="/">
            <img src={logo} alt="HomeSchool" />
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <div className="content">
        <div className="row intro">
          <div className="col-md-5">
            <section className="get-started">
              <h1 className="fw-bold">
                Organized video lessons for your child’s learning
                <span>.</span>
              </h1>
              <p className="mt-4 text-muted">Sign up for customized learning and access to discussions, tests and quizzes.</p>
              <div className="mt-4">
                <Link to="/register" className="btn get-started-btn me-5">Get Started</Link>
                <Link to="/login" className="text-dark upscale-link px-4 fw-bold pb-1">Upscale</Link>
              </div>
            </section>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="mt-5">
              <img src={child} alt="Child" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
