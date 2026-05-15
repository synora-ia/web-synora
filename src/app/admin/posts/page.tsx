"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllPosts, deletePost, togglePostStatus, getViewsForSlug, type BlogPost } from "@/lib/blogStore";

export default function AdminPostsPage() {
  const [posts, setPosts]     = useState<BlogPost[]>([]);
  const [filter, setFilter]   = useState<"todos" | "Publicado" | "Borrador">("todos");
  const [viewsMap, setViews]  = useState<Record<string, number>>({});

  useEffect(() => {
    const all = getAllPosts();
    setPosts(all);
    const map: Record<string, number> = {};
    all.forEach((p) => { map[p.slug] = getViewsForSlug(p.slug); });
    setViews(map);
  }, []);

  const handleDelete = (id: string) => {
    if (!confirm("¿Eliminar este post? Esta acción no se puede deshacer.")) return;
    deletePost(id);
    setPosts(getAllPosts());
  };

  const handleToggleStatus = (id: string) => {
    togglePostStatus(id);
    const all = getAllPosts();
    setPosts(all);
    const map: Record<string, number> = {};
    all.forEach((p) => { map[p.slug] = getViewsForSlug(p.slug); });
    setViews(map);
  };

  const filtered = filter === "todos" ? posts : posts.filter((p) => p.status === filter);
  const publishedCount = posts.filter((p) => p.status === "Publicado").length;
  const draftCount = posts.filter((p) => p.status === "Borrador").length;

  return (
    <div className="space-y-10">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-white tracking-tight">Gestión del Blog</h1>
          <p className="text-slate-500 dark:text-zinc-500 mt-2">
            {posts.length} artículos · {publishedCount} publicados · {draftCount} borradores
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-sm btn-hover transition-all shadow-lg shadow-black/10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Nuevo Post
        </Link>
      </header>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {(["todos", "Publicado", "Borrador"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              filter === f
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 text-slate-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            {f === "todos" ? "Todos" : f}
          </button>
        ))}
      </div>

      {/* Posts Table */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">Post</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 hidden md:table-cell">Categoría</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">Estado</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 hidden lg:table-cell">Fecha</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 hidden xl:table-cell text-right">Visitas</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-white/5">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-slate-400 dark:text-zinc-600 text-sm">
                    No hay posts en esta categoría.
                  </td>
                </tr>
              )}
              {filtered.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-start gap-3">
                      {post.isStatic && (
                        <span className="shrink-0 mt-1 px-2 py-0.5 bg-slate-100 dark:bg-white/5 rounded text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">
                          Estático
                        </span>
                      )}
                      <div>
                        <div className="font-bold text-black dark:text-white text-sm leading-snug">{post.title}</div>
                        <div className="text-xs text-slate-400 dark:text-zinc-600 mt-1 hidden sm:block line-clamp-1">{post.excerpt}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 hidden md:table-cell">
                    <span className="text-xs text-slate-500 dark:text-zinc-400">{post.category}</span>
                  </td>
                  <td className="p-6">
                    <button
                      onClick={() => handleToggleStatus(post.id)}
                      title="Click para cambiar estado"
                      className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:opacity-70 cursor-pointer ${
                        post.status === "Publicado"
                          ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                          : "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                      }`}
                    >
                      {post.status}
                    </button>
                  </td>
                  <td className="p-6 text-xs text-slate-400 dark:text-zinc-500 hidden lg:table-cell">
                    {new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}</td>
                  <td className="p-6 text-xs text-slate-400 dark:text-zinc-500 hidden xl:table-cell text-right font-mono">
                    {viewsMap[post.slug] ?? 0}
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end items-center gap-1">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        title="Ver en el sitio"
                        className="p-2 text-slate-300 dark:text-zinc-600 hover:text-black dark:hover:text-white transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-white/5"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </Link>
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        title="Editar"
                        className="p-2 text-slate-300 dark:text-zinc-600 hover:text-black dark:hover:text-white transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-white/5"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </Link>
                      {!post.isStatic && (
                        <button
                          onClick={() => handleDelete(post.id)}
                          title="Eliminar"
                          className="p-2 text-slate-300 dark:text-zinc-600 hover:text-red-500 transition-colors rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
