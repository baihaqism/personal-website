import { SiTypescript, SiJavascript, SiPhp, SiPython, SiCplusplus, SiHtml5, SiCss3, SiVite, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiGit, SiVercel, SiRailway, SiBootstrap, SiCodeigniter } from "react-icons/si";
import { FaJava, FaGolang } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

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
    name: "PHP",
    level: "Advanced",
    icon: SiPhp,
    color: "text-blue-300"
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
  {
    name: "Golang",
    level: "Beginner",
    icon: FaGolang,
    color: "text-blue-300"
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: SiTailwindcss,
    color: "text-blue-500"
  },
  {
    name: "React",
    level: "Advanced",
    icon: SiReact,
    color: "text-blue-500"
  },
  {
    name: "Vite",
    level: "Advanced",
    icon: SiVite,
    color: "text-purple-500"
  },
  {
    name: "CodeIgniter",
    level: "Advanced",
    icon: SiCodeigniter,
    color: "text-orange-500"
  },
  
  {
    name: "Bootstrap",
    level: "Advanced",
    icon: SiBootstrap,
    color: "text-purple-500"
  },
];

export const toolsData: skillsData[] = [
  {
    name: "Git",
    level: "Version Control",
    icon: SiGit,
    color: "text-red-500"
  },
  {
    name: "MySQL",
    level: "Database",
    icon: GrMysql,
    color: "text-blue-500"
  },
  {
    name: "Vercel",
    level: "Hosting",
    icon: SiVercel,
    color: "text-white"
  },
  {
    name: "Railway",
    level: "Hosting",
    icon: SiRailway,
    color: "text-white"
  },
];
