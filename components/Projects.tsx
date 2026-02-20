"use client";

import {
  ExternalLink,
  Github,
  Code2,
  FileCode,
  FileType,
  Terminal,
  Box,
  Globe,
  Server,
  Database,
  Code,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "ChangeLens",
      tags: ["GoLang", "Next.js", "PostgreSQL", "JWT", "REST APIs"],
      description:
        "Backend system for appointment scheduling with user authentication, role-based access control (admin, service provider, user), and secure JWT-based REST APIs.",
      image: "/appwrite.png",
      link: "https://appointment-booking-next.vercel.app/",
      github: "https://github.com/devlpr-nitish/appointment-booking-next",
    },
    {
      title: "CodeLibra",
      tags: ["Next.js", "Node.js", "Express", "Go", "Tailwind CSS"],
      description:
        "Platform for competitive programmers to track and compare coding profiles, solve contest-wise questions, set weekly goals, and view detailed analytics—all in a clean, structured interface.",
      image: "/appwrite.png",
      link: "https://codelibra.vercel.app/",
      github: "https://github.com/devlpr-nitish/code-libra",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-12">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="border p-0 overflow-hidden hover:border-ring/30 transition-all group cursor-pointer"
            onClick={() => project.link && window.open(project.link, "_blank")}
          >
            <CardHeader className="p-0 relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </CardHeader>

            <CardContent className=" flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  {project.github && (
                    <Button variant="ghost" asChild>
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="size-5 text-ring" />
                      </a>
                    </Button>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => {
                  // Icon mapping
                  const getIcon = (name: string): LucideIcon => {
                    const iconMap: Record<string, LucideIcon> = {
                      GoLang: Terminal,
                      Go: Terminal,
                      "Next.js": Globe,
                      PostgreSQL: Database,
                      JWT: Code2,
                      "REST APIs": Server,
                      React: Box,
                      Express: Server,
                      MongoDB: Database,
                      JavaScript: FileCode,
                      TypeScript: FileType,
                    };
                    return iconMap[name] || Code;
                  };

                  // Color mapping
                  const getIconColor = (name: string): string => {
                    const colorMap: Record<string, string> = {
                      GoLang: "text-cyan-500",
                      Go: "text-cyan-500",
                      "Next.js": "text-white",
                      PostgreSQL: "text-blue-400",
                      JWT: "text-orange-500",
                      "REST APIs": "text-green-400",
                      React: "text-cyan-400",
                      Express: "text-green-400",
                      MongoDB: "text-green-600",
                      JavaScript: "text-yellow-400",
                      TypeScript: "text-blue-400",
                    };
                    return colorMap[name] || "text-gray-400";
                  };

                  const Icon = getIcon(tag);

                  return (
                    <button
                      key={tag}
                      className="text-xs px-3 py-1 rounded-md text-gray-300 border border-gray-700 hover:border-pink-500 transition-all flex items-center gap-1.5 cursor-default"
                    >
                      <Icon className={`size-3.5 ${getIconColor(tag)}`} />
                      {tag}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
