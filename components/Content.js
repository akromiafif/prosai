import React from "react";
import Header from "./Header";
import KanbanDrag from "./KanbanDrag";

const Content = () => {
  return (
    <div className="w-9/12 h-screen px-16 py-10 bg-white flex flex-col">
      <Header />
      <div className="w-full relative">
        <KanbanDrag />
      </div>
    </div>
  );
};

export default Content;
