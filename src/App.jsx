import React, { useState } from "react";

import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar HTML',
      completed: false,
    },
    {
      id: "2",
      title: "Estudar CSS",
      completed: true,
    },
    {
      id: "3",
      title: "Estudar TypeScript",
      completed: false,
    },
    {
      id: "4",
      title: "Estudar React",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map(task => {
      if (task.id == taskId) return {... task, completed: !task.completed};

      return task;
    });

    setTasks(newTask);
  }

  const handleTaskAddition = (tasksTtile) => {
    const newTask = [
      ...tasks,
      {
        title: tasksTtile,
        id: Math.random(100),
        completed: false,
      },
    ];
    setTasks(newTask);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </div>
    </>
  );
};

export default App;
