import React, { useState } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Task from "./components/Task.js";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const clickHandler = function (event) {
    const inputValue = document.getElementById("taskAdder");
    event.preventDefault();
    if (inputValue.value === "") return;
    console.log(inputValue.value);
    setTasks((prev) => {
      return [
        ...prev,
        {
          id: tasks.length + 1,
          key: tasks.length + 1,
          content: inputValue.value,
          isChecked: false,
        },
      ];
    });
  };

  return (
    <main>
      <React.StrictMode>
        <Header />
        <Main clickHandler={clickHandler} />
        <div>
          <Task tasks={tasks} setTasks={setTasks} />
        </div>
      </React.StrictMode>
    </main>
  );
}
