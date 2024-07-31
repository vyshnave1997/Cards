// src/App.js
import React from "react";
import Card from "./components/Card";
import CardWithImage from "./components/CardWithImage";
import CardWithActions from "./components/CardWithActions";
import CardWithOverlay from "./components/CardWithOverlay";
import CardWithBadge from "./components/CardWithBadge";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <h1>Card Component Demos</h1>
      <div className="card-container">
        <Card
          header="Basic Card"
          content="This is a basic card with a header, content, and footer."
          footer="Footer Content"
        />
        <CardWithImage
          header="Image Card"
          imageUrl="https://via.placeholder.com/300"
          content="This card includes an image in the content area."
          footer="Footer Content"
        />
        <CardWithActions
          header="Card with Actions"
          content="This card includes action buttons in the footer."
          actions={
            <>
              <button>Action 1</button>
              <button>Action 2</button>
            </>
          }
        />
        <CardWithOverlay
          header="Card with Overlay"
          content="Hover over this card to see the overlay effect."
          footer="Footer Content"
        />
        <CardWithBadge
          header="Card with Badge"
          content="This card has a badge in the corner."
          footer="Footer Content"
          badgeText="New"
        />
      </div>
    </div>
  );
};

export default App;
