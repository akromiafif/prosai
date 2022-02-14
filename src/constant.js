import { v4 as uuidv4 } from "uuid";

const profileTeams = [
  {
    title: "Researches",
    teamsProfile: [
      "avatar-logo-1",
      "avatar-logo-2",
      "avatar-logo-3",
      "avatar-logo-4",
      "avatar-logo-5",
    ],
  },
  {
    title: "FE/BE Team",
    teamsProfile: ["avatar-logo-6", "avatar-logo-2"],
  },
  {
    title: "PM Team",
    teamsProfile: ["avatar-logo-3", "avatar-logo-1", "avatar-logo-5"],
  },
];

const KanbanType = {
  RESEARCH: "research",
  DESIGN: "design",
  BACKEND: "backend",
};

const Task = [
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
];

export { profileTeams, KanbanType, Task };
