import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { KanbanType } from "./constant";

const { persistAtom } = recoilPersist();

export const clickedState = atom({
  key: "clickedState",
  default: false,
});

export const showTaskState = atom({
  key: "showTaskState",
  default: false,
});

export const taskShowItem = atom({
  key: "taskShowItem",
  default: {
    issue_id: 0,
    title: "",
    assigne: "",
    start_date: "",
    end_date: "",
    type: KanbanType.RESEARCH,
    txtType: "",
    tags: "",
  },
});

export const taskState = atom({
  key: "taskState",
  default: [
    {
      issue_id: 0,
      title: "Learn Laravel",
      assigne: "Afif Akromi",
      start_date: "15-02-2022",
      end_date: "15-06-2022",
      type: KanbanType.RESEARCH,
      txtType: "RESEARCH",
      tags: "backlog",
    },
    {
      issue_id: 1,
      title: "Learn Flutter",
      assigne: "Wiella Ayu",
      start_date: "2-02-2022",
      end_date: "3-03-2022",
      type: KanbanType.BACKEND,
      txtType: "BACKEND",
      tags: "backlog",
    },
    {
      issue_id: 2,
      title: "Learn Golang",
      assigne: "Pratama Andiko",
      start_date: "18-02-2022",
      end_date: "18-02-2022",
      type: KanbanType.DESIGN,
      txtType: "DESIGN",
      tags: "backlog",
    },
    {
      issue_id: 3,
      title: "Learn React",
      assigne: "Kresna Faza",
      start_date: "21-02-2022",
      end_date: "22-05-2025",
      type: KanbanType.DESIGN,
      txtType: "DESIGN",
      tags: "todo",
    },
    {
      issue_id: 4,
      title: "Learn NEXTJS",
      assigne: "Fawwaz Naabigh",
      start_date: "26-02-2022",
      end_date: "29-05-2023",
      type: KanbanType.RESEARCH,
      txtType: "RESEARCH",
      tags: "todo",
    },
    {
      issue_id: 5,
      title: "Learn TypeORM",
      assigne: "Hafid Abi",
      start_date: "12-02-2022",
      end_date: "13-07-2022",
      type: KanbanType.BACKEND,
      txtType: "BACKEND",
      tags: "todo",
    },
    {
      issue_id: 6,
      title: "Learn ThreeJS",
      assigne: "Ferdian Airlangga",
      start_date: "9-03-2022",
      end_date: "22-05-2022",
      type: KanbanType.BACKEND,
      txtType: "BACKEND",
      tags: "done",
    },
    {
      issue_id: 7,
      title: "Learn FastAPI",
      assigne: "Rizki Rizal",
      start_date: "25-04-2022",
      end_date: "29-07-2023",
      type: KanbanType.DESIGN,
      txtType: "DESIGN",
      tags: "done",
    },
    {
      issue_id: 8,
      title: "Learn React",
      assigne: "Dwi Prasetya",
      start_date: "2-02-2022",
      end_date: "15-08-2023",
      type: KanbanType.RESEARCH,
      txtType: "RESEARCH",
      tags: "done",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
