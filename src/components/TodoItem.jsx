export default function TodoItem(props) {
  const { handleComplete, handleDelete } = props;
  const { done, id, title } = props.todo;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        defaultChecked={done}
        onClick={() => handleComplete(id)}
      />
      <p className={done ? "done" : ""}>{title}</p>
      <button onClick={() => handleDelete(id)}>X</button>
    </div>
  );
}
