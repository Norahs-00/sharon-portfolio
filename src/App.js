// src/App.js
import React from 'react';
import ProfileCard from './components/ProfileCard';
import SkillList from './components/SkillList';
import ProjectCard from './components/ProjectCard';
import { profileData } from './data'; // ONLY KEEP THIS ONE
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>My Developer Portfolio</h1>
      </header>
      
      <main>
        <ProfileCard 
          name={profileData.name}
          role={profileData.role}
          semester={profileData.semester}
          university={profileData.university}
        />
        
        <SkillList skills={profileData.skills} />
        
        <section className="projects-section">
          <h3>My Projects</h3>
          <div className="projects-grid">
            {profileData.projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
      
      <footer>
        <p>© 2023 Sharon Gurung | Built with React</p>
      </footer>
    </div>
  );
}

export default App;