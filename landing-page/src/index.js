import React from 'react';
import ReactDOM from 'react-dom';
import ContactBar from './components/ContactBar';
import Navbar from './components/Navbar';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ContactBar/>
    <Navbar/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

