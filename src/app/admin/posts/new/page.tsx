"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"Borrador" | "Publicado">("Borrador");

  return (
    <div className="space-y-12 max-w-5xl">
      <header className="flex justify-between items-end">
        <div>
          <Link href="/admin/posts" className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 flex items-center hover:text-black dark:hover:text-white transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Volver a posts
          </Link>
          <h1 className="text-4xl font-bold text-black dark:text-white tracking-tight">Crear Nuevo Post</h1>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => router.push("/admin/posts")}
            className="px-8 py-4 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 text-slate-500 dark:text-zinc-400 rounded-2xl font-bold text-sm hover:text-black dark:hover:text-white transition-all"
          >
            Descartar
          </button>
          <button 
            onClick={() => router.push("/admin/posts")}
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-sm btn-hover transition-all shadow-lg shadow-black/10"
          >
            Guardar cambios
          </button>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Editor Main Section */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 space-y-8 shadow-sm">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4">Título del Post</label>
              <input 
                type="text" 
                className="w-full text-3xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-slate-200 dark:placeholder:text-zinc-800 text-black dark:text-white"
                placeholder="Escribe un título impactante..."
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4">Contenido</label>
              <textarea 
                rows={15}
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-slate-300 dark:placeholder:text-zinc-800 text-slate-600 dark:text-zinc-400 resize-none leading-relaxed"
                placeholder="Empieza a escribir la historia..."
              ></textarea>
            </div>
          </section>
        </div>

        {/* Sidebar/Settings */}
        <div className="space-y-8">
          <section className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 space-y-8 shadow-sm">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4">Estado de Publicación</label>
              <div className="flex p-1 bg-slate-50 dark:bg-black rounded-2xl">
                <button 
                  onClick={() => setStatus("Borrador")}
                  className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${status === "Borrador" ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm" : "text-slate-400"}`}
                >
                  Borrador
                </button>
                <button 
                  onClick={() => setStatus("Publicado")}
                  className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${status === "Publicado" ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm" : "text-slate-400"}`}
                >
                  Publicado
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4">Categoría</label>
              <select className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/5 rounded-2xl text-sm font-bold text-black dark:text-white focus:outline-none appearance-none">
                <option>Inmobiliaria</option>
                <option>Salud</option>
                <option>Restauración</option>
                <option>Legal</option>
                <option>Automatización</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4">Imagen de Portada</label>
              <div className="aspect-video bg-slate-50 dark:bg-black border border-dashed border-slate-200 dark:border-white/10 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-white/5 transition-all group">
                <svg className="w-8 h-8 text-slate-300 group-hover:scale-110 transition-transform mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subir Imagen</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
