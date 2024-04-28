import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const style: any = { writingMode: "vertical-rl", textOrientation: "mixed" };
const SocialME = () => {
  return (
    <div className="text-slate-500 pr-[5%] font-extrabold flex flex-col justify-center gap-6 items-center fixed h-screen right-0 text-xl sm:text-2xl animate-[fadeRight_2s_ease-out]">
      <h1 className="font-normal" style={style}>
        Follow Me
      </h1>
      <FaFacebookF />
      <FaTwitter />
      <Link
        href={
          "https://www.linkedin.com/in/jems-rakholiya-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
      >
        <FaLinkedin />
      </Link>
      <FaInstagram />
      <Link href={"https://github.com/jemsrr"}>
        <FaGithub />
      </Link>
    </div>
  );
};

export default SocialME;
