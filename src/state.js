import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
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
      issue_id: 0,
      name: "Learn Laravel",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-03-2022",
      type: KanbanType.RESEARCH,
      txtType: "RESEARCH",
      category: "backlog",
    },
    {
      issue_id: 1,
      name: "Learn Flutter",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-03-2022",
      type: KanbanType.BACKEND,
      txtType: "BACKEND",
      category: "backlog",
    },
    {
      issue_id: 2,
      name: "Learn Golang",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-03-2022",
      type: KanbanType.DESIGN,
      txtType: "DESIGN",
      category: "backlog",
    },
    {
      issue_id: 3,
      name: "Learn React",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-03-2022",
      type: KanbanType.DESIGN,
      txtType: "DESIGN",
      category: "todo",
    },
    {
      issue_id: 4,
      name: "Learn NEXTJS",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-03-2022",
      type: KanbanType.RESEARCH,
      txtType: "RESEARCH",
      category: "todo",
    },
    {
      issue_id: 5,
      name: "Learn TypeORM",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-03-2022",
      type: KanbanType.BACKEND,
      txtType: "BACKEND",
      category: "todo",
    },
    {
      issue_id: 6,
      name: "Learn ThreeJS",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-03-2022",
      type: KanbanType.BACKEND,
      txtType: "BACKEND",
      category: "done",
    },
    {
      issue_id: 7,
      name: "Learn FastAPI",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-03-2022",
      type: KanbanType.DESIGN,
      txtType: "DESIGN",
      category: "done",
    },
    {
      issue_id: 8,
      name: "Learn React",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-03-2022",
      type: KanbanType.RESEARCH,
      txtType: "RESEARCH",
      category: "done",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
