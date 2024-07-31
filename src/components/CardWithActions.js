// src/components/CardWithActions.js
import React from "react";
import "./CardWithActions.css";

const CardWithActions = ({ header, content, actions }) => {
  return (
    <div className="card card-with-actions">
      {header && <div className="card-header">{header}</div>}
      <div className="card-content">{content}</div>
      {actions && <div className="card-actions">{actions}</div>}
    </div>
  );
};

export default CardWithActions;
