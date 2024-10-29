// client/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  // Estado para almacenar las tareas obtenidas
  const [tasks, setTasks] = useState([]);

  // Función para obtener las tareas del backend
  
  const obtenerElementos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data); // Almacena las tareas en el estado
    } catch (error) {
      console.error('Error al obtener tareas:', error);
    }
  };

  // Llama a obtenerElementos cuando el componente se monta
  useEffect(() => {
    obtenerElementos();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
