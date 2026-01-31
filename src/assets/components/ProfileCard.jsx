import React, { useState, useEffect } from "react";
import "../css/todolist.css";
import avatar from "../image/profile.webp";

const ProfileCard = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <div className="card profile-section">
      <div className="profile-header">
        <img src={avatar} alt="Avatar" className="avatar" />
        <div>
          <h2 id="name-display">Yogi Permana Jati</h2>
          <p className="role">Frontend Developer</p>
        </div>
      </div>

      <p className="bio">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores
        facilis perspiciatis porro? Consequatur ad recusandae hic deleniti
        blanditiis quaerat obcaecati.
      </p>

     <div className="theme-switch">
    <input
        type="checkbox"
        id="darkModeToggle"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
    />
    <label htmlFor="darkModeToggle" className="switch">
        <span className="slider" />
    </label>
    <span className="mode-text">
        {isDark ? "Dark Mode" : "Light Mode"}
    </span>
    </div>

    </div>
  );
};

export default ProfileCard;
