import type { NextPage } from "next";
import Head from "next/head";
import Avatar from "../components/Avatar";
import {ViewGridIcon,MicrophoneIcon} from "@heroicons/react/solid";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className=" flex space-x-4 items-center  ">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"></ViewGridIcon>
          {/* Avatar */}
          <Avatar url="https://randomuser.me/api/portraits/men/49.jpg" />
        </div>
      </header>
      {/* Body */}

      {/* Footer */}
    </div>
  );
};

export default Home;
