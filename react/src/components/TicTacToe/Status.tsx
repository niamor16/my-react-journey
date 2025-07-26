export default function Status({winner, isXNext}:{winner: string|null, isXNext: boolean})
{
    const status = winner
      ? winner + " a gagné"
      : "Prochain tour : " + (isXNext ? "X" : "O");
    return <div className="status">{status}</div>;
}