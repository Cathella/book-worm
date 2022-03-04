import React from 'react';
import Nav from '../../components/Nav/Nav';

export default function CreateLesson() {
  return (
    <div className="main">
      <Nav />
      <div className="content">
        <form>
          <h3>Create a Lesson</h3>
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
          <div>
            <input list="subjects" name="subject" id="subject" placeholder="Subject" />
            <datalist id="subjects">
              <option>Mathematics</option>
              <option>Science</option>
              <option>Social Studies</option>
              <option>English</option>
              <option>Religious Education</option>
              <option>Music</option>
            </datalist>
          </div>
          <input type="text" name="topic" placeholder="Topic" />
          <input type="text" name="youtube_link" placeholder="Lesson Link" />
          <button type="submit">Add Lesson</button>
        </form>
      </div>
    </div>
  );
}
