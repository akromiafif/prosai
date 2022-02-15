import React, { useEffect, useState } from "react";
import KanbanItem from "./KanbanItem";
import KanbanTask from "./KanbanTask";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { clickedState, taskState } from "../src/state";
import { Task } from "../src/constant";

const KanbanDrag = () => {
  const [tasks, setTasks] = useState([]);
  const tasksValue = useRecoilValue(taskState);

  useEffect(() => {
    setTasks(Task);
  }, []);

  useEffect(() => {
    console.log(tasksValue);
  }, [tasksValue]);

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
        console.log(task.category);
        task.category = cat;
      }
      return task;
    });
    setTasks(newTask);
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
