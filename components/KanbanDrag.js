import React, { Component } from "react";
import { render } from "react-dom";
import { Task } from "../src/constant";
import AddTask from "./AddTask";
import KanbanItem from "./KanbanItem";
import KanbanTask from "./KanbanTask";

// import NewTask from "./Components/NewTask";

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
    console.log(id);
    let tasks = this.state.tasks.filter((task) => {
      if (task.id == id) {
        task.category = cat;
        if (cat == "done") {
          task.bgColor = "#e57373";
        } else {
          task.bgColor = "#9fa8da";
        }
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
