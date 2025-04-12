import { useState } from "react";

function Square({ value, onSquareClicked }) {
  return (
    <button className="square" onClick={onSquareClicked}>
      {value}
    </button>
  );
}

function App() {
  const [xTurn, setXTurn] = useState(true);
  const [squares, setSquaresValue] = useState(Array(9).fill(null));

  let status;
  const winner = calculateWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Current Player: " + (xTurn ? "X" : "O");
  }

  function onSquareClicked(i) {
    let nextSquares;

    // Reset game if square is clicked after a win
    if (winner) {
      nextSquares = Array(9).fill(null);
    } else {
      nextSquares = squares.slice();
    }

    if (nextSquares[i]) {
      return;
    }

    if (xTurn) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquaresValue(nextSquares);
    setXTurn(!xTurn);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClicked={() => onSquareClicked(0)} />
        <Square value={squares[1]} onSquareClicked={() => onSquareClicked(1)} />
        <Square value={squares[2]} onSquareClicked={() => onSquareClicked(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClicked={() => onSquareClicked(3)} />
        <Square value={squares[4]} onSquareClicked={() => onSquareClicked(4)} />
        <Square value={squares[5]} onSquareClicked={() => onSquareClicked(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClicked={() => onSquareClicked(6)} />
        <Square value={squares[7]} onSquareClicked={() => onSquareClicked(7)} />
        <Square value={squares[8]} onSquareClicked={() => onSquareClicked(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const winRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i = 0; i < winRows.length; i++) {
    const [a, b, c] = winRows[i];
    if (
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] !== null
    ) {
      return squares[a];
    }
  }

  return null;
}

export default App;
