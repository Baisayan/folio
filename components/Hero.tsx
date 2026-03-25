import { Twitter, Github, Linkedin, Code, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
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
      name: "Leetcode",
      icon: Code,
      url: "https://leetcode.com/u/bSXEYnRKis/",
    },
  ];

  return (
    <section className="py-12 mb-5">
      <div className="flex items-start gap-4 mb-8">
        <Image
          width={96}
          height={96}
          src="/logo.png"
          alt="Baisayan"
          className="rounded-full shrink-0 object-cover border-2"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Baisayan Bhattacharya</h1>
          <div className="text-muted-foreground flex items-center gap-2">
            bbbbaisayan@gmail.com
          </div>
        </div>
      </div>

      <div className="space-y-4 text-sm text-muted-foreground mb-8">
        <p>
          A Software Engineer based in Delhi, India. Pursuing Bachelors of
          Technology in Information Technology.
        </p>
        <p>
          What I do: Building backend-heavy and AI-powered systems using modern
          tech stacks, focusing on performance, security, and scalable
          architecture.
        </p>
        <p>
          Currently: Developing projects like CodeNakama, while strengthening
          core CS fundamentals by building HTTP servers, Redis and Git from
          scratch.
        </p>
      </div>

      <div className="flex gap-4 mb-6">
        <a
          href="https://drive.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-md border hover:border-ring/50 transition-colors"
        >
          <Download className="size-4 text-ring" />
          Download CV
        </a>
        <a
          href="mailto:bbbbaisayan@gmail.com"
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-md border hover:border-ring/50 transition-colors"
        >
          <div className="size-2 rounded-full bg-ring" />
          Open to work for your idea
        </a>
      </div>

      <div className="flex flex-wrap gap-1 sm:gap-3 mb-8">
        {socials.map((social) => (
          <Button key={social.name} variant="ghost" size="sm" asChild>
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />
    </section>
  );
};

export default Hero;
