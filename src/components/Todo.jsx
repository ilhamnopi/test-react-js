import Card from "./Card";
import PlaceContentCenter from "./PlaceContentCenter";
import Input from "./input";
import Button from "./Button";
import { useEffect, useState } from "react";
// import { IconFileX } from "@tabler/icons";

export default function Todo() {
  const [newTask, setNewTask] = useState("");
  // Get local storage
  const [tasks, setTask] = useState(() => {
    const saved = localStorage.getItem("tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  // Loacal storage Set Item
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(e) {
    e.preventDefault();

    setTask((prevTask) => [
      ...prevTask,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        completed: false,
      },
    ]);
    setNewTask("");
  }
  function handleCompleteTask(id) {
    const updateTask = tasks.map((task) => {
      console.log(id);
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTask(updateTask);
  }
  function handleRemoveTask(id) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTask(removeTask);
    console.log(id);
  }

  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Todo Apps</Card.Title>
        <Card.Body>
          <form action="">
            <div className="flex items-center gap-x-2">
              <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
              <Button text={"Add Task"} onClick={handleAddTask} />
            </div>
          </form>
          {tasks.length > 0 ? (
            <ol className="space-y-2 mt-4">
              {tasks.map((task) => (
                <li key={task.id} className={"flex items-center justify-between"}>
                  <span>
                    {task.name} {task.completed ? "✔" : "❌"}
                  </span>
                  <div className="flex items-center gap-x-2">
                    <button className={"px-2 py-1 border text-xs"} onClick={() => handleCompleteTask(task.id)}>
                      Mark as {task.completed ? "completed" : "Incompleted"}
                    </button>
                    <button className={"px-2 py-1 border text-xs"} onClick={() => handleRemoveTask(task.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          ) : null}
        </Card.Body>

        <Card.Footer>you have {tasks.length} Task</Card.Footer>
      </Card>
    </PlaceContentCenter>
  );
}
