import React, { useState } from "react";

import Square from "./components/Square";
import "./styles/App.css";
import "./styles/Board.css";

export default function App() {
    const [isPlayer, setIsPlayer] = useState(true);
    const [ticks, setTicks] = useState(Array(9).fill(null));

    const changePlayer = () => {
        setIsPlayer(!isPlayer);
    };

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
        } else {
            alert("The winner is Player 2.");
        }
        resetGame();
    };

    const resetGame = () => {
        setIsPlayer(true);
        setTicks(Array(9).fill(null));
    };

    return (
        <div className="App">
            <div className="board">
                {ticks.map((tick, index) => (
                    <Square
                        key={index}
                        tick={tick}
                        onClick={() => updateTicks(index)}
                    />
                ))}
            </div>
            <button className="btn" onClick={resetGame}>
                Reset
            </button>
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
