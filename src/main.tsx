import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from 'axios';

axios.defaults.baseURL = 'https://gorest.co.in/';
axios.defaults.params = {};
axios.defaults.headers.common['Authorization'] = 'Bearer ' + import.meta.env.VITE_API_KEY;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
