"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { getPostById, updatePost, slugify, type PostStatus } from "@/lib/blogStore";

const CATEGORIES = ["Guía definitiva", "Sector Inmobiliario", "Sector Clínicas", "Sector Restaurantes", "Sector Servicios", "Precios y ROI", "Automatización", "Casos de Éxito"];

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [status, setStatus] = useState<PostStatus>("Borrador");
  const [saving, setSaving] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const post = getPostById(id);
    if (!post) {
      setNotFound(true);
      return;
    }
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCategory(post.category);
    setStatus(post.status);
  }, [id]);

  const handleSave = (saveAs: PostStatus) => {
    if (!title.trim()) {
      alert("El título es obligatorio.");
      return;
    }
    setSaving(true);
    updatePost(id, {
      title: title.trim(),
      slug: slugify(title.trim()),
      excerpt: excerpt.trim(),
      content: content.trim(),
      category,
      status: saveAs,
      readTime: `${Math.max(1, Math.round(content.trim().split(/\s+/).filter(Boolean).length / 200))} min`,
    });
    router.push("/admin/posts");
  };

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Post no encontrado</h1>
        <p className="text-slate-500 dark:text-zinc-400 mb-8">
          Este post no existe o es un artículo estático que no se puede editar desde el admin.
        </p>
        <Link href="/admin/posts" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-sm">
          Volver a posts
        </Link>
      </div>
    );
  }

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const estimatedReadTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <div className="space-y-10 max-w-5xl">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <Link
            href="/admin/posts"
            className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a posts
          </Link>
          <h1 className="text-4xl font-bold text-black dark:text-white tracking-tight">Editar Post</h1>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => router.push("/admin/posts")}
            className="px-6 py-3 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 text-slate-500 dark:text-zinc-400 rounded-2xl font-bold text-sm hover:text-black dark:hover:text-white transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={() => handleSave("Borrador")}
            disabled={saving}
            className="px-6 py-3 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 text-slate-700 dark:text-zinc-300 rounded-2xl font-bold text-sm hover:border-black dark:hover:border-white transition-all"
          >
            Guardar borrador
          </button>
          <button
            onClick={() => handleSave("Publicado")}
            disabled={saving}
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-sm btn-hover transition-all shadow-lg shadow-black/10 disabled:opacity-50"
          >
            {status === "Publicado" ? "Actualizar" : "Publicar"}
          </button>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Editor principal */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 space-y-8 shadow-sm">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-3">
                Título del Post
              </label>
              <textarea
                rows={2}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-2xl sm:text-3xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-slate-200 dark:placeholder:text-zinc-800 text-black dark:text-white resize-none leading-tight"
                placeholder="Título del post..."
              />
              {title && (
                <p className="text-xs text-slate-400 dark:text-zinc-600 mt-2">
                  Slug: <span className="font-mono">/blog/{slugify(title)}</span>
                </p>
              )}
            </div>

            <div className="border-t border-slate-50 dark:border-white/5 pt-6">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-3">
                Resumen / Extracto
              </label>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-slate-300 dark:placeholder:text-zinc-800 text-slate-600 dark:text-zinc-400 resize-none leading-relaxed text-sm"
                placeholder="Descripción breve (150-160 caracteres)..."
              />
              <p className="text-xs text-slate-400 dark:text-zinc-600 mt-1">{excerpt.length} / 160 caracteres</p>
            </div>

            <div className="border-t border-slate-50 dark:border-white/5 pt-6">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-3">
                Contenido
              </label>
              <textarea
                rows={20}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-slate-300 dark:placeholder:text-zinc-800 text-slate-600 dark:text-zinc-400 resize-none leading-relaxed"
                placeholder="Contenido del artículo..."
              />
              <p className="text-xs text-slate-400 dark:text-zinc-600 mt-2">
                {wordCount} palabras · ~{estimatedReadTime} min de lectura
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar de ajustes */}
        <div className="space-y-6">
          <section className="bg-white dark:bg-zinc-900 p-7 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4">
              Estado
            </label>
            <div className="flex p-1 bg-slate-50 dark:bg-black rounded-2xl">
              <button
                onClick={() => setStatus("Borrador")}
                className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${
                  status === "Borrador"
                    ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                Borrador
              </button>
              <button
                onClick={() => setStatus("Publicado")}
                className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${
                  status === "Publicado"
                    ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                Publicado
              </button>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-900 p-7 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm space-y-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-3">
                Categoría
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-5 py-3 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/5 rounded-2xl text-sm font-bold text-black dark:text-white focus:outline-none appearance-none cursor-pointer"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-3">
                Tiempo de lectura
              </label>
              <input
                readOnly
                value={`${estimatedReadTime} min`}
                className="w-full px-5 py-3 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/5 rounded-2xl text-sm font-bold text-black dark:text-white focus:outline-none cursor-default"
              />
              <p className="text-xs text-slate-400 dark:text-zinc-600 mt-1">Calculado automáticamente</p>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-900 p-7 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4">
              Vista previa SEO
            </label>
            <div className="p-4 bg-slate-50 dark:bg-black rounded-2xl space-y-1">
              <p className="text-xs text-slate-400 dark:text-zinc-600 font-mono">synora.es › blog › {slugify(title) || "slug"}</p>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400 line-clamp-1">
                {title || "Título"} | Synora
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-2">
                {excerpt || "Extracto del post..."}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
