import React, { Component } from "react";
import { useRecoilValue } from "recoil";
import KanbanItem from "./KanbanItem";
import KanbanTask from "./KanbanTask";
import { taskState } from "../src/state";
import { Task } from "../src/constant";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: Task,
      isClicked: false,
    };
  }

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
      if (task.id == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({ ...this.state.tasks, tasks });
  };

  handleAddNew = () => {
    let val = this.state.isClicked ? false : true;
    this.setState({ isClicked: val });
  };

  handleClose = (obj) => {
    this.setState({ isClicked: obj });
  };

  handleNewTask = (content) => {
    const task = {};
    task.name = content;
    task.bgColor = "#9fa8da";
    task.category = "backlog";
    const tasks = [...this.state.tasks, task];
    this.setState({ tasks });
  };

  render() {
    const tasks = {
      backlog: [],
      done: [],
      todo: [],
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <KanbanTask
          type={t.type}
          title={t.name}
          txtType={t.txtType}
          onDragStart={(e) => this.onDragStart(e, t.id)}
        />
      );
    });

    return (
      <div className="flex flex-row">
        {/* {loader} */}
        <KanbanItem
          title="Backlog"
          tasks={tasks}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "backlog")}
        />

        <KanbanItem
          title="Todo"
          tasks={tasks}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "todo")}
        />

        <KanbanItem
          title="Done"
          tasks={tasks}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "done")}
        />
      </div>
    );
  }
}

export default App;
