// src/components/Card.js
import React from "react";
import "./Card.css"; // Import custom styles
import "../GlassEffect.css"; // Import glass effect styles

const Card = ({ header, content, footer }) => {
  return (
    <div className="card glass-effect">
      {header && <div className="card-header">{header}</div>}
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
