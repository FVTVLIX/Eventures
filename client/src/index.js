import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lato:wght@300;400&family=Playfair+Display:ital,wght@0,400;0,700;1,900&family=Prata&family=Raleway:ital,wght@0,200;0,400;1,300;1,500&family=Staatliches&display=swap" rel="stylesheet" />
    <App />
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
