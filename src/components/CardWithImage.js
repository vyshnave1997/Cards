// src/components/CardWithImage.js
import React from "react";
import "./CardWithImage.css";

const CardWithImage = ({ header, imageUrl, content, footer }) => {
  return (
    <div className="card card-with-image">
      {header && <div className="card-header">{header}</div>}
      {imageUrl && <img src={imageUrl} alt="Card" className="card-image" />}
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default CardWithImage;
