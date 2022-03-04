import React from 'react';

export default function Register() {
  return (
    <form>
      <div>
        I am a
        <span>
          <input type="radio" id="student" name="student" value="Student" checked />
          Student
        </span>
        <span>
          <input type="radio" id="teacher" name="teacher" value="Teacher" />
          Teacher
        </span>
      </div>
      <input type="text" name="first_name" placeholder="First Name" />
      <input type="text" name="last_name" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" />
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
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}
