import React from 'react';
import Board from "./Board";

interface TileProps {
    value: number;
}

const Til: React.FC <TileProps>= ({value  }) => {

    const isEmpty = value === 0

    return (
        <div className = {`tile ${isEmpty ? "empty": "" }`}>
 <span className = "tile-text">{isEmpty ? '': value}</span>
        </div>
    );
};

export default Til
