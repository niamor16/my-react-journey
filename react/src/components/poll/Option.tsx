export default function Option({
  label,
  onVote,
}: {
  label: string;
  onVote: CallableFunction;
}) {

  return <button type="button" onClick={onVote}>{label}</button>;
}
