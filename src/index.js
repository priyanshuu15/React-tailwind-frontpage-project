import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header/Header';
import Second from './Components/Second/Second';
import Third from './Components/Third/Third';
import Fourth from './Components/Fourth/Fourth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  <Second/>
  <Third/>
  <Fourth/>
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

