import Header from "@/components/Header";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-sm text-muted-foreground">Posts coming soon.</p>
      </section>
    </main>
  );
}
