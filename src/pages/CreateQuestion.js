import React from 'react';
import Nav from '../components/Nav';

export default function CreateQuestion() {
  return (
    <div>
      <Nav />
      <form>
        <h3>Add a Question</h3>
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
        <select name="qn_type">
          <option>Choose question type</option>
          <option>True or False</option>
          <option>Multiple Choice</option>
        </select>
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
        <input type="text" name="incorrect_answer_1" placeholder="Incorrect answer One" />
        <input type="text" name="incorrect_answer_2" placeholder="Incorrect answer Two" />
        <input type="text" name="incorrect_answer_3" placeholder="Incorrect answer Three" />
        <input type="text" name="correct_answer" placeholder="Correct Answer" />
        <input type="text" name="info" placeholder="About this question" />
        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
}
