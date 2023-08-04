import Image from "next/image";
import React from "react";

type Props = {};

const Skill = (props: Props) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 h-1/2 py-5">
      <Image
        src="https://img.icons8.com/color/48/null/html-5--v1.png"
        alt="HTML"
        height="50"
        width="50"
      />

      <Image
        src="https://img.icons8.com/color/48/null/css3.png"
        alt="CSS"
        height="50"
        width="50"
      />

      <Image
        src="https://img.icons8.com/color/48/null/sass.png"
        alt="Sass"
        height="50"
        width="50"
      />

      <Image
        src="https://img.icons8.com/color/48/null/bootstrap.png"
        alt="Bootstrap"
        height="50"
        width="50"
      />

      <Image
        src="https://img.icons8.com/color/48/null/tailwind_css.png"
        alt="Tailwind CSS"
        height="50"
        width="50"
      />

      <Image
        src="https://img.icons8.com/color/48/null/javascript--v1.png"
        alt="JavaScript"
        height="50"
        width="50"
      />
      <Image
        src="https://img.icons8.com/plasticine/100/null/react.png"
        alt="React"
        height="50"
        width="50"
      />
      <Image
        src="https://img.icons8.com/color/48/null/typescript.png"
        alt="TypeScript"
        height="50"
        width="50"
        className="rounded-[50%]"
      />

      <Image
        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png"
        alt="NextJS"
        height="50"
        width="50"
      />

      <Image
        src="https://img.icons8.com/color/48/null/redux.png"
        alt="Redux"
        width="50"
        height="50"
      />

      <Image
        src="https://img.icons8.com/color/48/null/nodejs.png"
        alt="NodeJS"
        width="50"
        height="50"
      />

      <Image
        src="https://img.icons8.com/color/48/null/firebase.png"
        alt="Firebase"
        width="50"
        height="50"
      />

      <Image
        src="https://img.icons8.com/color/48/null/python--v1.png"
        alt="Python"
        width="50"
        height="50"
      />
    </div>
  );
};

export default Skill;
