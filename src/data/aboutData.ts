import { SiTypescript, SiJavascript, SiPython, SiCplusplus, SiHtml5, SiCss3, SiVite, SiReact, SiTailwindcss, SiNodedotjs, SiExpress } from "react-icons/si";
import { FaJava, FaGit } from "react-icons/fa6";

export interface skillsData {
  name: string;
  level: string;
  icon: React.ComponentType;
  color?: string;
}

export const skillsData: skillsData[] = [
  {
    name: "HTML",
    level: "Advanced",
    icon: SiHtml5,
    color: "text-orange-500"
  }, 
  {
    name: "CSS",
    level: "Advanced",
    icon: SiCss3,
    color: "text-blue-500"
  },
  {
    name: "TypeScript",
    level: "Advanced",
    icon: SiTypescript,
    color: "text-blue-500"
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: SiJavascript,
    color: "text-yellow-400"
  },
  {
    name: "Python",
    level: "Advanced",
    icon: SiPython,
    color: "text-yellow-400"
  },
  {
    name: "Java",
    level: "Advanced",
    icon: FaJava,
    color: "text-red-500"
  },
  {
    name: "C++",
    level: "Advanced",
    icon: SiCplusplus,
    color: "text-blue-400"
  },
  {
    name: "Vite",
    level: "Advanced",
    icon: SiVite,
    color: "text-purple-500"
  },
  {
    name: "React",
    level: "Advanced",
    icon: SiReact,
    color: "text-blue-500"
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: SiTailwindcss,
    color: "text-blue-500"
  },
  {
    name: "Node.js",
    level: "Advanced",
    icon: SiNodedotjs,
    color: "text-green-500"
  },
  {
    name: "Express",
    level: "Advanced",
    icon: SiExpress,
    color: "text-white"
  },
];

export const toolsData: skillsData[] = [
  {
    name: "Git",
    level: "Advanced",
    icon: FaGit,
    color: "text-red-500"
  },
];
