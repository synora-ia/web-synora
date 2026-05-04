import Link from "next/link";

export default function AdminPostsPage() {
  const posts = [
    { id: 1, title: "Cómo la IA está transformando las inmobiliarias", category: "Inmobiliaria", status: "Publicado", date: "24 Mayo, 2026" },
    { id: 2, title: "5 flujos de trabajo que deberías automatizar hoy", category: "Productividad", status: "Borrador", date: "22 Mayo, 2026" },
    { id: 3, title: "Guía completa: Synora y n8n Enterprise", category: "Técnico", status: "Publicado", date: "15 Mayo, 2026" },
    { id: 4, title: "El futuro de la gestión de clínicas con IA", category: "Salud", status: "Publicado", date: "10 Mayo, 2026" },
    { id: 5, title: "Nuevas integraciones para el sector legal", category: "Legal", status: "Borrador", date: "05 Mayo, 2026" },
  ];

  return (
    <div className="space-y-12">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-white tracking-tight">Gestión del Blog</h1>
          <p className="text-slate-500 dark:text-zinc-500 mt-2">Crea, edita y gestiona tus publicaciones.</p>
        </div>
        <Link href="/admin/posts/new" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-sm btn-hover transition-all shadow-lg shadow-black/10">
          Nuevo Post
        </Link>
      </header>

      {/* Posts Table Area */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">Post</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">Categoría</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">Estado</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">Fecha</th>
                <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-white/5">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="p-8">
                    <div className="font-bold text-black dark:text-white">{post.title}</div>
                  </td>
                  <td className="p-8">
                    <span className="text-xs text-slate-500 dark:text-zinc-400">{post.category}</span>
                  </td>
                  <td className="p-8">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      post.status === "Publicado" 
                        ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" 
                        : "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="p-8 text-xs text-slate-400 dark:text-zinc-500">{post.date}</td>
                  <td className="p-8 text-right">
                    <div className="flex justify-end space-x-3">
                      <button className="p-2 text-slate-300 hover:text-black dark:hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </button>
                      <button className="p-2 text-slate-300 hover:text-black dark:hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      </button>
                      <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
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
