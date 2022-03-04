import React from 'react';

export default function Login() {
  return (
    <form>
      <h3>Log into Account</h3>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
