import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { v4 as uuidv4 } from "uuid";
import { KanbanType } from "./constant";

const { persistAtom } = recoilPersist();

export const clickedState = atom({
  key: "clickedState",
  default: false,
});

export const taskState = atom({
  key: "taskState",
  default: [
    {
      id: uuidv4(),
      name: "Learn Laravel",
      type: KanbanType.RESEARCH,
      txtType: "RESEARCH",
      category: "backlog",
      bgColor: "#9fa8da",
    },
    {
      id: uuidv4(),
      name: "Learn Flutter",
      type: KanbanType.BACKEND,
      txtType: "BACKEND",
      category: "backlog",
      bgColor: "#9fa8da",
    },
    {
      id: uuidv4(),
      name: "Learn Golang",
      type: KanbanType.DESIGN,
      txtType: "DESIGN",
      category: "backlog",
      bgColor: "#9fa8da",
    },
    {
      id: uuidv4(),
      name: "Learn React",
      type: KanbanType.DESIGN,
      txtType: "DESIGN",
      category: "todo",
      bgColor: "#9fa8da",
    },
    {
      id: uuidv4(),
      name: "Learn NEXTJS",
      type: KanbanType.RESEARCH,
      txtType: "RESEARCH",
      category: "todo",
      bgColor: "#9fa8da",
    },
    {
      id: uuidv4(),
      name: "Learn TypeORM",
      type: KanbanType.BACKEND,
      txtType: "BACKEND",
      category: "todo",
      bgColor: "#9fa8da",
    },
    {
      id: uuidv4(),
      name: "Learn ThreeJS",
      type: KanbanType.BACKEND,
      txtType: "BACKEND",
      category: "done",
      bgColor: "#9fa8da",
    },
    {
      id: uuidv4(),
      name: "Learn FastAPI",
      type: KanbanType.DESIGN,
      txtType: "DESIGN",
      category: "done",
      bgColor: "#9fa8da",
    },
    {
      id: uuidv4(),
      name: "Learn React",
      type: KanbanType.RESEARCH,
      txtType: "RESEARCH",
      category: "done",
      bgColor: "#9fa8da",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
