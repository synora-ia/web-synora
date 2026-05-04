"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple mock authentication
    if (username === "admin" && password === "synora2026") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin");
    } else {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <Link href="/" className="text-3xl font-bold text-black dark:text-white tracking-tighter mb-4 block">
            Synora<span className="text-slate-400">Admin</span>
          </Link>
          <p className="text-slate-500 dark:text-zinc-500">Introduce tus credenciales para acceder al panel.</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-2xl dark:shadow-none border border-slate-100 dark:border-white/5 transition-all">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2 px-1">Usuario</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-all" 
                placeholder="Tu usuario"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2 px-1">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white text-black dark:text-white transition-all" 
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <p className="text-xs text-red-500 font-bold px-1 animate-pulse">{error}</p>
            )}

            <button type="submit" className="w-full py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-sm btn-hover shadow-lg shadow-black/10 transition-all">
              Acceder al Panel
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-xs text-slate-400 dark:text-zinc-600 italic">
          Solo personal autorizado de Synora AI.
        </p>
      </div>
    </div>
  );
}
