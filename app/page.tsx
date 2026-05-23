import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="m-auto w-full max-w-4xl px-3">
        <Hero />
      </div>
    </main>
  );
}
