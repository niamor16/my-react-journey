export default function Square({
  value,
  onSquareClick,
}: {
  value: string | null;
  onSquareClick: CallableFunction;
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
