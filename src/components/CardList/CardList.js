import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ users }) => {
  const CardArray = users.map((user) => {
    return (
      <Card
        key={user.id}
        id={user.id}
        name={user.name}
        title={user.title}
        email={user.email}
        pic={user.pic}
        skills={user.skills}
      />
    );
  });
  return <div className="card-container">{CardArray}</div>;
};

export default CardList;
