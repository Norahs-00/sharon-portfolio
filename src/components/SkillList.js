// src/components/SkillList.js
import React from 'react';

const SkillList = ({ skills }) => {
  return (
    <div className="skills-section">
      <h3>Technical Skills</h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;