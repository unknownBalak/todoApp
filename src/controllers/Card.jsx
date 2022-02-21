import React from "react";
import "./Card.css";
import PersonIcon from "@mui/icons-material/Person";
function Card({ content, name, time }) {
  return (
    <div className="card">
      <div className="content"> {content}</div>
      <div className="author">
        <span className="authorIcon">
          <PersonIcon />
        </span>
        <div className="userName">
          <span>{name}</span>
          <span>
            {new Date(time).toLocaleDateString()}(
            {new Date(time).toLocaleTimeString()})
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
