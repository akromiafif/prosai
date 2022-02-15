import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { clickedState } from "../src/state";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [assigne, setAssigne] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const isClicked = useRecoilValue(clickedState);
  const setClickedState = useSetRecoilState(clickedState);

  return (
    <div
      className={`w-full h-screen  z-10 flex flex-row items-center justify-center ${
        isClicked ? "fixed" : "hidden"
      }`}
      style={{ background: "rgba(212, 212, 212, 0.7)" }}
    >
      <div className="px-10 w-3/12 py-8 opacity-100 bg-white z-20 rounded-2xl flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">New Task</h1>
        <InputField
          title="Title"
          value={title}
          onChange={() => setTitle(e.target.value)}
        />
        <InputField
          title="Tags"
          value={tags}
          onChange={() => setTags(e.target.value)}
        />
        <InputField
          title="Assignee"
          value={assigne}
          onChange={() => setAssigne(e.target.value)}
        />
        <InputField
          title="Start Date"
          type="date"
          value={startDate}
          onChange={() => setStartDate(e.target.value)}
        />
        <InputField
          title="End Date"
          type="date"
          value={endDate}
          onChange={() => setEndDate(e.target.value)}
        />
        <Button
          title="Submit"
          onClick={() => {
            setClickedState(false);
          }}
        />
      </div>
    </div>
  );
};

export default AddTask;
