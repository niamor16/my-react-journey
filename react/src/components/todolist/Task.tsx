export default function Task({
  label,
  done,
  onToggle,
  deleteTask,
}: {
  label: string;
  done: boolean;
  onToggle: CallableFunction;
  deleteTask: CallableFunction;
}) {
  function handleClick() {
    onToggle()
  }

  function handleDelete() {
    deleteTask();
  }
  
  return (
    <div className={"task " + (done ? 'done': '')}>
      <label>
        {label}
        <input type="checkbox" checked={done} onChange={handleClick} />
      </label>
      <button type="button" onClick={handleDelete}>delete</button>
    </div>
  );
}
