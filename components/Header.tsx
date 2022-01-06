import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FormEvent, useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./headerOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef({} as HTMLInputElement);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  } 

  return (
    <header className="sticky top-0 bg-white">
        <div className="flex p-6 w-full items-center ">
        <Image
        src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112_960_720.png"
        alt="logo"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursos-pointer"
      />
      <form onSubmit={handleSubmit} className="flex border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow w-full focus:outline-none"
        ></input>
        <XIcon
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          onClick={() => (searchInputRef.current.value = "")}
        ></XIcon>
        <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 "></MicrophoneIcon>
        <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"></SearchIcon>
      </form>
      <Avatar className="ml-auto"
            url="https://randomuser.me/api/portraits/men/49.jpg"
      ></Avatar>
        </div>
        <HeaderOptions></HeaderOptions>
    </header>
  );
};

export default Header;
