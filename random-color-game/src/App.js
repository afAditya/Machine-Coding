import React from "react";
import Game from "./Game.js";

const TOTAL_BOX = 12;

export default function App() {
  return (
    <div className="App">
      <Game total={TOTAL_BOX} />
    </div>
  );
}
