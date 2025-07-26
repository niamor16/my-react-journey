import '../../assets/tictactoe.css'
import Square from "./Square";
import Status from "./Status";

export default function Board({
  squares,
  onPlay,
  winner,
  isXNext,
}: {
  squares: string[];
  onPlay: CallableFunction;
  winner: string | null;
  isXNext: boolean;
}) {

  function handleClick(i: number) {
    if (winner || squares[i]) {
      return;
    }

    const updatedSquares = squares.slice();
    updatedSquares[i] = isXNext ? "X" : "O";
    onPlay(updatedSquares);
  }
  
  return (
    <>
      <Status winner={winner} isXNext={isXNext} />
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

