import React from "react";

const InputSearch = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <input
        className="px-4 py-1 rounded-lg focus:outline-none"
        placeholder="Search"
      />
      <img width="30" height="30" src="/img/search-logo.png" />
    </div>
  );
};

export default InputSearch;
