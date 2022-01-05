import type { NextPage } from "next";
import Head from "next/head";
import Avatar from "../components/Avatar";
import {ViewGridIcon,MicrophoneIcon } from "@heroicons/react/solid";
import {SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";

const Home: NextPage = () => {
    const searchInputRef = useRef({} as HTMLInputElement);

  const search= (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    const  term = searchInputRef?.current?.value;
    if (!term) return;
    else{
      console.log("hi")
    }
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="sticky top-0 flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className=" flex space-x-4 items-center ">
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
      <form className="flex flex-col items-center  mt-44 flex-grow w-4/5 ">
        <Image
          src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112_960_720.png"
          height={100}
          width={300} 
          alt={'Google Logo'}
        ></Image>
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5  mr-3 text-gray-500"></SearchIcon>
          <input ref={searchInputRef} type="text" className=" focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5"></MicrophoneIcon>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={(e)=>search(e)} className="btn">Google Search</button>
          <button onClick={(e)=>search(e)} className="btn">I´m Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
