// import our component
import TodoList from './components/TodoList';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import './App.css';
import HabitTracker from './components/HabitTracker';



function App() {

  return (
    // use a fragment (empty element) to return the elements nested within
    <div className='App'>
      <HeaderComponent/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/todolist" element={<TodoList/>}/>
          <Route path="/habittracker" element={<HabitTracker/>}/>
        </Routes>
      </BrowserRouter>
      <FooterComponent/>
    </div>
  );
}

export default App;
