"use client";

import React from "react";
import { Mail, Twitter, Github, Linkedin, Download } from "lucide-react";
// import SocialLink from "./SocialLink";
import Image from "next/image";

const Hero: React.FC = () => {
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
          <p className="text-gray-400">@Baisayan</p>
        </div>
      </div>

      <div className="space-y-3 text-sm text-gray-400 mb-8">
        <p>
          A Software Engineeer based in Delhi, India. I build production-ready
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
          <Download className="size-4" />
          Download CV
        </a>
        <a
          href="mailto:bbbbaisayan@gmail.com"
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-md border"
        >
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Open to work for your idea
        </a>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {/* <SocialLink
          icon={Mail}
          label="Email"
        />
        <SocialLink
          icon={Twitter}
          label="Twitter"
        />
        <SocialLink
          icon={Github}
          label="GitHub"
        />
        <SocialLink
          icon={Linkedin}
          label="LinkedIn"
        /> */}
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
