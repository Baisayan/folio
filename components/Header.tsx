import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="border-b backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            width={30}
            height={30}
            src="/logo.png"
            alt="Baisayan"
            className="rounded-full shrink-0 object-cover border-2"
          />
          <div className="font-bold">Baisayan</div>
        </Link>
        <nav className="flex items-center gap-6 text-">
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
