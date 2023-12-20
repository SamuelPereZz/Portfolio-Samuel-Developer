import { SiGnometerminal } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiCursorClick } from "react-icons/pi";

export const projects = [
  {
    id: 1,
    title: "CLIbia",
    description:
      "A Ruby system that connects to an API to obtain dynamic and random questions. Used JSON format to store and manage question, answer, and score data, facilitating data persistence and analysis.",
    learnings: ["APIs", "JSON", "Inheritance", "FIle Manipulation"],
    icons: [
      { Icon: SiGnometerminal, title: "Project built on Terminal" },
      { Icon: DiRuby, title: "Project made with Ruby", color: "#b0215d" },
      { Icon: FaGithub, title: "Github" },
    ],
    link: "https://github.com/SamuelPereZz/clivia-generator",
  },
  {
    id: 2,
    title: "Tweetable",
    description:
      "A Twitter simulation (X) using the `Ruby on Rails` framework for the backend and HTML/CSS for the frontend. Successfully replicated all key Twitter features, providing users with a similar experience and a seamless transition between both platforms.",
    learnings: ["ERD", "MVC", "Data Base", "Scaffold", "CRUD"],
    icons: [
      {
        Icon: PiCursorClick,
        title: "Project built on localhost",
        color: "#2170b0",
      },
      {
        Icon: BiLogoPostgresql,
        title: "using postgresql for database",
        color: "#336791",
      },
      { Icon: DiRuby, title: "Project using Ruby", color: "#b0215d" },
      {
        Icon: SiRubyonrails,
        title: "Project made with Ruby on Rails",
        color: "#b0215d",
      },
      { Icon: FaGithub, title: "Github" },
    ],
    link: "https://github.com/SamuelPereZz/tweetable",
  },
  {
    id: 3,
    title: "Eatable",
    description:
      "I developed an interactive web application in React that connects to an external API to display and manage food dish cards. Users can create, modify, and delete dishes, as well as view and edit their details. This project showcases my ability to create interactive web applications with multiple functionalities and handle various libraries for a dynamic and functional design.",
    learnings: ["API", "Libraries", "CRUD", "Reusable components"],
    icons: [
      {
        Icon: PiCursorClick,
        title: "Project built on localhost",
        color: "#2170b0",
      },
      {
        Icon: IoLogoJavascript,
        title: "Project using javascript",
        color: "#F7DF1E",
      },
      { Icon: FaReact, title: "Project made in React", color: "#61DAFB" },
      { Icon: FaGithub, title: "Github" },
    ],
    link: "https://github.com/SamuelPereZz/eatable",
  },
  {
    id: 4,
    title: "Get That Home",
    description:
      "Robust real estate sales app with streamlined property listing management, user authentication, and dynamic interfaces featuring advanced filters. Built with a powerful Ruby on Rails backend for efficient database and API management, complemented by a React frontend ensuring a captivating user experience. Simplifies property exploration, user authentication, and seamless interaction with property details.",
    learnings: ["HTTP Requests", "MC", "API creation", "Hosting", "Libraries"],
    icons: [
      {
        Icon: PiCursorClick,
        title: "Project built on localhost",
        color: "#2170b0",
      },
      {
        Icon: BiLogoPostgresql,
        title: "using postgresql for database",
        color: "#336791",
      },
      { Icon: DiRuby, title: "Project using Ruby", color: "#b0215d" },
      {
        Icon: SiRubyonrails,
        title: "Project made with Ruby on Rails",
        color: "#b0215d",
      },
      {
        Icon: IoLogoJavascript,
        title: "Project using javascript",
        color: "#F7DF1E",
      },
      { Icon: FaReact, title: "Project made in React", color: "#61DAFB" },
      { Icon: FaGithub, title: "Github" },
      {
        Icon: FaPeopleGroup,
        title: "team-created project",
        color: "#33bb3e",
      },
    ],
    link: "https://github.com/SamuelPereZz/c11-team2-GetHome",
  },
];
