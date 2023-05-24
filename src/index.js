import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Text } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Text />
  </React.StrictMode>
);
