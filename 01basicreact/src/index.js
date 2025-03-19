import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './Chai'

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App/>
    <Chai/>
    <h1>hii</h1>
  </React.StrictMode>
)
