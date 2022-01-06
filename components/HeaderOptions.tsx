import React from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsHorizontalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52">
      {/* left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected></HeaderOption>
        <HeaderOption Icon={PhotographIcon} title="Images" ></HeaderOption>
        <HeaderOption Icon={PlayIcon} title="Videos" ></HeaderOption>
        <HeaderOption Icon={NewspaperIcon} title="News" ></HeaderOption>
        <HeaderOption Icon={MapIcon} title="Maps" ></HeaderOption>
        <HeaderOption Icon={DotsHorizontalIcon} title="More" ></HeaderOption>
      </div>
      {/* right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
