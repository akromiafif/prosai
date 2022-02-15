import React from "react";
import { KanbanType } from "../src/constant";

const ShowField = ({ title, text, type }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-lg">{title}</label>
      {type != "PILL" ? (
        <b>{text}</b>
      ) : (
        <div
          className={`px-4 py-1 w-28 text-center rounded-3xl ${
            text === KanbanType.RESEARCH
              ? "bg-primary-yellow"
              : null || text === KanbanType.DESIGN
              ? "bg-primary-blue"
              : null || text === KanbanType.BACKEND
              ? "bg-primary-red"
              : null
          }`}
        >
          <b
            className={`${
              text === KanbanType.RESEARCH
                ? "text-secondary-yellow"
                : null || text === KanbanType.DESIGN
                ? "text-secondary-blue"
                : null || text === KanbanType.BACKEND
                ? "text-secondary-red"
                : null
            }`}
          >
            {text.toUpperCase()}
          </b>
        </div>
      )}
    </div>
  );
};

export default ShowField;
