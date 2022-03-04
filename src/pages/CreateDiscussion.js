import React from 'react';
import Nav from '../components/Nav';

export default function CreateDiscussion() {
  return (
    <>
      <Nav />
      <form>
        <h3>Start a Discussion</h3>
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
        {/* <select name="qn_type">
          <option>Choose question type</option>
          <option>True or False</option>
          <option>Multiple Choice</option>
        </select> */}
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
        <div>
          <textarea type="text" name="description" placeholder="Description" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
