import React from "react";
import {
  SiPython,
  SiReact,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiPycharm,
  SiJupyter,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiR,
  SiNodedotjs
} from "react-icons/si";
import {
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaChartLine,
  FaChartPie,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaDownload,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { GiBrain, GiRobotGolem } from "react-icons/gi";
import { TbBrain, TbDatabase } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";
import { Code, Cpu, Database, Server, Terminal, Shield, CheckCircle, ArrowRight } from "lucide-react";

const iconMap = {
  SiPython,
  SiReact,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiPycharm,
  SiJupyter,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3: FaCss3Alt,
  FaCss3Alt,
  FaHtml5,
  SiR,
  SiNodedotjs,
  FaJava,
  FaChartLine,
  FaChartPie,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaDownload,
  FaLinkedin,
  FaGithub,
  GiBrain,
  GiRobotGolem,
  TbBrain,
  TbDatabase,
  HiSparkles,
  Code,
  Cpu,
  Database,
  Server,
  Terminal,
  Shield,
  CheckCircle,
  ArrowRight
};

export default function TechIcon({ name, className = "w-5 h-5", style = {} }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <Cpu className={className} style={style} />;
  }
  return <IconComponent className={className} style={style} />;
}
