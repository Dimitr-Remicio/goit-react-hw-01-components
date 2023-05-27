import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import Headers from 'components/head/head.js';

import './index.css';

// import data from './data/data.json';
import user from './data/user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={user}/>


    <Headers />
  </React.StrictMode>
);
