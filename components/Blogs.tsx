"use client";
import React, { useEffect, useState } from "react";
import MediumCards from "./MediumCards";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
type Props = {};

const Blogs = (props: Props) => {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aayushmohan";

  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(mediumURL)
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="h-screen">
      <h1 className="text-center uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-4xl mt-40">
        Blogs
      </h1>
      <div className="p-4 flex justify-around mt-20 items-center">
        <div className="pb-10 md:grid md:grid-cols-3 px-10 m-4">
          {mediumData.map((article: any, index: number) => (
            <div key={index} className="">
              <MediumCards article={article} className="" />
            </div>
          ))}
        </div>

        <div className="flex">
          <Link href="https://medium.com/@aayushmohan" className=" ">
            <ArrowLongRightIcon className="bg-white " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
