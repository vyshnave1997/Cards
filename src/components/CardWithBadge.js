// src/components/CardWithBadge.js
import React from "react";
import "./CardWithBadge.css";

const CardWithBadge = ({ header, content, footer, badgeText }) => {
  return (
    <div className="card card-with-badge">
      {header && <div className="card-header">{header}</div>}
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
      {badgeText && <div className="card-badge">{badgeText}</div>}
    </div>
  );
};

export default CardWithBadge;
