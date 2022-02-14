import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="flex flex-col space-y-4 mt-12 text-white ">
      <b className="text-black">Menu</b>
      <MenuItem title="Home" />
      <MenuItem title="My Task" />
      <MenuItem title="Notification" imgUrl="/img/notification-logo.png" />
    </div>
  );
};

export default Menu;
