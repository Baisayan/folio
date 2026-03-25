"use client";

import { Github } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CodeNakama",
      tags: [
        "Inngest",
        "NextJS",
        "Prisma",
        "Webhooks",
        "Pinecone",
        "Better Auth",
      ],
      description:
        "AI Code Review tool for GitHub PRs leveraging repo-wide indexing, context-aware RAG pipelines, webhook triggers, & Inngest jobs.",
      image: "/codenakama.png",
      link: "https://codenakama.baisayan.tech/",
      github: "https://github.com/Baisayan/codenakama",
    },
    {
      title: "ChangeLens",
      tags: [
        "NextJS",
        "Gemini",
        "Multi-Agent",
        "TypeScript",
        "ReactJS",
        "Vercel",
      ],
      description:
        "Gemini 3-powered Code change impact analysis using multi-agent reasoning to detect downstream effects of code change made.",
      image: "/changelens.png",
      link: "https://changelens.vercel.app/",
      github: "https://github.com/Baisayan/changelens",
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
            <CardHeader className="p-0 relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </CardHeader>

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
