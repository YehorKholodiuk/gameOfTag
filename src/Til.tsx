import React from 'react';
import Board from "./Board";

interface TileProps {
    value: number;
    onTileClick: () => void
}

const Til: React.FC <TileProps>= ({value, onTileClick  }) => {

    const isEmpty = value === 0

    return (
        <div className = {`tile ${isEmpty ? "empty": "" }`}

        onClick = {() => {

            if (!isEmpty){
                onTileClick()
            }
        }}
        >


 <span className = "tile-text">{isEmpty ? '': value}</span>
        </div>
    );
};

export default Til
