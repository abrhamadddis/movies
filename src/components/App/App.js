import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Routing from '../Routing/Routing';

import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
      <Router>
        <Nav />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
