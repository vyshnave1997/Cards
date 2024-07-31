// src/components/CardWithOverlay.js
import React from "react";
import "./CardWithOverlay.css";

const CardWithOverlay = ({ header, content, footer }) => {
  return (
    <div className="card card-with-overlay">
      {header && <div className="card-header">{header}</div>}
      <div className="card-content">
        {content}
        <div className="card-overlay">
          <div className="overlay-text">Overlay Content</div>
        </div>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default CardWithOverlay;
