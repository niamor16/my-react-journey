export default function History({
  history,
  jumpTo,
}: {
  history: Array<string | null>;
  jumpTo: CallableFunction;
}) {

  const moves = history.map((squares, move) => {
    const description =
      move > 0 ? "Aller au coup #" + move : "Revenir au début";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
  );
}
