import React from "react";
import { Backlog, Done, ToDo } from "../src/constant";
import KanbanItem from "./KanbanItem";

const Kanban = () => {
  return (
    <div className="w-full h-screen space-x-4 rounded-lg flex flex-row justify-between hide">
      <KanbanItem title="Backlog" data={Backlog} />
      <KanbanItem title="To Do" data={ToDo} />
      <KanbanItem title="Done" data={Done} />
    </div>
  );
};

export default Kanban;
