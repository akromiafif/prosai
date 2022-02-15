import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { clickedState, taskState } from "../src/state";
import { KanbanType, TaskType } from "../src/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [type, setType] = useState("");
  const [assigne, setAssigne] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const isClicked = useRecoilValue(clickedState);
  const setClickedState = useSetRecoilState(clickedState);

  const setTaskState = useSetRecoilState(taskState);
  const tasksValue = useRecoilValue(taskState);

  const submit = () => {
    if (
      tags.toLowerCase() != TaskType.BACKLOG &&
      tags.toLowerCase() != TaskType.TODO &&
      tags.toLowerCase() != TaskType.DONE
    ) {
      console.log(tags);
      toast.error("Wrong tags");
    } else if (
      type.toLowerCase() != KanbanType.RESEARCH &&
      type.toLowerCase() != KanbanType.DESIGN &&
      type.toLowerCase() != KanbanType.BACKEND
    ) {
      toast.error("Wrong type");
    } else if (title === "") {
      toast.error("Title is required");
    } else if (assigne === "") {
      toast.error("Assigne is required");
    } else if (startDate.split("-").length != 3) {
      toast.error("Start date wrong format");
    } else if (endDate.split("-").length != 3) {
      toast.error("End date wrong format");
    } else {
      setTaskState((prev) => [
        ...prev,
        {
          issue_id: tasksValue.length + 1,
          title: title,
          assigne: assigne.toUpperCase(),
          start_date: startDate,
          end_date: endDate,
          type:
            type.toLowerCase() === KanbanType.RESEARCH
              ? KanbanType.RESEARCH
              : null || type.toLowerCase() === KanbanType.DESIGN
              ? KanbanType.DESIGN
              : null || type.toLowerCase() === KanbanType.BACKEND
              ? KanbanType.BACKEND
              : null,
          txtType:
            type.toLowerCase() === KanbanType.RESEARCH
              ? KanbanType.RESEARCH.toUpperCase()
              : null || type.toLowerCase() === KanbanType.DESIGN
              ? KanbanType.DESIGN.toUpperCase()
              : null || type.toLowerCase() === KanbanType.BACKEND
              ? KanbanType.BACKEND.toUpperCase()
              : null,
          tags: tags.toLowerCase(),
        },
      ]);
      setClickedState(false);
    }
  };

  return (
    <div
      className={`w-full h-screen  z-10 flex flex-row items-center justify-center ${
        isClicked ? "fixed" : "hidden"
      }`}
      style={{ background: "rgba(212, 212, 212, 0.7)" }}
    >
      <ToastContainer autoClose={1000} />
      <div className="px-10 w-3/12 py-8 opacity-100 bg-white z-20 rounded-2xl flex flex-col space-y-4">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">New Task</h1>
          <img
            onClick={() => setClickedState(false)}
            className="w-8 h-8 cursor-pointer hover:opacity-70"
            src="/img/close-logo.png"
          />
        </div>
        <InputField
          title="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputField
          title="Tags"
          value={tags}
          placeholder="Backlog | Todo | Done"
          onChange={(e) => setTags(e.target.value)}
        />
        <InputField
          title="Type"
          value={type}
          placeholder="DESIGN | RESEARCH | BACKEND"
          onChange={(e) => setType(e.target.value)}
        />
        <InputField
          title="Assignee"
          value={assigne}
          onChange={(e) => setAssigne(e.target.value)}
        />
        <InputField
          title="Start Date"
          type="date"
          placeholder="Format: 02-10-2022"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <InputField
          title="End Date"
          type="date"
          placeholder="Format: 05-7-2024"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button title="Submit" onClick={submit} />
      </div>
    </div>
  );
};

export default AddTask;
