import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import thingspeakImg from "@/public/thingspeak.png";
import dropboxcloneImg from "@/public/dropboxclone.png";
import algo_vizgif from "@/public/algo_viz.gif";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Project Intern",
    location: "Adani Power, Ahmedabad, Gujarat",
    description:
      "Coming soon...",
    icon: React.createElement(CgWorkAlt),
    date: "May '25 - Jul '25",
  },
  {
    title: "Club Member",
    location: "Animation and Game Design Club",
    description:
      "I am a game developer and a member of the Animation and Game Design Club at IIT (ISM) Dhanbad.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr '24 - Present",
  },
  {
    title: "Club Member",
    location: "Electronics and IoT Club",
    description:
      "I am a member of the Electronics and IoT Club at IIT (ISM) Dhanbad. I have worked on integrating various sensors with ESP32 and Arduino boards.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan '24 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Battery Management System",
    description:
      "This project is an esp32 based IoT battery management system. It uses thingspeak to send data to the cloud.",
    tags: ["MATLAB", "Simulink", "KiCAD", "LTspice", "Arduino IDE"],
    imageUrl: thingspeakImg,
  },
  {
    title: "Dropbox Clone",
    description:
      "A full-stack web app that allows users to upload files and share them with others. It uses Next.js, Prisma, PostgreSQL and Tailwind.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    imageUrl: dropboxcloneImg,
  },
  {
    title: "Pathfinding Algorithm Visualizer",
    description:
      "A unity based pathfinding algorithm visualizer. It uses A* and Dijkstra algorithms to find the shortest path between two points in a maze and visualize it in real time.",
    tags: ["Unity", "C#"],
    imageUrl: algo_vizgif,
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "C#",
  "MATLAB",
  "Simulink",
  "KiCAD",
  "Arduino IDE",
  "LTspice",
  "LabVIEW",
  "Unity",
  "Python",
  "TensorFlow",
  "PyTorch",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Express",
  "PostgreSQL",
] as const;
