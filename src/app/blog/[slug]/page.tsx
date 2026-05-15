"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, incrementViews, type BlogPost } from "@/lib/blogStore";

export default function DynamicBlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null | "loading">("loading");

  useEffect(() => {
    const found = getPostBySlug(slug);
    setPost(found ?? null);
    if (found) incrementViews(slug);
  }, [slug]);

  if (post === "loading") {
    return (
      <main className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-black dark:border-white border-t-transparent animate-spin" />
      </main>
    );
  }

  if (!post) {
    return (
      <main className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Artículo no encontrado
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 mb-8">
            Este artículo no existe o ha sido eliminado.
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:opacity-80 transition-opacity"
          >
            ← Volver al blog
          </Link>
        </div>
      </main>
    );
  }

  const paragraphs = post.content
    ? post.content.split(/\n\n+/).filter(Boolean)
    : [];

  return (
    <main className="pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-8 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6 mt-4">
            <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest px-3 py-1 bg-slate-50 dark:bg-white/5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 dark:text-zinc-600">
              {post.readTime} de lectura
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
              {post.excerpt}
            </p>
          )}
          <time
            className="block mt-4 text-sm text-slate-400 dark:text-zinc-600"
            dateTime={post.date}
          >
            {new Date(post.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        {/* Content */}
        {paragraphs.length > 0 ? (
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-zinc-400 prose-strong:text-black dark:prose-strong:text-white">
            {paragraphs.map((para, i) => {
              // Detect headings (lines starting with # or ##)
              if (para.startsWith("## ")) {
                return <h2 key={i}>{para.slice(3)}</h2>;
              }
              if (para.startsWith("# ")) {
                return <h1 key={i}>{para.slice(2)}</h1>;
              }
              if (para.startsWith("### ")) {
                return <h3 key={i}>{para.slice(4)}</h3>;
              }
              return <p key={i}>{para}</p>;
            })}
          </div>
        ) : (
          <p className="text-slate-400 dark:text-zinc-600 italic text-center py-16">
            Este artículo está en preparación.
          </p>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
            ¿Quieres automatizar tu negocio?
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 mb-6">
            Cuéntanos cómo funciona tu negocio y te preparamos un análisis gratuito de qué puedes
            automatizar hoy mismo.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform"
          >
            Hablar con un experto
          </Link>
        </div>

        {/* Back link */}
        <nav className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5">
          <Link
            href="/blog"
            className="text-sm font-semibold text-black dark:text-white hover:underline underline-offset-4"
          >
            ← Ver todos los artículos
          </Link>
        </nav>
      </article>
    </main>
  );
}
