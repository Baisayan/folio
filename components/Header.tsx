import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  { label: "work", href: "/work" },
];

const Header = () => {
  return (
    <header className="border-b backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            width={30}
            height={30}
            src="/logo.png"
            alt="Baisayan"
            className="rounded-full shrink-0 object-cover border-2"
          />
          <div className="text-lg font-bold">Baisayan</div>
        </Link>
        <nav className="flex items-center gap-8 text-">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground font-bold tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
