import React from "react";
import "./Card.css";

const Card = ({ name, title, email, pic, skills }) => {
  const skillList = skills.map((list) => {
    return <li>{list}</li>;
  });

  return (
    <div className="card">
      <img className="card-pic" src={pic} alt="Profile Pic."></img>
      <h3>{name}</h3>
      <h4>{title}</h4>
      <ul className="card-skills">{skillList}</ul>
      <button className="card-btn">
        <a href={`mailto:${email}`}>Contact Me</a>
      </button>
    </div>
  );
};

export default Card;
