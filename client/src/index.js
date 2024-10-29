// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Renderiza el componente principal "App" en el elemento con id "root"
const root = ReactDOM.createRoot(document.getElementById('root')); // Usa createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);