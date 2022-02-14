import React from "react";

const Header = () => {
  return (
    <div className="w-full py-4 rounded-lg flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-4 items-center">
        <img className="w-20 h-20" src="/img/prosai-logo.png" />
        <h1 className="font-bold text-3xl">Kanban Prosa</h1>
        <div className="bg-gray-300 p-1 rounded-full cursor-pointer hover:opacity-70">
          <img className="w-4 h-4" src="/img/option-logo.png" />
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-center">
        <div className="flex flex-row space-x-2 items-center">
          <img className="w-6 h-6" src="/img/avatar-logo-1.png" />
          <img className="w-6 h-6" src="/img/avatar-logo-2.png" />
          <img className="w-6 h-6" src="/img/avatar-logo-3.png" />
        </div>
        <div className="bg-gray-300 px-6 py-1 rounded-3xl">
          <b>70 Members</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
