"use client";
import React, { useEffect, useState } from "react";
import MediumCards from "./MediumCards";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/moving-border";

const Blogs = () => {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aayushmohan";
  const [mediumData, setMediumData] = useState([]);
  const [numCards, setNumCards] = useState(1);

  useEffect(() => {
    fetch(mediumURL)
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNumCards(1); // Small screens
      } else {
        setNumCards(3); // Large screens
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-h-screen overflow-y-scroll md:overflow-visible md:m-4 mt-14 relative">
      <h1 className="text-center uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-4xl mt-24 md:pt-14">
        Blogs
      </h1>
      <div className="p-4 justify-around items-center">
        <div className="pb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-0">
          {mediumData &&
            mediumData.slice(0, numCards).map((article, index) => (
              <div key={index} className="w-full">
                <MediumCards article={article} />
              </div>
            ))}
        </div>

        <a className="flex items-center justify-center mt-2 link_btn">
          <Link href="https://medium.com/@aayushmohan" legacyBehavior>
            <Button
              borderRadius="1rem"
              className="dark:border-slate-800 bg-black"
            >
              <span className="text-md">Read more on Medium</span>
              <ArrowLongRightIcon className="h-4 px-1" />
            </Button>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
