// import our component
import TodoList from './components/TodoList';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';



function App() {

  return (
    // use a fragment (empty element) to return the elements nested within
    <>
      <HeaderComponent/>
      <LandingPage/>
      <TodoList/>
      <FooterComponent/>
    </>
  );
}

export default App;
