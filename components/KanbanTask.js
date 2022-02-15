import moment from "moment";
import React from "react";
import { KanbanType } from "../src/constant";

const KanbanTask = ({
  title,
  assigne,
  start_date,
  end_date,
  type,
  txtType,
  onDragStart,
}) => {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="bg-primary-gray cursor-pointer w-full h-36 rounded-2xl text-left p-4 justify-between flex flex-col"
    >
      <b>{title}</b>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-2">
          <div className="bg-ternary-green px-3 py-1 rounded-full">
            <b>{assigne.charAt(0)}</b>
          </div>
          <div
            className={`px-4 py-1 rounded-3xl ${
              type === KanbanType.RESEARCH
                ? "bg-primary-yellow"
                : null || type === KanbanType.DESIGN
                ? "bg-primary-blue"
                : null || type === KanbanType.BACKEND
                ? "bg-primary-red"
                : null
            }`}
          >
            <b
              className={`${
                type === KanbanType.RESEARCH
                  ? "text-secondary-yellow"
                  : null || type === KanbanType.DESIGN
                  ? "text-secondary-blue"
                  : null || type === KanbanType.BACKEND
                  ? "text-secondary-red"
                  : null
              }`}
            >
              {txtType}
            </b>
          </div>
        </div>
        <b className="text-secondary-gray">
          {moment([
            end_date.split("-")[2],
            end_date.split("-")[1],
            end_date.split("-")[0],
          ]).fromNow()}
        </b>
      </div>
    </div>
  );
};

export default KanbanTask;
