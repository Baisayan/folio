import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-3xl px-6 py-10">
        <Projects />
      </div>
    </main>
  );
}
