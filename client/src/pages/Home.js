// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a la App CRUD</h1>
      <p>Inicia sesión para continuar</p>
      <Link to="/login">Ir a Login</Link>
    </div>
  );
}

export default Home;
