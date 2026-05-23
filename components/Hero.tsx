import { Twitter, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Hero = () => {
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
    <section className="items-center flex flex-col mb-15">
      <div className="flex justify-center mb-2 sm:mb-4">
        <div className="relative size-40 sm:size-52 shrink-0">
          <Image
            fill
            src="/logo.png"
            alt="Baisayan"
            className="rounded-full object-cover border-2 border-ring"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 mb-4">
        <h1 className="sm:text-5xl text-3xl font-bold">
          Baisayan Bhattacharya
        </h1>
        <div className="text-muted-foreground">{"// Sophomore, IT @ GGV"}</div>
      </div>

      <div className="space-y-2 text-sm sm:text-base tracking-wide text-muted-foreground mb-4 text-center">
        <p>
          <span className="font-bold text-foreground">AI Systems Engineer</span>{" "}
          based in{" "}
          <span className="font-bold text-foreground">Delhi, India</span>
        </p>
        <p>
          Building <span className="font-bold text-foreground">AI agents</span>,
          optimizing{" "}
          <span className="font-bold text-foreground">inference</span> and{" "}
          <span className="font-bold text-foreground">finetuning</span> models.
        </p>
      </div>

      <div className="mb-4 flex justify-center gap-3 sm:gap-4">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="rounded-sm border-ring/40 bg-ring/10 px-2 py-1 text-xs sm:px-3 sm:text-sm text-ring"
          >
            {skill}
          </Badge>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 sm:gap-4">
        {socials.map((social) => (
          <Button key={social.name} variant="ghost" asChild>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <social.icon className="size-4 text-ring" />
              {social.name}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
