import React from 'react';
import '../Skills.css';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'CSS',
    'HTML',
    'Python',
    'Git',
    'AWS',
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="skill-item"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
