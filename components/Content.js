import React from "react";
import Header from "./Header";
import Kanban from "./Kanban";
import KanbanDrag from "./KanbanDrag";

const Content = () => {
  return (
    <div className="w-9/12 h-screen px-16 py-10 bg-white flex flex-col">
      <Header />
      <div className="w-full relative bg-red-400">
        <KanbanDrag />
      </div>
      {/* <Kanban /> */}
    </div>
  );
};

export default Content;
