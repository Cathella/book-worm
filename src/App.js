import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Discussions from './pages/Discussions/Discussions';
import Lessons from './pages/Lessons/Lessons';
import Quizzes from './pages/Quizzes/Quizzes';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import CreateQuestion from './pages/Quizzes/CreateQuestion';
import CreateDiscussion from './pages/Discussions/CreateDiscussion';
import CreateLesson from './pages/Lessons/CreateLesson';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/quizzes" element={<Quizzes />} />
        <Route exact path="/add-question" element={<CreateQuestion />} />
        <Route exact path="/lessons" element={<Lessons />} />
        <Route exact path="/add-lesson" element={<CreateLesson />} />
        <Route exact path="/discussions" element={<Discussions />} />
        <Route exact path="/start-discussion" element={<CreateDiscussion />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
