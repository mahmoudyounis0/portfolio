import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaSass, FaGitAlt, FaReact, FaJs ,FaHtml5, FaCss3,FaCss3Alt,FaBootstrap} from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const iconMap = {
  RiTailwindCssFill,
  FaReact,
  SiTypescript,
  FaJs,
  SiNextdotjs,
  TbBrandFramerMotion,
  FaSass,
  FaGitAlt,
  SiShadcnui,FaHtml5,
  FaCss3,FaCss3Alt,FaBootstrap
};
export default function IconRender({ iconName }) {
  const IconComponent = iconMap[iconName];
  return IconComponent ? (
    <IconComponent size={20} />
  ) : (
    <span> Icon Not Found </span>
  );
}
