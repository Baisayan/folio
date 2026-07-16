import Header from "@/components/Header";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const skills = ["python", "cpp", "ai infra", "inference", "rag"];

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Baisayan",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/BBaisayan",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/baisayan",
    },
    {
      name: "Mail",
      icon: Mail,
      url: "mailto:bbbbaisayan@gmail.com",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="m-auto w-full max-w-4xl px-3">
        <div className="flex justify-center mb-2 sm:mb-4">
          <Image
            src="/logo.png"
            alt="Baisayan"
            width={208}
            height={208}
            priority
            className="size-40 sm:size-52 rounded-full object-cover border-2 border-ring"
          />
        </div>

        <div className="flex flex-col items-center gap-2 mb-4">
          <h1 className="sm:text-4xl text-2xl font-bold">
            Baisayan Bhattacharya
          </h1>
          <div className="text-muted-foreground">
            {"// Sophomore, IT @ GGV"}
          </div>
        </div>

        <div className="space-y-2 text-sm sm:text-base tracking-wide text-muted-foreground mb-4 text-center">
          <p>
            <span className="font-bold text-foreground">
              AI Systems Engineer
            </span>{" "}
            based in{" "}
            <span className="font-bold text-foreground">Delhi, India</span>
          </p>
          <p>
            Building{" "}
            <span className="font-bold text-foreground">AI agents</span>,
            optimizing{" "}
            <span className="font-bold text-foreground">inference</span> and{" "}
            <span className="font-bold text-foreground">finetuning</span>{" "}
            models.
          </p>
        </div>

        <div className="mb-4 flex justify-center gap-3 sm:gap-4">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="rounded-sm border-ring/40 bg-ring/10 px-2 py-1 text-xs sm:px-3 sm:text-sm text-ring hover:scale-110"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex justify-center gap-0 sm:gap-3 mb-6">
          {socials.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              asChild
              className="hover:scale-110"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2"
              >
                <social.icon className="size-4 text-ring" />
                {social.name}
              </a>
            </Button>
          ))}
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>
    </main>
  );
}
