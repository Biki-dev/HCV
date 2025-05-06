import React from 'react';
import './contect.css';
import pfp from '../assets/pfp.png';
import tele from '../assets/telegram.png';
import insta from '../assets/instagram.png';
import git from '../assets/github.png';

const Profile = () => {
  return (
    <div className="profile-card">
      <div className="pfp"><img src={pfp} alt="Profile" className="profile-img" /></div>
      <div className="name">Biki-dev</div>
      <div className="titlecon">JAVASCRIPT DEVELOPER</div>
      
      <div className="bio">
        17-year-old with a dream to build my own browser.
        Exploring the world of coding, logic, and smart tech.
        Working on AI-powered apps and quiz platforms.
        Driven by curiosity, discipline, and big ambitions.
      </div>
      
      <button className="hire-me">Follow</button>
      
      <div className="stats">
  <div className="stat">
    <a href="https://instagram.com/naru.tobik1" target="_blank" rel="noopener noreferrer">
      <img src={insta} alt="Instagram" className="social-icon" />
    </a>
  </div>
  <div className="stat">
    <a href="https://t.me/daaattebayo" target="_blank" rel="noopener noreferrer">
      <img src={tele} alt="Telegram" className="social-icon" />
    </a>
  </div>
  <div className="stat">
    <a href="https://github.com/Biki-dev" target="_blank" rel="noopener noreferrer">
      <img src={git} alt="GitHub" className="social-icon" />
    </a>
  </div>
</div>
    </div>
  );
};

export default Profile;