import React from 'react';
import './App.css';
import PersonalCard from './components/PersonalCard';

function App() {
  // Datos personales que serán pasados como props
  const personalInfo = {
    name: "Gabriel ALexander",
    profession: "Desarrollador Web",
    email: "gaboquintana10@example.com",
    phone: "76867102",
    location: "El salvador",
    avatar: "/profile-picture.jpg", // Coloca una imagen en la carpeta public
    bio: "Desarrollador web. Apasionado por crear interfaces intuitivas y soluciones eficientes.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  };

  return (
    <div className="App">
      <PersonalCard 
        name={personalInfo.name}
        profession={personalInfo.profession}
        email={personalInfo.email}
        phone={personalInfo.phone}
        location={personalInfo.location}
        avatar={personalInfo.avatar}
        bio={personalInfo.bio}
        skills={personalInfo.skills}
        social={personalInfo.social}
      />
    </div>
  );
}

export default App;