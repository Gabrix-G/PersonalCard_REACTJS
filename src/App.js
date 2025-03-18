import React from 'react';
import './App.css';
import PersonalCard from './components/PersonalCard';

function App() {
  // Datos personales que serán pasados como props
  const personalInfo = {
    name: "Carlos Rodríguez",
    profession: "Desarrollador Web",
    email: "carlos@example.com",
    phone: "+1 234 567 890",
    location: "Ciudad de México",
    avatar: "/profile-picture.jpg", // Coloca una imagen en la carpeta public
    bio: "Desarrollador web con 5 años de experiencia en tecnologías frontend y backend. Apasionado por crear interfaces intuitivas y soluciones eficientes.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    social: {
      github: "https://github.com/carlosrodriguez",
      linkedin: "https://linkedin.com/in/carlosrodriguez",
      twitter: "https://twitter.com/carlosrodriguez"
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