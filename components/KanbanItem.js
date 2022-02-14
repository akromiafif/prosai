import React, { useState } from "react";
import KanbanTask from "./KanbanTask";

const KanbanItem = ({ title, data }) => {
  const [task, setTask] = useState(data);

  return (
    <div
      className={`w-1/3 bg-white h-screen rounded-xl p-6 space-y-4 overflow-auto`}
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        height: "32rem",
      }}
    >
      <div className="flex flex-row justify-between w-full items-center ">
        <b className="text-2xl">{title}</b>
        <div className="bg-primary-green px-4 py-2 rounded-3xl cursor-pointer hover:opacity-60">
          <b className="text-white">&#43; Add a Task</b>
        </div>
      </div>
      {task.map((item, index) => {
        return (
          <div key={item.id} className={`cursor-pointer`}>
            <KanbanTask
              type={item.type}
              title={item.title}
              txtType={item.txtType}
            />
          </div>
        );
      })}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 0;
        }
      `}</style>
    </div>
  );
};

export default KanbanItem;
