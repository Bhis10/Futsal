import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import './index.css';
import App from './App';
import Showcase from './Showcase';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
  <Menu/>
  <App />
  <Showcase/>
  <Footer/>
  </React.StrictMode>,
  
  document.getElementById('root')
);

