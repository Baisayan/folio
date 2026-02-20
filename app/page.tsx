import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
