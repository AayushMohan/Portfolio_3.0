"use client";
import React, { useEffect, useRef, useState } from "react";
import MediumCards from "./MediumCards";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
type Props = {};

const Blogs = (props: Props) => {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aayushmohan";

  const [mediumData, setMediumData] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    fetch(mediumURL)
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
      });
  }, []);
  return (
    <div className="h-screen overflow-hidden md:overflow-visible m-4">
      <h1 className="text-center uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-4xl md:text-5xl mt-24 md:pt-4">
        Blogs
      </h1>
      <div className="p-4 flex justify-around mt-20 items-center">
        <div className="pb-10 md:grid md:grid-cols- lg:grid-cols-3 px-10 m-4">
          {mediumData.map((article: any, index: number) => (
            <div key={index} className="">
              <MediumCards article={article} className="" ref={ref} />
            </div>
          ))}
        </div>

        {/* <div className="flex items-center"> */}
        <ArrowLongRightIcon className="h-10 text-[#F7AB0A]/80" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Blogs;
