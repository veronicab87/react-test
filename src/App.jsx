
import React, { useState } from 'react';
import './App.css';
import { articulos } from './components/Utils.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function Article({ articulo }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const resetCounts = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="article">
      <h2>{articulo.titulo}</h2>
      <img src={articulo.urlImagen} alt={articulo.titulo} />
      <p>{articulo.textoCorto}</p>
      <div className="buttons">
        <button onClick={() => setLikes(likes + 1)}>
          <FaThumbsUp /> {likes}
        </button>
        <button onClick={() => setDislikes(dislikes + 1)}>
          <FaThumbsDown /> {dislikes}
        </button>
        <button onClick={resetCounts} className="reset-button">
          Reset
        </button>
      </div>
      <button>{articulo.textoBoton}</button>
    </div>
  );
}

function ChatBox() {
  return (
    <div className="chat-box">
      <h3>Chat</h3>
      <div className="chat-messages">
        {/* Aquí irían los mensajes del chat */}
      </div>
      <input type="text" placeholder="Escribe un mensaje..." />
      <button>Enviar</button>
    </div>
  );
}

function Stories() {
  return (
    <div className="stories">
      <h3>Historias</h3>
      <p className="react-stories">Link Historias de React</p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React Official Website</a>
      <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">React GitHub</a>
      <a href="https://es.legacy.reactjs.org/community/examples.html" target="_blank" rel="noopener noreferrer">React Documentation</a>
      <img src="https://mvpcluster.com/wp-content/uploads/2018/06/R1-300x250.png" alt="Placeholder Image 1" />
    
    </div>
  );
}

function SuggestionsButton() {
  return (
    <button className="suggestions-button">Sugerencias</button>
  );
}

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Stories />
        {articulos.map((articulo, index) => (
          <Article key={index} articulo={articulo} />
        ))}
        <ChatBox />
        <SuggestionsButton />
      </div>
      <Footer />
    </>
  );
}

export default App;


