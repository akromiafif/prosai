import React from "react";

const MenuItem = ({ title, imgUrl }) => {
  return (
    <div className="flex flex-row space-x-3 items-center cursor-pointer">
      <p className="hover:text-red-300">{title}</p>
      {imgUrl && <img className="w-6 h-6" src="/img/notification-logo.png" />}
    </div>
  );
};

export default MenuItem;
