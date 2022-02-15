import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { showTaskState, taskShowItem } from "../src/state";
import Button from "./Button";
import ShowField from "./ShowField";

const ShowTask = () => {
  const isClicked = useRecoilValue(showTaskState);
  const setShowTaskState = useSetRecoilState(showTaskState);
  const selectedTask = useRecoilValue(taskShowItem);

  const close = () => {
    setShowTaskState(false);
  };

  return (
    <div
      className={`w-full h-screen  z-10 flex flex-row items-center justify-center ${
        isClicked ? "fixed" : "hidden"
      }`}
      style={{ background: "rgba(212, 212, 212, 0.7)" }}
    >
      <div className="px-10 w-3/12 py-8 opacity-100 bg-white z-20 rounded-2xl flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">Show Task</h1>
        <ShowField title="Title" text={selectedTask.title} />
        <ShowField title="Tags" text={selectedTask.tags.toUpperCase()} />
        <ShowField title="Type" text={selectedTask.type} type="PILL" />
        <ShowField title="Assignee" text={selectedTask.assigne} />
        <ShowField title="Start Date" text={selectedTask.start_date} />
        <ShowField title="End Date" text={selectedTask.end_date} />
        <Button title="Close" onClick={close} />
      </div>
    </div>
  );
};

export default ShowTask;
