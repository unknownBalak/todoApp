import React from "react";
import "./Card.css";
import PersonIcon from "@mui/icons-material/Person";
function Card({ content, name }) {
  return (
    <div className="card">
      <div className="content"> {content}</div>
      <div className="author">
        <span className="authorIcon">
          <PersonIcon />
        </span>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Card;
