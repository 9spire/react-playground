import React, { useState } from "react";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

const Game = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);
  const winner = calcWinner(square);
  const nextPlayer = isXNext ? "X" : "O";

  const getStatus = () => {
    if (winner) {
      return "Winner: " + winner;
    } else if (isBoardFull(square)) {
      return "Draw!";
    } else {
      return "Next player: " + nextPlayer;
    }
  };

  const makeSquare = (i) => {
    return (
      <Square
        value={square[i]}
        onClick={() => {
          if (square[i] != null || winner != null) {
            return;
          }
          const nextSquare = square.slice();
          nextSquare[i] = nextPlayer;
          setSquare(nextSquare);
          setXNext(!isXNext);
        }}
      />
    );
  };
  return (
    <>
      <h1>Game</h1>
      <div className="container">
        <div className="board">
          <div className="row">
            {makeSquare(1)}
            {makeSquare(2)}
            {makeSquare(3)}
          </div>
          <div className="row">
            {makeSquare(4)}
            {makeSquare(5)}
            {makeSquare(6)}
          </div>
          <div className="row">
            {makeSquare(7)}
            {makeSquare(8)}
            {makeSquare(9)}
          </div>
        </div>
        <h1>{getStatus()}</h1>
      </div>
    </>
  );
};

export default Game;

const isBoardFull = (square) => {
  square.map((s) => (s == null ? true : false));
};

const calcWinner = (square) => {
  let result = null;
  const possible = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  possible.map((p) => {
    const [a, b, c] = p;
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return (result = square[a]);
    }
  });
  return result;
};
