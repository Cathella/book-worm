import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import logo from '../../components/Nav/logo.svg';
import './Auth.css';

export default function Register() {
  return (
    <div className="form-container">
      <div className="row">
        <section className="col-md-5 mx-auto">
          <form>
            <div className="form-logo">
              <Link to="/">
                <img src={logo} alt="HomeSchool" />
              </Link>
            </div>
            <div className="who-field">
              <span>
                <input type="radio" id="student" name="student" value="Student" checked />
                Student Account
              </span>
              <span>
                <input type="radio" id="teacher" name="teacher" value="Teacher" />
                Teacher Account
              </span>
            </div>
            <div className="fullName">
              <input type="text" name="first_name" placeholder="First Name" />
              <input type="text" name="last_name" placeholder="Last Name" />
            </div>
            <input type="email" name="email" placeholder="Email" />
            <div>
              <input list="grades" name="grade" id="grade" placeholder="Grade" />
              <datalist id="grades">
                <option>Primary One</option>
                <option>Primary Two</option>
                <option>Primary Three</option>
                <option>Primary Four</option>
                <option>Primary Five</option>
                <option>Primary Six</option>
                <option>Primary Seven</option>
              </datalist>
            </div>
            <input type="password" name="password" placeholder="Password" />
            <button type="submit" className="fw-bold">Signup</button>
            <div className="text-center text-muted py-4">Already have an account?</div>
            <div className="text-center">
              <Link to="/login" className="bg-light-blue d-block text-decoration-none big-btn text-dark">
                <span className="me-4">Access your account here</span>
                <FaArrowRight />
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
