"use client";

import { motion } from "framer-motion";

import SectionHeading from "./section-heading";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After passing out my <b className="font-medium">High School</b>, I
        decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{" "}
        <b className="font-medium">full-stack web development</b>.{" "}
        <i className="italic">My favorite part of programming</i> is the
        problem-solving aspect. I <u className="underline">love</u> the feeling
        of finally figuring out a solution to a problem. My core stack is{" "}
        <b className="font-medium">React, Next.js, Node.js, and MongoDB</b>. I
        am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <b className="font-medium">full-time position</b> as a software
        developer.
      </p>
      <p>
        <i className="italic">When I'm not coding</i>, I enjoy playing video
        games, watching movies, and playing with my dog. I also enjoy{" "}
        <b className="font-medium">learning new things</b>. I am currently
        learning about <b className="font-medium">history and philosophy</b>.
        I'm also learning how to play the guitar.
      </p>
    </motion.section>
  );
};

export default About;
