"use client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:am@aayushmohan.dev?subject=${formData.subject}&body=Hi, my name is ${formData.name} ${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex px-4 justify-evenly items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-2xl text-xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="md:text-4xl text-lg font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center md:space-x-5 space-x-2 justify-center ">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">am@aayushmohan.dev</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-4 md:mx-24"
        >
          {/* <div className="md:flex md:space-x-2 md:space-y-0 space-y-2 -mx-20 md:mx-auto"> */}
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput "
            type="email"
          />
          {/* </div> */}
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
