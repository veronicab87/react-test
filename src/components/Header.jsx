import React, { useState } from "react";
import './Header.css';

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavigation = (section) => {
    // Aquí puedes implementar la lógica de navegación real
    alert(`Navegando a ${section}`);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <header>
      <div className="logo">
        <img
          src="https://oneteamsolutions.in/blogoneteam/wp-content/uploads/2020/05/REACT-JS-KOCHI.png"
          alt="Logo del Blog"
          width="50"
          height="50"
        />
        <h2>My Blog de React</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Inicio</a>
          </li>
          <li>
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">Sobre Nosotros</a>
          </li>
          <li>
            <a href="https://reactjs.org/blog/" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
          <li>
            <a href="https://reactjs.org/community/support.html" target="_blank" rel="noopener noreferrer">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Buscar..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>Buscar</button>
      </div>
    </header>
  );
}

