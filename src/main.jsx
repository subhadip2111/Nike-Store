//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './app/Store.js';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={Store}>
      <Toaster position="top-center " reverseOrder={ false} />
      <App />
    </Provider>
  </Router>
);
