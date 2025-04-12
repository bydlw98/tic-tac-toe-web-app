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

  let status = "Current Player: " + (xTurn ? "X" : "O");

  function onSquareClicked(i) {
    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

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

export default App;
