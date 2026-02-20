import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Code,
  Download,
} from "lucide-react";
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
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/baisayan",
    },
  ];

  return (
    <section className="py-12 mb-16">
      <div className="flex items-start gap-4 mb-8">
        <Image
          width={24}
          height={24}
          src="/logo.png"
          alt="Baisayan"
          className="size-24 rounded-full shrink-0 object-cover"
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
          A Software Engineer based in Delhi, India. I build production-ready
          applications with modern technologies.
        </p>
        <p>
          What I do: Developing Frappe/ERPNext modules, Laravel applications,
          and building full-stack solutions with React, Next.js, and modern
          databases.
        </p>
        <p>
          Currently: Working at Nestorbird, integrating third-party services,
          optimizing SQL queries, and implementing role-based access control.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="https://drive.google.com/drive/folders/1IS59Ov0PV2rX3T0EYdIJDGMetXd7X_Fy?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-md border"
        >
          <Download className="size-4 text-ring" />
          Download CV
        </a>
        <a
          href="mailto:bbbbaisayan@gmail.com"
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-md border"
        >
          <div className="size-2 rounded-full bg-ring" />
          Open to work for your idea
        </a>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
