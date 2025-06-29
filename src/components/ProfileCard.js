// src/components/ProfileCard.js
import React from 'react';

const ProfileCard = ({ name, role, semester, university }) => {
  return (
    <div className="profile-card">
      <div className="avatar"></div>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{semester} • {university}</p>
      <div className="social-links">
        <a href="https://github.com/Norahs-00" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/sharon-grg-157524282/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;