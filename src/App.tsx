import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./Board";

function App() {
  const initialTiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]
  const [tiles, setTiles] = useState(initialTiles)

    const mixTiles = () => {

      const shuffledTiles  = [...initialTiles]
        for (let i = shuffledTiles.length - 1; i > 0; i--) {
            const a = Math.floor(Math.random() * (i + 1));
           [shuffledTiles[i] , shuffledTiles[a]] = [shuffledTiles[a] , shuffledTiles[i]]
        }
        setTiles(shuffledTiles)
    }

    const canMoveTiles = (index:number) => {
      const emptyIndex = tiles.indexOf(0)
        const rowIndex = Math.floor(emptyIndex / 4)
        return (

            index === emptyIndex - 4 && rowIndex > 0 ||
            index === emptyIndex + 4 && rowIndex < 3 ||
            index === emptyIndex - 1 && rowIndex % 4 !==3 ||
            index === emptyIndex + 1 && rowIndex % 4 !== 0
        )
    }

    const handleClic = (index: number) => {
      const newTiles = [...tiles];
        const emptyIndex = newTiles.indexOf(0);
        [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]]
        setTiles(newTiles)
    }

  return (
    <div className="App">
        <h1>GAME</h1>
        <div className = "board-container">
      <Board
      tiles = {tiles}
      onTileClick = {handleClic}
      />
    </div>
        <button className = "button" onClick = {mixTiles}>Shuffle</button>
    </div>
  );
}

export default App;
