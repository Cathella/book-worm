import React from 'react';
import './Auth.css';

export default function Register() {
  return (
    <form>
      <h3>Create new Account</h3>
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
      <button type="submit">Register</button>
    </form>
  );
}
