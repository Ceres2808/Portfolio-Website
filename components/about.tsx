"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing a
        <span className="font-bold"> B.Tech in Electrical Engineering </span> 
        at <span className="font-bold">IIT (ISM) Dhanbad</span>. 
        My interests include
        <span className="font-bold"> embedded systems </span> 
        and <span className="font-bold">software developement</span>. 
        Additionally, I have knowledge of
        <span className="font-bold"> AI/ML </span> 
        and <span className="font-bold">data analytics</span>. 
        I frequently work with frameworks and technologies like {" "} 
        <span className="font-bold">Next.js</span>, 
        <span className="font-bold"> PowerBi</span>, 
        and <span className="font-bold"> Arduino Boards</span>.
        I use
        <span className="font-medium"> Visual Studio Code </span>
        as my go-to code editor.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching anime, reading books, and sketching. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
