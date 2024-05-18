import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import ecommxscraperImg from "@/public/p1.png";
import costwiseImg from "@/public/p2.png";

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
    title: "Graduated from RK University - Tramba",
    location: "Rajkot, Gujarat, India",
    description: "Earned a Bachelor's degree in B.Tech Computer Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Ahmedabad, Gujarat, India",
    description:
      "I worked as a full-stack developer for 6 Month at X-Byte Technolabs Pvt. Ltd. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Ahmedabad, Gujarat, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Costwise",
    description:
      "Developed a price tracking web application using Next.js, allowing users to add product links, scrape data, and receive daily email alerts about price changes.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: costwiseImg,
  },
  {
    title: "Ecomm X-Scraper",
    description:
      " Developed an automated data scraping tool for e-commerce and food platforms during internship. The tool utilizes keyword, URL, and ASIN scraping methods.",
    tags: ["Python", "Django", "Scrapyd", "MySQL"],
    imageUrl: ecommxscraperImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "MySQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
