import React, { useEffect, useState } from "react";
import KanbanItem from "./KanbanItem";
import KanbanTask from "./KanbanTask";
import { Task } from "../src/constant";

const KanbanDrag = () => {
  const [tasks, setTasks] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setTasks(Task);
    console.log(tasks);
  }, []);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");
    let newTask = tasks.filter((task) => {
      if (task.id == id) {
        task.category = cat;
      }
      return task;
    });
    setTasks(newTask);
  };

  const handleAddNew = () => {
    let val = isClicked ? false : true;
    setIsClicked(val);
  };

  const handleClose = (obj) => {
    setIsClicked(obj);
  };

  const handleNewTask = (content) => {
    const newTask = {};
    newTask.name = content;
    newTask.bgColor = "#9fa8da";
    newTask.category = "backlog";
    const newTask2 = [tasks, newTask];
    setTasks(newTask2);
  };

  const tasksLog = {
    backlog: [],
    done: [],
    todo: [],
  };

  tasks.forEach((t) => {
    tasksLog[t.category].push(
      <KanbanTask
        type={t.type}
        title={t.name}
        txtType={t.txtType}
        onDragStart={(e) => onDragStart(e, t.id)}
      />
    );
  });

  return (
    <div className="flex flex-row">
      {/* {loader} */}
      <KanbanItem
        title="Backlog"
        tasks={tasksLog}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "backlog")}
      />

      <KanbanItem
        title="Todo"
        tasks={tasksLog}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "todo")}
      />

      <KanbanItem
        title="Done"
        tasks={tasksLog}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "done")}
      />
    </div>
  );
};

export default KanbanDrag;
