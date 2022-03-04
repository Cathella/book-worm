import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Discussions from './pages/Discussions';
import Lessons from './pages/Lessons';
import Quizzes from './pages/Quizzes';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateQuestion from './pages/CreateQuestion';
import CreateDiscussion from './pages/CreateDiscussion';
import CreateLesson from './pages/CreateLesson';

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
