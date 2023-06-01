import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "components/App.jsx";

import Headers from 'components/head/head.js';

import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div class="scrollbar" id="style-3">
        <App/>
				<div class="force-overflow"></div>
		</div>

    </>
    <Headers  />
  </React.StrictMode>
);



