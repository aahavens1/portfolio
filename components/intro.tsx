"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export const Intro = () => {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.png"
              alt="Sanidhya portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute text-2xl bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <b className="font-bold">Hi, I&apos;m Sanidhya.</b> I&apos;m a{" "}
        <b className="font-bold">full-stack developer</b> with{" "}
        <b className="font-bold">5+ years</b> of experience. I enjoy building{" "}
        <b className="italic">sites and apps</b>. My focus is{" "}
        <b className="underline">React (Next.js)</b>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <Link
          href="/Resume-Sanidhya-Verma.pdf"
          target="_blank"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sanidhya-verma-ab8a38186/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition border border-black/10"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://github.com/sanidhyy"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition border border-black/10"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
};
