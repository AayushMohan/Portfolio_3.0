import Image from "next/image";
import React from "react";

type Props = {};

const Skill = (props: Props) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 gap-6 md:gap-10 h-1/2 py-5 mt-10 ">
      <Image
        src="https://img.icons8.com/color/48/null/html-5--v1.png"
        alt="HTML"
        height="50"
        width="50"
        className="translation ease-in-out duration-300 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/null/css3.png"
        alt="CSS"
        height="50"
        width="50"
        className="translation ease-in-out duration-300 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/null/sass.png"
        alt="Sass"
        height="50"
        width="50"
        className="translation ease-in-out duration-300 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/null/bootstrap.png"
        alt="Bootstrap"
        height="50"
        width="50"
        className="translation ease-in-out duration-300 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/null/tailwind_css.png"
        alt="Tailwind CSS"
        height="50"
        width="50"
        className="translation ease-in-out duration-300 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/null/javascript--v1.png"
        alt="JavaScript"
        height="50"
        width="50"
        className="translation ease-in-out duration-300 transform hover:scale-110"
      />
      <Image
        src="https://img.icons8.com/plasticine/100/null/react.png"
        alt="React"
        height="50"
        width="50"
        className="translation ease-in-out duration-300 transform hover:scale-110"
      />
      <Image
        src="https://img.icons8.com/color/48/null/typescript.png"
        alt="TypeScript"
        height="50"
        width="50"
        className="rounded-[50%] translation ease-in-out duration-500 transform hover:scale-110"
      />

      <Image
        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png"
        alt="NextJS"
        height="50"
        width="50"
        className="translation ease-in-out duration-500 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/null/redux.png"
        alt="Redux"
        width="50"
        height="50"
        className="translation ease-in-out duration-500 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/null/nodejs.png"
        alt="NodeJS"
        width="50"
        height="50"
        className="translation ease-in-out duration-500 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/null/firebase.png"
        alt="Firebase"
        width="50"
        height="50"
        className="translation ease-in-out duration-500 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/null/python--v1.png"
        alt="Python"
        width="50"
        height="50"
        className="translation ease-in-out duration-500 transform hover:scale-110"
      />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/992px-PyTorch_logo_icon.svg.png?20200318225611"
        alt="Python"
        width="40"
        height="40"
        className="ml-1.5 translation ease-in-out duration-500 transform hover:scale-110"
      />

      <Image
        src="https://img.icons8.com/color/48/tensorflow.png"
        alt="C"
        width="50"
        height="50"
        className="translation ease-in-out duration-500 transform hover:scale-110"
      />
      <Image
        src="https://img.icons8.com/color/48/numpy.png"
        alt="Numpy"
        width="50"
        height="50"
        className="translation ease-in-out duration-500 transform hover:scale-110"
      />
      <Image
        src="https://img.icons8.com/color/48/pandas.png"
        alt="Numpy"
        width="50"
        height="50"
        className="translation ease-in-out duration-500 transform hover:scale-110"
      />
    </div>
  );
};

export default Skill;
