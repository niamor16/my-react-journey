import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game()
{
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const isXNext = currentMove % 2 === 0;

    function handlePlay(updatedSquares: Array<string | null>) {
        const newHistory = [...history.slice(0, currentMove + 1), updatedSquares];
        setHistory(newHistory);
        setCurrentMove(currentMove + 1);
    }

    function jumpTo(move: number)
    {
      if (history.length < move) return;
      setCurrentMove(move);
    }

    const currentSquares = history[currentMove];
    const winner = calculateWinner(currentSquares);

    return (
      <>
        <Board
          squares={currentSquares}
          onPlay={handlePlay}
          winner={winner}
          isXNext={isXNext}
        />
        <History history={history} jumpTo={jumpTo} />
      </>
    );
}

function calculateWinner(squares: Array<string|null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}