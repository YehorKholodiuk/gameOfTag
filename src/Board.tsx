import React from 'react';
import Til from "./Til";
interface BoardProps {
    tiles:number[]
}

const Board: React.FC<BoardProps> = ({tiles}) => {
const renderRow = (rowIndex: number) => {


    return (
        <div key={rowIndex} className="board-row">
            {tiles.slice(rowIndex * 4, (rowIndex + 1) * 4).map((value, index) => (

                <Til
                    key={index}
                    value={value}
                />

            ))}
        </div>
    );
}
    return <div className = "board">{[0,1,2,3].map(renderRow)}</div>
};

export default Board

