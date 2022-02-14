import React, { Component } from "react";
import { render } from "react-dom";
import { Task } from "../src/constant";
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
    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
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
          onDragStart={(e) => this.onDragStart(e, t.name)}
        />
      );
    });
    return (
      <div>
        {/* {loader} */}

        <div
          className={`backlog w-1/3 bg-white h-screen rounded-xl p-6 space-y-4 overflow-auto`}
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            height: "32rem",
          }}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "backlog")}
        >
          <div className="flex flex-row justify-between w-full items-center ">
            <b className="text-2xl">Backlog</b>
            <div className="bg-primary-green px-4 py-2 rounded-3xl cursor-pointer hover:opacity-60">
              <b className="text-white">&#43; Add a Task</b>
            </div>
          </div>
          {tasks.backlog}
        </div>

        <div
          className={`todo bg-white h-screen rounded-xl p-6 space-y-4 overflow-auto`}
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            height: "32rem",
            width: "20rem",
          }}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "todo")}
        >
          <div className="flex flex-row justify-between w-full items-center ">
            <b className="text-2xl">To Do</b>
            <div className="bg-primary-green px-4 py-2 rounded-3xl cursor-pointer hover:opacity-60">
              <b className="text-white">&#43; Add a Task</b>
            </div>
          </div>
          {tasks.todo}
        </div>

        <div
          className={`droppable w-1/3 bg-white h-screen rounded-xl p-6 space-y-4 overflow-auto`}
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            height: "32rem",
          }}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "done")}
        >
          <div className="flex flex-row justify-between w-full items-center ">
            <b className="text-2xl">Done</b>
            <div className="bg-primary-green px-4 py-2 rounded-3xl cursor-pointer hover:opacity-60">
              <b className="text-white">&#43; Add a Task</b>
            </div>
          </div>
          {tasks.done}
        </div>
        <style jsx>
          {`
            .backlog {
              position: absolute;
              height: 100vh;
            }

            .todo {
              position: absolute;
              height: 100vh;
              left: 22rem;
              top: 10;
            }

            .droppable {
              position: absolute;
              height: 100vh;
              right: 0;
              top: 10;
            }

            ::-webkit-scrollbar {
              width: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
