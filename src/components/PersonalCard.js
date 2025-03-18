import React from 'react';
import './PersonalCard.css';

const PersonalCard = (props) => {
  const { name, profession, email, phone, location, avatar, bio, skills, social } = props;
  
  return (
    <div className="card">
      <div className="card-header">
        <img src={avatar} alt={name} className="avatar" />
        <h2 className="profession">{profession}</h2>
      </div>
      
      <div className="card-body">
        <div className="section">
          <h3>Sobre mí</h3>
        </div>
        
        <div className="section">
          <h3>Habilidades</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="section">
          <h3>Contacto</h3>
          <p className="contact-info">
            <strong>Email:</strong>
          </p>
          <p className="contact-info">
            <strong>Teléfono:</strong>
          </p>
          <p className="contact-info">
            <strong>Ubicación:</strong> 
          </p>
        </div>
      </div>
      
      <div className="card-footer">
        <div className="social-links">
          {social.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-link github">
              GitHub
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              LinkedIn
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">
              Twitter
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;