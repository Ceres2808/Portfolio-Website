import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import connect4Img from "@/public/connect4.png";
import eciotsiteImg from "@/public/eciotsite.gif";
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
    title: "Technical Lead",
    location: "Electronics and IoT Club",
    description:
      "I am a member of the Electronics and IoT Club at IIT (ISM) Dhanbad. I have worked on integrating various sensors with ESP32 and Arduino boards.",
    icon: React.createElement(CgWorkAlt),
    date: "May '25 - present",
  },
  {
    title: "Club Member",
    location: "Animation and Game Design Club",
    description:
      "I am a game developer and a member of the Animation and Game Design Club at IIT (ISM) Dhanbad.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr '24 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Electronics and IoT Club Official Website",
    description:
      "A full-stack web app that serves as the official website for the Electronics and IoT Club at IIT (ISM) Dhanbad.",
    tags: ["Next.js", "React Routes", "Tailwind CSS", "Supabase", "TypeScript"],
    imageUrl: eciotsiteImg,
  },
  {
    title: "Connect 4 AI Agent",
    description:
      "a neural network-based reinforcement learning agent that plays Connect Four using the Proximal Policy Optimization (PPO) algorithm",
    tags: ["Python", "NumPy", "PyTorch", "Stable-Baselines3", "OpenAI Gym", "kaggle-environments"],
    imageUrl: connect4Img,
  },
  {
    title: "Pathfinding Algorithm Visualizer",
    description:
      "A pathfinding algorithm visualizer. It uses A* and Dijkstra algorithms to find the shortest path between two points in a randomly generated maze and visualize it in real time.",
    tags: ["Unity", "C#"],
    imageUrl: algo_vizgif,
  }
] as const;

export const skillsData = [
  "C",
  "C++",
  "C#",
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
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase"
] as const;
