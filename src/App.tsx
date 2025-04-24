import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./Board";

function App() {
  const initialTiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]
  const [tiles, setTiles] = useState(initialTiles)
  return (
    <div className="App">
        <h1>GAME</h1>
        <div className = "board-container">
      <Board
      tiles = {tiles}
      />
    </div>
        <button>Shuffle</button>
    </div>
  );
}

export default App;
