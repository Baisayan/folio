"use client";

import { Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CodeNakama",
      description:
        "AI Code Review tool for GitHub PRs with repo-wide indexing, RAG pipeline, & background jobs.",
      link: "https://codenakama.baisayan.tech/",
      github: "https://github.com/Baisayan/codenakama",
    },
    {
      title: "BabyRedis",
      description:
        "Redis Implementation with AOF persistence, sorted sets, lists, hashes and pub/sub.",
      link: "https://github.com/Baisayan/babyredis",
      github: "https://github.com/Baisayan/babyredis",
    },
    {
      title: "Vedalloc",
      description:
        "Experimenting with custom memory allocation strategies in C using sbrk and mmap.",
      link: "https://github.com/Baisayan/vedalloc",
      github: "https://github.com/Baisayan/vedalloc",
    },
    {
      title: "Authy",
      description:
        "Authentication & Session management system with RBAC, 2FA, CSRF and XSS protection.",
      link: "https://github.com/Baisayan/authy",
      github: "https://github.com/Baisayan/authy",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl text-center tracking-tighter font-bold mb-12">What I&apos;ve Built</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-12">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="border p-0 overflow-hidden hover:border-ring/30 transition-all group cursor-pointer"
            onClick={() => project.link && window.open(project.link, "_blank")}
          >
            <CardContent className="flex flex-col justify-between">
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

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />
    </section>
  );
};

export default Projects;
