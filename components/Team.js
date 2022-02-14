import React from "react";
import { profileTeams } from "../src/constant";

const Teams = () => {
  return (
    <div className="flex flex-col space-y-4 mt-6 text-white ">
      <b className="text-black">Teams</b>

      {profileTeams.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row space-x-2 justify-between items-center"
          >
            <b>{item.title}</b>

            <div className="flex flex-row space-x-1">
              {item.teamsProfile.map((team, index) => (
                <img key={index} className="w-6 h-6" src={`/img/${team}.png`} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Teams;
