import { Twitter, Github, Linkedin, Code } from "lucide-react";
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
      <div className="flex items-start gap-4 mb-6">
        <Image
          width={96}
          height={96}
          src="/logo.png"
          alt="Baisayan"
          className="rounded-full shrink-0 object-cover border-2"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Baisayan Bhattacharya</h1>
          <a
            href="mailto:bbbbaisayan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors">
              bbbbaisayan@gmail.com
            </div>
          </a>
        </div>
      </div>

      <div className="space-y-4 text-sm text-muted-foreground mb-6">
        <p>
          A <span className="font-bold text-foreground">Software Engineer</span>{" "}
          based in{" "}
          <span className="font-bold text-foreground">Delhi, India.</span>{" "}
          Pursuing{" "}
          <span className="font-bold text-foreground">
            Bachelors of Technology
          </span>{" "}
          in{" "}
          <span className="font-bold text-foreground">
            Information Technology.
          </span>
        </p>
        <p>
          <span className="font-bold text-foreground">What I do:</span> Building{" "}
          <span className="font-bold text-foreground">backend-heavy</span> and{" "}
          <span className="font-bold text-foreground">AI-powered systems</span>{" "}
          using modern tech stacks, focusing on{" "}
          <span className="font-bold text-foreground">
            performance, security,
          </span>{" "}
          and{" "}
          <span className="font-bold text-foreground">
            scalable architecture.
          </span>
        </p>
        <p>
          <span className="font-bold text-foreground">Currently:</span>{" "}
          Developing projects like{" "}
          <span className="font-bold text-foreground">CodeNakama,</span> while
          strengthening{" "}
          <span className="font-bold text-foreground">
            core CS fundamentals
          </span>{" "}
          by{" "}
          <span className="font-bold text-foreground">
            building HTTP servers
          </span>
          , <span className="font-bold text-foreground">Redis</span> and{" "}
          <span className="font-bold text-foreground">Git</span> from scratch.
        </p>
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
