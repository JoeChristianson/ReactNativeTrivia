import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Dash from './pages/Dash';
import Quiz from './pages/Quiz';
import Home from './pages/Home';

const App: React.FC = () => (
  <Provider store={store}>

  <Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dash' element={<Dash></Dash>}></Route>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  </Router>
  </Provider>
)

export default App;
