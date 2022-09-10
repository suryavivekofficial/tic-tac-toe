import React, { useState } from "react";

import Board from "./components/Board";
import "./styles/App.css";

export default function App() {
    const [isPlayer, setIsPlayer] = useState(true);
    return (
        <div>
            <Board
                isPlayer={isPlayer}
                changePlayer={() => setIsPlayer(!isPlayer)}
            />
        </div>
    );
}
