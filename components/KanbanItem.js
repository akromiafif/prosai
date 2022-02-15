import React from "react";
import { useSetRecoilState } from "recoil";
import { clickedState } from "../src/state";

const KanbanItem = ({ title, tasks, onDragOver, onDrop }) => {
  const setClickedState = useSetRecoilState(clickedState);

  const addTask = () => {
    setClickedState(true);
  };

  return (
    <div
      className={`absolute w-1/3 bg-white h-screen rounded-xl p-6 space-y-4 overflow-auto ${
        title === "Done"
          ? "right-0"
          : null || title === "Backlog"
          ? "left-0"
          : null || title === "Todo"
          ? "left-1/3"
          : null
      }`}
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        height: "32rem",
      }}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="flex flex-row justify-between w-full items-center ">
        <b className="text-2xl">{title}</b>
        <div
          onClick={addTask}
          className="bg-primary-green px-4 py-2 rounded-3xl cursor-pointer hover:opacity-60"
        >
          <b className="text-white">&#43; Add a Task</b>
        </div>
      </div>
      {title === "Backlog"
        ? tasks.backlog
        : null || title === "Done"
        ? tasks.done
        : null || title === "Todo"
        ? tasks.todo
        : null}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 0;
        }
      `}</style>
    </div>
  );
};

export default KanbanItem;
