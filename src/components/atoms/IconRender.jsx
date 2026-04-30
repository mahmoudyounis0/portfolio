import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress, SiMongodb, SiNextdotjs, SiTypescript,
  SiJavascript, SiTailwindcss, SiBootstrap, SiFastapi,
  SiFlask, SiFastify, SiRedis, SiPostgresql, SiMysql,
  SiPrisma, SiPostman, SiGithubactions, SiShadcnui,
  SiRedux, SiSelenium, SiMui, SiJsonwebtokens,
} from "react-icons/si";
import {
  FaSass, FaGitAlt, FaReact, FaJs, FaHtml5,
  FaCss3, FaCss3Alt, FaBootstrap, FaNodeJs,
  FaPython, FaDocker, FaGithub,
} from "react-icons/fa";
import {
  TbBrandFramerMotion, TbApi,
  TbHierarchy,        // React Flow
  TbBolt,             // Wasp
  TbDatabaseSearch,   // React Query
  TbForms,            // Formik
  TbShieldCheck,      // Yup
} from "react-icons/tb";

import {
  MdSecurity, MdAdminPanelSettings, MdLock,
} from "react-icons/md";
import { DiNodejs } from "react-icons/di";

const iconMap = {
  // Font Awesome
  FaReact, FaJs, FaHtml5, FaCss3, FaCss3Alt,
  FaBootstrap, FaSass, FaGitAlt, FaNodeJs,
  FaPython, FaDocker, FaGithub,

  // Simple Icons
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss,
  SiBootstrap, SiExpress, SiFastapi, SiFlask, SiFastify,
  SiRedis, SiMongodb, SiPostgresql, SiMysql, SiPrisma,
  SiPostman, SiGithubactions, SiShadcnui, SiRedux,
  SiSelenium, SiMui, SiJsonwebtokens,

  // Remix Icons
  RiTailwindCssFill,

  // Tabler Icons
  TbBrandFramerMotion, TbApi,
  TbHierarchy,        // React Flow
  TbBolt,             // Wasp
  TbDatabaseSearch,   // React Query
  TbForms,            // Formik
  TbShieldCheck,      // Yup

  // Material Design Icons
  MdSecurity, MdAdminPanelSettings, MdLock,

  // DevIcons
  DiNodejs,
};

export default function IconRender({ iconName }) {
  const IconComponent = iconMap[iconName];
  return IconComponent ? (
    <IconComponent size={20} />
  ) : (
    <span>Icon Not Found</span>
  );
}