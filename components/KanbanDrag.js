import React, { useEffect, useState } from "react";
import KanbanItem from "./KanbanItem";
import KanbanTask from "./KanbanTask";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { taskState } from "../src/state";

const KanbanDrag = () => {
  const [tasks, setTasks] = useState([]);
  const tasksValue = useRecoilValue(taskState);
  const setTasksValue = useSetRecoilState(taskState);

  useEffect(() => {
    setTasks(tasksValue);
  }, []);

  useEffect(() => {
    setTasks(tasksValue);
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
    let index = tasks.findIndex((item) => item.issue_id == id);

    let newTask = [...tasksValue];
    let updateTask = { ...newTask[index], tags: cat };
    newTask[index] = updateTask;
    setTasksValue(newTask);
  };

  const tasksLog = {
    backlog: [],
    done: [],
    todo: [],
  };

  tasks.forEach((t) => {
    console.log(t);
    tasksLog[t.tags].push(
      <KanbanTask
        type={t.type}
        title={t.title}
        txtType={t.txtType}
        onDragStart={(e) => onDragStart(e, t.issue_id)}
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
