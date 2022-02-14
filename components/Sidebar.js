import React from "react";
import AddTeam from "./AddTeam";
import InputSearch from "./InputSearch";
import Menu from "./Menu";
import Profile from "./Profile";
import Teams from "./Team";

const Sidebar = () => {
  return (
    <div className="w-3/12 h-screen px-16 py-10 bg-primary-green flex flex-col">
      <InputSearch />
      <Profile />
      <Menu />
      <Teams />
      <AddTeam />
    </div>
  );
};

export default Sidebar;
