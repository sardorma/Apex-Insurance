import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/fonts.css';  // Шрифтлар
import './assets/colors.css'; // Ранглар, агар бор бўлса

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

