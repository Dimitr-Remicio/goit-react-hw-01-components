import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "components/App.jsx";


import Headers from 'components/head/head.js';
// import Statistics from 'components/Statistics/statistics';


import './index.css';

// import data from './data/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>

    <Headers />
  </React.StrictMode>
);
