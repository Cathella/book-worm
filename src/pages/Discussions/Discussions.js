import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

export default function Discussions() {
  return (
    <div className="main">
      <Nav />
      <section className="content">
        <div>
          <Link to="/start-discussion">Start Discussion</Link>
        </div>
        <h2>Discussions</h2>
        <div>
          <h3>New Discussions</h3>
          <div>Discussions</div>
        </div>
        <div>
          <h3>Trending Discussions</h3>
          <div>Discussions</div>
        </div>
        <div>
          <h3>You may be interested in</h3>
          <div>Discussions</div>
        </div>
      </section>
    </div>
  );
}
