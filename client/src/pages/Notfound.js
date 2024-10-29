// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Página no encontrada</h1>
      <Link to="/">Volver a Inicio</Link>
    </div>
  );
}

export default NotFound;
