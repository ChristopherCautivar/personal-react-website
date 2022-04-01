// import our component
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import './App.css';
import HabitTracker from './components/HabitTracker';



function App() {

  return (
    // use a fragment (empty element) to return the elements nested within
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/todolist" element={<TodoList/>}/>
          <Route path="/habittracker" element={<HabitTracker/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
