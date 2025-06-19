// src/components/ProjectCard.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, githubLink }) => {
  return (
    <div className="project-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="tech-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="tag">{tech}</span>
        ))}
      </div>
      <a 
        href={githubLink} 
        className="github-link"
        target="_blank" 
        rel="noreferrer"
      >
        <FaGithub /> View Code
      </a>
    </div>
  );
};

export default ProjectCard;