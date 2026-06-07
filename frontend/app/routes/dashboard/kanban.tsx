export default function KanbanPage() {
  const todo = [
    { id: 1, title: "Design UI" },
    { id: 2, title: "Create Login Page" },
  ];

  const inProgress = [
    { id: 3, title: "Build Dashboard" },
  ];

  const done = [
    { id: 4, title: "Setup Project" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kanban Board</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={{ flex: 1, border: "1px solid #ddd", padding: "10px" }}>
          <h3>To Do</h3>
          {todo.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </div>

        <div style={{ flex: 1, border: "1px solid #ddd", padding: "10px" }}>
          <h3>In Progress</h3>
          {inProgress.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </div>

        <div style={{ flex: 1, border: "1px solid #ddd", padding: "10px" }}>
          <h3>Done</h3>
          {done.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}