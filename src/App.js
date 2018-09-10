import React from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <p>Basic</p>
        </Link>
        <Link to="/todo">
          <p>Todo</p>
        </Link>
        <Link to="/sort">
          <p>Sort</p>
        </Link>
        <Link to="/draggable">
          <p>Draggable</p>
        </Link>
      </nav>
      {routes}
    </div>
  );
}

export default App;
