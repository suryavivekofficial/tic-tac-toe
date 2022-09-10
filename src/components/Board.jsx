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
        const winner = calculateWinner(newTicks);
        if (winner) {
            showWinner(winner);
        }
    };

    const showWinner = (winner) => {
        if (winner === "x") {
            alert("The winner is Player 1.");
        } else if (winner === "o") {
            alert("The winner is Player 2.");
        } else {
            alert("The game is draw.");
        }
        setTicks(Array(9).fill(null));
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

function calculateWinner(allTicks) {
    const winningChances = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningChances.length; i++) {
        const [a, b, c] = winningChances[i];
        if (
            allTicks[a] &&
            allTicks[a] === allTicks[b] &&
            allTicks[a] === allTicks[c]
        ) {
            return allTicks[a];
        }
    }
    return null;
}
