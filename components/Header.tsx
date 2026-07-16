"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  { label: "work", href: "/work" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          <Image
            width={32}
            height={32}
            src="/logo.png"
            alt="Baisayan"
            priority
            className="shrink-0 rounded-full object-cover"
          />
          <div className="text-lg font-bold">Baisayan</div>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-bold tracking-wide text-muted-foreground transition-all duration-300 hover:scale-115 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="sm:hidden hover:scale-110"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>

        {isOpen && (
          <nav className="absolute right-6 top-full mt-2 w-44 rounded-md border bg-background p-2 shadow-lg sm:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-bold tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
