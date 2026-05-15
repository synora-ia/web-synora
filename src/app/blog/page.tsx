"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getPublishedPosts, type BlogPost } from "@/lib/blogStore";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(getPublishedPosts());
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 block">
            Recursos
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
            Blog de Synora
          </h1>
          <p className="text-xl text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Guías prácticas para que tu negocio funcione solo. Sin jerga técnica, con ejemplos
            reales de inmobiliarias, clínicas, restaurantes y empresas de servicios.
          </p>
        </div>

        <div className="space-y-6">
          {posts.length === 0 && (
            <p className="text-slate-400 dark:text-zinc-600 text-center py-16">Cargando artículos...</p>
          )}
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="p-8 rounded-3xl border border-slate-100 dark:border-white/5 bg-white dark:bg-zinc-900 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest px-3 py-1 bg-slate-50 dark:bg-white/5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-zinc-600">{post.readTime} de lectura</span>
                    <time
                      className="text-xs text-slate-400 dark:text-zinc-600 ml-auto"
                      dateTime={post.date}
                    >
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:underline decoration-2 underline-offset-4 leading-tight">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-5 text-sm font-semibold text-black dark:text-white flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                    Leer artículo <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
