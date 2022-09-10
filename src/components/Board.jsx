import React, { useState } from "react";

import Square from "./Square";
import "../styles/Board.css";

export default function Board({ isPlayer, changePlayer }) {
    const [ticks, setTicks] = useState(Array(9).fill(null));

    const updateTicks = (index) => {
        if (ticks[index]) return;

        const playerTick = isPlayer ? "x" : "o";
        const frontTicks = ticks.slice(0, index);
        const backTicks = ticks.slice(index + 1, ticks.length);
        const newTicks = [...frontTicks, playerTick, ...backTicks];
        setTicks(newTicks);
        changePlayer();
    };

    return (
        <div className="board">
            {ticks.map((tick, index) => (
                <Square
                    key={index}
                    tick={tick}
                    onClick={() => updateTicks(index)}
                />
            ))}
        </div>
    );
}
