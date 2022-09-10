import React from "react";
import "../styles/Square.css";

export default function Square({ tick, onClick }) {
    return (
        <div className="square" onClick={onClick}>
            {tick}
        </div>
    );
}
