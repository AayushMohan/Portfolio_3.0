import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const NewsApp = (props: Props) => {
  return (
    <div>
      <div className="relative w-full h-screen flex snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-around p-4 md:py-48 h-screen">
          <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-4xl md:my-8 my-2">
            Projects
          </h3>

          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/p31j23cd/production/8ba754197bf8973a5bebd4220605e4f5b6053830-3104x1788.png?w=2000&fit=max&auto=format&dpr=2"
            width="350"
            height="450"
            className=" md:mr-0 rounded-lg md:w-[500px] md:h-[380px] object-cover"
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl md:pb-4">
            <h4 className="text-xl md:text-2xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study 1 of 5:
              </span>{" "}
              The NEWS App
            </h4>

            <div className="flex items-center justify-around">
              <Image
                src="https://img.icons8.com/color/48/null/react-native.png"
                alt="React"
                height={48}
                width={48}
              />

              <Image
                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png"
                alt="NextJS"
                height={48}
                width={48}
              />

              <Image
                src="https://img.icons8.com/color/48/null/tailwind_css.png"
                alt="Tailwind CSS"
                height={48}
                width={48}
              />

              <Image
                src="https://img.icons8.com/color/48/null/typescript.png"
                alt="TypeScript"
                height={48}
                width={48}
                // className="rounded-[50%]"
              />
            </div>
            <p className="text-center p-3 text-sm">
              News App is a mobile-optimized web application that allows users
              to browse and filter news articles from multiple sources. It is
              built using Next.js, TypeScript, TailwindCSS, StepZen API, and
              GraphQL. This project showcases my proficiency in modern web
              development technologies and my ability to build complex
              applications with a clean codebase.
            </p>
          </div>
          <div className="flex justify-evenly space-x-10 items-center">
            <Link
              href="https://news-app-sigma-khaki.vercel.app/"
              target="_blank"
            >
              <button className="link_btn p-3 px-6 bg-[#D4AF37] hover:bg-[#F7AB0A] rounded-md cursor-pointer">
                Live URL
              </button>
            </Link>

            <button className="link_btn p-3 px-4 rounded-md cursor-pointer bg-white/75 hover:bg-white text-black">
              <Link href="https://github.com/AayushMohan/news-app">
                Github Repo
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default NewsApp;
