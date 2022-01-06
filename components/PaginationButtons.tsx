/* eslint-disable @next/next/link-passhref */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-between text-blue-700 mb-10 max-w-lg">
      {startIndex >= 10 && (
        <Link
        href={`/search?term=${router.query.term}&start=${startIndex-10}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline ">
            <ChevronLeftIcon  className="h-5"></ChevronLeftIcon>
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link
      href={`/search?term=${router.query.term}&start=${startIndex+10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline ">
          <ChevronRightIcon className="h-5"></ChevronRightIcon>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
