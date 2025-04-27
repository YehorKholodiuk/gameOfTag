import React from 'react';
import Til from "./Til";
interface BoardProps {
    tiles:number[]
    onTileClick: (index:number) => void
}

const Board: React.FC<BoardProps> = ({tiles, onTileClick}) => {
const renderRow = (rowIndex: number) => {


    return (
        <div key={rowIndex} className="board-row">
            {tiles.slice(rowIndex * 4 , (rowIndex + 1) * 4  ).map((value, index) => (

                <Til
                    key={index}
                    value={value}
                    onTileClick={ () => onTileClick(index + rowIndex * 4)}

                    //onTileClick принимает index + rowIndex * 4
                />

            ))}
        </div>
    );
}
    return <div className = "board">{[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(renderRow)}</div>
};

export default Board

