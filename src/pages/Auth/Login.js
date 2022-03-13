import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="form-container">
      <div className="row">
        <section className="col-md-6">
          Hello
        </section>
        <section className="col-md-4 mx-auto">
          <form>
            <h3 className="fs-2 mb-5 fw-bold">Sign into your account</h3>
            <input type="email" name="email" placeholder="Your Email" />
            <input type="password" name="password" placeholder="Enter your password" />
            <div className="text-center mb-3">
              <Link to="/" className="py-1 px-3 bg-light-blue text-decoration-none small-btn text-dark">I forgot my password</Link>
            </div>
            <button type="submit" className="fw-bold">Signin</button>
            <div className="text-center text-muted py-4">Do not have an account?</div>
            <div className="text-center">
              <Link to="/register" className="bg-light-blue d-block text-decoration-none big-btn text-dark">
                <span className="me-4">Register an Account</span>
                <FaArrowRight />
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
