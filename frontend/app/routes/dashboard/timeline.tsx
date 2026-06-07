import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

export default function Timeline() {
  const tasks = [
    {
      start: new Date(2026, 5, 1),
      end: new Date(2026, 5, 5),
      name: "Design UI",
      id: "1",
      type: "task",
      progress: 100,
      isDisabled: false,
    },
    {
      start: new Date(2026, 5, 6),
      end: new Date(2026, 5, 10),
      name: "Build Dashboard",
      id: "2",
      type: "task",
      progress: 50,
      isDisabled: false,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Project Timeline</h1>
      <Gantt tasks={tasks} />
    </div>
  );
}