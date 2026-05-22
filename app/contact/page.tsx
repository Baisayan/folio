import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:bbbbaisayan@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/Baisayan",
    icon: Github,
  },
  {
    label: "Twitter",
    href: "https://x.com/BBaisayan",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/baisayan",
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Contact</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Reach me at bbbbaisayan@gmail.com or through any of these profiles.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {contactLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="lg" asChild>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="flex items-center gap-2"
              >
                <link.icon className="size-4 text-ring" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}
