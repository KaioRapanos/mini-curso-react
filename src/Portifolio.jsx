import React from 'react';
import './Portifolio.css'  

// Componente de projeto
const Project = ({ title, description, screenshots, demoLink }) => (
  <div className="project">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="screenshots">
      {screenshots.map((screenshot, index) => (
        <img key={index} src={screenshot} alt={`Screenshot ${index}`} />
      ))}
    </div>
    <a href={demoLink} target="_blank" rel="noopener noreferrer">Ver demonstração</a>
  </div>
);

// Componente principal do portfólio
const Portfolio = () => (
  <div className="portfolio">
    <div></div>
    <div className="welcome">
      <h1>Bem-vindo ao meu portfólio!</h1>
      <p>Explore minha jornada profissional abaixo</p>
    </div>
    <div className="map">
      {/* Mapa interativo */}
      {/* Implemente aqui um mapa interativo com marcadores para cada projeto */}
    </div>
    <div className="projects">
      {/* Projetos */}
      <Project
        title="Projeto 1"
        description="Descrição do Projeto 1..."
        screenshots={["screenshot1.png", "screenshot2.png"]}
        demoLink="https://example.com/demo1"
      />
      <Project
        title="Projeto 2"
        description="Descrição do Projeto 2..."
        screenshots={["screenshot3.png", "screenshot4.png"]}
        demoLink="https://example.com/demo2"
      />
      {/* Adicione mais projetos conforme necessário */}
    </div>
    <div className="avatar">
      {/* Avatar 3D */}
      {/* Implemente aqui um avatar 3D interativo */}
    </div>
    <div className="blog">
      <h2>Meu Blog</h2>
      <p>Compartilhando minhas experiências e insights...</p>
      {/* Adicione aqui uma seção de posts do blog */}
    </div>
  </div>
);

export default Portfolio;