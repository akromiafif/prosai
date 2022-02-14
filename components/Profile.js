import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col space-y-6 mt-12">
      <div className="flex flex-row space-x-8 items-center">
        <img className="w-16 h-16" src="/img/profile-logo.png" />
        <div>
          <b className="font-poppins text-white">Afif Akromi</b>
          <p>Frontend Engineer</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-8">
        <div className="flex flex-col text-white">
          <b>372</b>
          <b>Completed Task</b>
        </div>
        <div className="flex flex-col text-white">
          <b>11</b>
          <b>Open Task</b>
        </div>
      </div>
    </div>
  );
};

export default Profile;
