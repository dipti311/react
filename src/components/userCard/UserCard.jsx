import React from "react";
import "./Usercard.scss";
export const UserCard = (props) => {
  console.log(props);
  return (
    <div className="d-flex">
      <div className="user-card-container">
        <div className="user-card">
          <h1>{props.item.name}</h1>
          <h2>{props.item.phone}</h2>
          <h3>{props.item.address}</h3>
          <h3>{props.item.userName}</h3>
          <h3>{props.item.email}</h3>
          <h3>{props.item.country}</h3>
          <br />
        </div>
      </div>
    </div>
  );
};
