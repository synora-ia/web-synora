/* COPIA PARA LA WEB PÚBLICA (synora-aurora), hecha el 15/10/2026 desde
   dashboard-synora/src/components/esfera/. No se edita aquí: si la esfera
   cambia en el CRM, se vuelve a copiar entera. El original de verdad es
   Desktop/esferas-aurea, de Josep. */

/* LA ESFERA · el personaje del asistente
   ─────────────────────────────────────────────────────────────────────────
   Portado del proyecto «esferas-aurea» de Josep (Desktop/esferas-aurea,
   esfera-core.js del 14/10/2026). El diseño es suyo y está aprobado; aquí solo
   cambia lo necesario para vivir dentro de un CRM con React:

     · Es un módulo (export) y no un <script> suelto.
     · Todas las clases llevan el prefijo `esf-`. El CRM ya tiene `.card`,
       `.badge`, `.bar`, `.mini`, `.acts`… y chocarían en las dos direcciones:
       las del CRM pintarían dentro de la esfera y las de la esfera fuera.
       Lo mismo las animaciones (`esf-*`) y las propiedades animables
       (`--esf-tono`, `--esf-t`).
     · `destroy()`: React monta y desmonta. Quita escuchas de window y de
       document, temporizadores, el requestAnimationFrame de la mirada y el
       IntersectionObserver. Su README ya lo pedía.
     · El menú de pulsación larga admite opciones de quien la use (el asistente pone
       «Abrir en grande» y «Conversación nueva»).
     · La burbuja avisa cuando se mueve (`moved`) y se le puede devolver a su
       sitio (`setPosition`): la burbuja recuerda dónde la dejaste.
     · Si la burbuja está pegada a la izquierda, la etiqueta sale a su derecha
       (antes se salía de la pantalla).
     · Fuera RealtimeAdapter: el asistente no usa voz en tiempo real (es la
       arquitectura A: dictado del navegador → n8n → voz del navegador). Sigue
       en el proyecto original para cuando haga falta.

   Uso:
     const e = new Esfera(contenedor, { mini, light, menu: [[texto, fn], …] });
     e.run(id, { state, label, text, badge, look, progress: [hechos, total] })
     e.update(id, cambios)      e.finish(id, 'done' | 'error' | null, texto)
     await e.ask({ kind: 'permiso' | 'pregunta', title, detail, choices })
     e.level(0..1)   e.nod()   e.clear()   e.sleep()   e.notify(texto)   e.destroy()
     e.addEventListener('change' | 'tap' | 'settings' | 'moved' | 'interrupted', …) */

export const STATES = {
  idle:   { name: 'En reposo',   tone: '#e6e8ee', t: 0,  pri: 0 },
  sleep:  { name: 'Durmiendo',   tone: '#8b97ab', t: 35, pri: 0, look: 'down' },
  done:   { name: 'Hecho',       tone: '#22c55e', t: 45, pri: 1, badge: 'ok' },
  think:  { name: 'Pensando',    tone: '#8b5cf6', t: 70, pri: 2, badge: 'dots', look: 'think' },
  search: { name: 'Buscando',    tone: '#3b82f6', t: 70, pri: 3, badge: 'lupa', look: 'scan' },
  work:   { name: 'Trabajando',  tone: '#3b82f6', t: 70, pri: 3, badge: 'dots' },
  error:  { name: 'Error',       tone: '#ef4f5e', t: 76, pri: 4, badge: 'x' },
  ask:    { name: 'Pregunta',    tone: '#22c3dd', t: 74, pri: 5, badge: 'ask', look: 'you' },
  notice: { name: 'Aviso',       tone: '#ec6fb5', t: 55, pri: 4, badge: 'bell', look: 'you' },
  offline:{ name: 'Sin conexión', tone: '#7b7f8c', t: 55, pri: 7, badge: 'off', look: 'down' },
  hear:   { name: 'Te leo',      tone: '#e6e8ee', t: 0,  pri: 2, look: 'input' },
  reply:  { name: 'Respondiendo', tone: '#7c83f7', t: 62, pri: 3, badge: 'dots', look: 'you' },
  listen: { name: 'Escuchando',  tone: '#14b8a6', t: 64, pri: 6, badge: 'mic', look: 'you' },
  speak:  { name: 'Hablando',    tone: '#7c83f7', t: 62, pri: 6, badge: 'voz', look: 'you' },
  need:   { name: 'Te necesita', tone: '#f59e0b', t: 78, pri: 5, badge: 'bang', look: 'you' },
};
const ICON = {
  lupa: '<circle cx="10.5" cy="10.5" r="5.5"/><path d="M15 15l4.5 4.5"/>',
  ojo:  '<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/>',
  mas:  '<path d="M12 5v14M5 12h14"/>',
  lapiz:'<path d="M5 19l3.5-.8L18.5 8.2l-2.7-2.7L5.8 15.5z"/>',
  share:'<path d="M12 15V4M7.5 8.5L12 4l4.5 4.5M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/>',
  tras: '<path d="M5 7h14M10 7V5h4v2M7 7l1 12h8l1-12"/>',
  bang: '<path d="M12 5v8.5"/><path d="M12 18.5v.1" stroke-width="3.4"/>',
  ask:  '<path d="M9 9.2a3 3 0 1 1 4.6 2.5c-1 .7-1.6 1.3-1.6 2.6"/><path d="M12 18.5v.1" stroke-width="3.4"/>',
  ok:   '<path d="M6 12.5l4 4 8-9"/>',
  x:    '<path d="M7 7l10 10M17 7L7 17"/>',
  mic:  '<rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M6 11.5a6 6 0 0 0 12 0M12 17.5V20.5"/>',
  bell: '<path d="M6.5 16v-5a5.5 5.5 0 0 1 11 0v5l1.5 2h-14z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  off:  '<path d="M4.5 9.5a11 11 0 0 1 4-2.4M19.5 9.5A11 11 0 0 0 13 6.6M7.5 12.8a6.5 6.5 0 0 1 2.5-1.4M16.5 12.8a6.5 6.5 0 0 0-1.2-.8M10.2 16a2.6 2.6 0 0 1 3.6 0"/><path d="M4 4l16 16"/>',
  voz:  '<path d="M5 10v4M9 7v10M13 4.5v15M17 8v8M21 10.5v3"/>',
};
// Vibración al entrar en cada estado: distinta para distinguirlos sin mirar la pantalla
const HAPTIC = { need: [40, 60, 40], ask: [30, 50, 30], error: [90, 50, 90], done: 15, notice: [20, 40, 20], listen: 10 };
const URGENT_AFTER = 8000;   // ms esperando respuesta antes de insistir
const SLEEP_AFTER = 45000;   // ms en reposo sin actividad antes de dormirse
const FLASH_FOR = 2200;      // ms que se ve un «hecho» o un «error» antes de volver

// Sonidos muy suaves generados al vuelo (sin archivos). Apagados por defecto.
const Sound = {
  on: false, ctx: null,
  play(kind) {
    if (!this.on) return;
    try {
      this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)();
      const notes = { need: [660, 880], done: [523, 659, 784], error: [330, 247], notice: [784, 1047] }[kind];
      if (!notes) return;
      notes.forEach((f, i) => {
        const t = this.ctx.currentTime + i * .11, o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.08, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + .35);
        o.connect(g).connect(this.ctx.destination); o.start(t); o.stop(t + .4);
      });
    } catch { /* sin audio: no pasa nada */ }
  },
};
const vibrate = (p) => { try { navigator.vibrate && navigator.vibrate(p); } catch { /* sin vibración */ } };
const escapa = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export class Esfera extends EventTarget {
  constructor(mount, opts = {}) {
    super();
    this.tasks = new Map();   // id -> tarea activa
    this.flash = null;        // «hecho» / «error» pasajero
    this.shown = null;
    this.look = null;
    this.menuExtra = opts.menu || [];
    this.vivo = true;
    this.limpiezas = [];      // lo que destroy() tiene que deshacer
    this.el = document.createElement('div');
    this.el.className = 'esf';
    this.el.innerHTML = `
      <div class="esf-orb" data-state="idle">
        <svg class="esf-ring" viewBox="0 0 100 100"><circle class="esf-track" cx="50" cy="50" r="47"/><circle class="esf-bar" cx="50" cy="50" r="47" pathLength="100" stroke-dasharray="0 100"/></svg>
        <div class="esf-shadow"></div><div class="esf-halo"></div><div class="esf-body"></div>
        <div class="esf-eyes"><span class="esf-eye esf-l"></span><span class="esf-eye esf-r"></span></div>
        <div class="esf-badge"></div>
        <span class="esf-zz">z</span><span class="esf-zz">z</span>
      </div>
      <div class="esf-card" role="dialog" aria-live="assertive"></div>
      <div class="esf-menu" role="menu"></div>
      <div class="esf-pill" aria-hidden="true"></div>`;
    this.orb = this.el.querySelector('.esf-orb');
    this.card = this.el.querySelector('.esf-card');
    this.menu = this.el.querySelector('.esf-menu');
    this.pos = { x: 0, y: 0 };      // desplazamiento de la burbuja arrastrada
    this.dnd = false;               // no molestar: sin sonidos ni vibración
    this.visible = true;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.mount(mount, opts);
    this.initGestures();
    this.lastActivity = this.lastPointer = performance.now();
    const actividad = () => this.activity();
    const puntero = () => { this.lastPointer = performance.now(); };
    this.escucha(window, 'pointermove', actividad, { passive: true });
    this.escucha(window, 'pointerdown', actividad, { passive: true });
    this.escucha(window, 'keydown', actividad, { passive: true });
    this.escucha(window, 'pointermove', puntero, { passive: true });
    this.startEyes();
    this.startBlink();
    this.startIdleLife();
    this.sleepTimer = setInterval(() => this.checkSleep(), 1000);
    this.escucha(window, 'offline', () => this.setOnline(false));
    this.escucha(window, 'online', () => this.setOnline(true));
    if (navigator.onLine === false) this.setOnline(false);
    // batería: se pausa con la pestaña en segundo plano o con la esfera fuera de la pantalla
    this.escucha(document, 'visibilitychange', () => this.updatePaused());
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver(([en]) => { this.visible = en.isIntersecting; this.updatePaused(); });
      this.io.observe(this.orb);
    }
    this.render();
    if (opts.enter !== false && !this.reduced) { this.play('esf-enter', 750); this.later(() => this.nod(), 780); }
  }

  /* Escuchas y temporizadores que destroy() tiene que poder quitar. */
  escucha(donde, tipo, fn, o) { donde.addEventListener(tipo, fn, o); this.limpiezas.push(() => donde.removeEventListener(tipo, fn, o)); }
  later(fn, ms) { const id = setTimeout(() => { if (this.vivo) fn(); }, ms); this.limpiezas.push(() => clearTimeout(id)); return id; }

  destroy() {
    if (!this.vivo) return;
    this.vivo = false;
    this.limpiezas.forEach((f) => { try { f(); } catch { /* ya quitado */ } });
    this.limpiezas = [];
    [this.sleepTimer].forEach(clearInterval);
    [this.idleT, this.blinkT, this.flashTimer, this.urgentTimer, this.badgeT, this.nodT, this.pokeT].forEach(clearTimeout);
    Object.keys(this).filter((k) => k.startsWith('_esf-')).forEach((k) => clearTimeout(this[k]));
    cancelAnimationFrame(this.raf);
    this.io?.disconnect();
    this.closeMenu();
    for (const t of this.tasks.values()) t.resolve?.(null);   // quien esperaba una respuesta no se queda colgado
    this.tasks.clear();
    this.el.remove();
  }

  // Se puede mover entre contenedores y cambiar de tamaño/tema sin perder el estado.
  mount(container, { mini = false, light = false } = {}) {
    this.el.classList.toggle('esf-mini', mini);
    this.el.classList.toggle('esf-light', light);
    this.mini = mini;
    this.pos = { x: 0, y: 0 }; this.el.style.translate = '';
    this.el.classList.remove('esf-izq');
    this.closeMenu?.();
    container.appendChild(this.el);
  }
  setLight(light) { this.el.classList.toggle('esf-light', !!light); }

  updatePaused() {
    this.paused = document.hidden || !this.visible;
    this.el.classList.toggle('esf-paused', this.paused);
  }
  // Pone una clase un momento (gestos de una sola vez).
  play(cls, ms) {
    this.orb.classList.remove(cls); void this.orb.offsetWidth; this.orb.classList.add(cls);
    clearTimeout(this['_' + cls]); this['_' + cls] = setTimeout(() => this.orb.classList.remove(cls), ms);
  }
  sound(kind) { if (!this.dnd) Sound.play(kind); }
  haptic(p) { if (!this.dnd && p) vibrate(p); }
  get soundOn() { return Sound.on; }
  set soundOn(v) { Sound.on = !!v; }

  run(id, task) {   // cualquier tarea cuenta como actividad: no se duerme mientras trabaja o conversa
    this.lastActivity = performance.now(); this.asleep = false;
    this.tasks.set(id, { since: performance.now(), ...task }); this.flash = null; this.render();
  }
  update(id, patch) { const t = this.tasks.get(id); if (t) { Object.assign(t, patch); this.render(); } }
  finish(id, result = 'done', text = '') {
    this.tasks.delete(id);
    if (result) {
      this.flash = { state: result, text, until: performance.now() + FLASH_FOR };
      this.sound(result);
      clearTimeout(this.flashTimer);
      this.flashTimer = setTimeout(() => { this.flash = null; this.render(); }, FLASH_FOR);
    }
    this.render();
  }
  clear() {   // «sin conexión» no depende de lo que se haga: se conserva
    const off = this.tasks.get('offline');
    for (const [id, t] of this.tasks) if (id !== 'offline') t.resolve?.(null);
    this.tasks.clear(); if (off) this.tasks.set('offline', off);
    this.flash = null; this.closeCard(); this.lvlTarget = 0; this.render();
  }
  level(v) { this.lvlTarget = Math.max(0, Math.min(1, v)); }
  // Mirar a un punto de la pantalla, en px de ventana (la última letra que escribes).
  // Dura `ms` desde la última llamada: si dejas de escribir, vuelve a lo suyo. null lo suelta.
  mira(p, ms = 2500) { this.mirada = p ? { x: p.x, y: p.y, until: performance.now() + ms } : null; }
  nod() {
    this.orb.classList.remove('esf-nod'); void this.orb.offsetWidth; this.orb.classList.add('esf-nod');
    clearTimeout(this.nodT); this.nodT = setTimeout(() => this.orb.classList.remove('esf-nod'), 230);
  }
  sleep() { this.clear(); this.asleep = true; this.render(); }
  // Aviso que no bloquea: se ve unos segundos (por encima de «trabajando») y desaparece solo.
  notify(text, ms = 4500) {
    const id = 'aviso-' + Date.now();
    this.run(id, { state: 'notice', label: 'Aviso', text });
    this.sound('notice');
    this.later(() => this.finish(id, null), ms);
  }
  // Sin conexión: se pone encima de todo hasta que vuelve; al volver, un «hecho» breve.
  setOnline(on) {
    if (!on && !this.tasks.has('offline')) this.run('offline', { state: 'offline', label: 'Sin conexión', text: 'Sin conexión' });
    else if (on && this.tasks.has('offline')) this.finish('offline', 'done', 'Conexión recuperada');
  }

  // Pide una respuesta. Devuelve la opción elegida (o null si se cierra sin elegir).
  ask({ id = 'ask-' + Math.random().toString(36).slice(2), kind = 'permiso', title, detail = '', choices }) {
    return new Promise((resolve) => {
      const state = kind === 'permiso' ? 'need' : 'ask';
      choices = choices || [{ label: 'Denegar', value: false }, { label: 'Permitir', value: true, primary: true }];
      this.run(id, { state, label: STATES[state].name, text: title, title, detail, choices, resolve, asking: true });
      this.sound('need');   // la vibración la pone render() al cambiar de estado
      this.openCard(id);
    });
  }
  answer(id, value) {
    const t = this.tasks.get(id); if (!t) return;
    this.tasks.delete(id); this.closeCard();
    t.resolve(value);
    this.render();
  }

  // Qué se ve: lo más urgente. Si hay varias tareas, gana la de mayor prioridad.
  current() {
    let best = null;
    for (const [id, t] of this.tasks) if (!best || STATES[t.state].pri > STATES[best[1].state].pri) best = [id, t];
    if (best) return { id: best[0], ...best[1] };
    if (this.flash) return { state: this.flash.state, text: this.flash.text };
    return { state: this.asleep ? 'sleep' : 'idle' };
  }

  render() {
    if (!this.vivo) return;
    const c = this.current(), s = STATES[c.state];
    if (c.state !== 'sleep') this.asleep = false;
    this.shown = c;
    this.look = c.look || s.look || null;
    const o = this.orb;
    // al cambiar de estado: microgesto, parpadeo y una vibración propia de cada estado
    if (this.prevState !== undefined && this.prevState !== c.state) {
      if (!this.reduced) this.play('esf-shift', 380);
      if (!['done', 'sleep', 'error', 'offline'].includes(c.state)) { o.classList.add('esf-blink'); this.later(() => o.classList.remove('esf-blink'), 110); }
      this.haptic(HAPTIC[c.state]);
    }
    this.prevState = c.state;
    o.dataset.state = c.state;
    o.style.setProperty('--esf-tono', s.tone);
    o.style.setProperty('--esf-t', s.t + '%');
    this.el.style.setProperty('--esf-tono', s.tone);   // también para la tarjeta y la etiqueta, que van fuera de la esfera
    // insignia: si cambia de icono, sale girando y entra el nuevo
    const b = c.badge || s.badge, badge = o.querySelector('.esf-badge');
    const html = !b ? '' : b === 'dots' ? '<span class="esf-dots"><b></b><b></b><b></b></span>' : `<svg viewBox="0 0 24 24">${ICON[b]}</svg>`;
    if ((badge.dataset.k || '') !== (b || '')) {
      const wasOn = badge.classList.contains('esf-on');
      badge.dataset.k = b || '';
      clearTimeout(this.badgeT);
      if (wasOn && b && !this.reduced) {
        badge.classList.add('esf-swap');
        this.badgeT = setTimeout(() => { badge.innerHTML = html; badge.classList.remove('esf-swap'); }, 140);
      } else { badge.innerHTML = html; badge.classList.remove('esf-swap'); }
    }
    badge.classList.toggle('esf-on', !!b);
    // progreso; al completarse brilla un instante
    const ring = o.querySelector('.esf-ring');
    ring.classList.toggle('esf-on', !!c.progress);
    if (c.progress) o.querySelector('.esf-bar').setAttribute('stroke-dasharray', `${(100 * c.progress[0] / c.progress[1]).toFixed(1)} 100`);
    ring.classList.toggle('esf-full', !!c.progress && c.progress[0] >= c.progress[1]);
    // insistir si lleva rato esperando respuesta
    clearTimeout(this.urgentTimer);
    o.classList.remove('esf-urgent');
    if (c.asking) {
      const left = URGENT_AFTER - (performance.now() - c.since);
      this.urgentTimer = setTimeout(() => { o.classList.add('esf-urgent'); this.sound('need'); this.haptic([60, 40, 60]); }, Math.max(0, left));
    }
    // tarjeta: si lo visible ya no es lo que se estaba preguntando, se cierra
    if (this.cardFor && this.cardFor !== c.id) this.closeCard();
    if (c.asking && !this.cardFor && !this.dismissed?.has(c.id) && (!this.mini || this.cardEnMini)) this.openCard(c.id);
    // etiqueta lateral (versión pequeña)
    const pill = this.el.querySelector('.esf-pill');
    const pillText = c.state === 'idle' || c.state === 'sleep' ? '' : (c.text || c.label || s.name) + (c.progress ? ` · ${c.progress[0]}/${c.progress[1]}` : '');
    pill.textContent = pillText;
    pill.classList.toggle('esf-on', this.mini && !!pillText && !this.cardFor);
    this.dispatchEvent(new CustomEvent('change', { detail: { state: c.state, name: c.label || s.name, text: c.text || '', progress: c.progress || null, tone: s.tone, asking: !!c.asking } }));
  }

  openCard(id) {
    const t = this.tasks.get(id); if (!t) return;
    this.cardFor = id;
    const kind = t.state === 'need' ? 'Necesito tu OK' : 'Pregunta';
    const col = t.choices.length > 2;
    this.card.innerHTML = `<button type="button" class="esf-x" aria-label="Cerrar">×</button><div class="esf-k">${kind}</div><h3></h3><p></p>
      <div class="esf-acts${col ? ' esf-col' : ''}">${t.choices.map((ch, i) => `<button type="button" data-i="${i}" class="${ch.primary ? 'esf-primary' : ''}">${escapa(ch.label)}</button>`).join('')}</div>`;
    this.card.querySelector('h3').textContent = t.title;
    this.card.querySelector('p').textContent = t.detail;
    this.card.querySelectorAll('[data-i]').forEach((btn) => btn.onclick = (e) => { e.stopPropagation(); this.answer(id, t.choices[+btn.dataset.i].value); });
    this.card.querySelector('.esf-x').onclick = (e) => { e.stopPropagation(); (this.dismissed ||= new Set()).add(id); this.closeCard(); this.render(); };
    this.card.classList.add('esf-open');
    this.el.classList.add('esf-preguntando');
    this.render();
  }
  closeCard() {
    this.cardFor = null;
    this.card.classList.remove('esf-open');
    this.el.classList.remove('esf-preguntando');
  }

  tap() {
    const c = this.shown;
    if (c?.asking) return this.cardFor ? this.closeCard() : (this.dismissed?.delete(c.id), this.openCard(c.id));
    if (this.asleep) { this.asleep = false; this.render(); }
    this.orb.classList.remove('esf-poke'); void this.orb.offsetWidth; this.orb.classList.add('esf-poke');
    clearTimeout(this.pokeT); this.pokeT = setTimeout(() => this.orb.classList.remove('esf-poke'), 420);
    this.dispatchEvent(new CustomEvent('tap'));
  }

  /* ---------- gestos: tocar, arrastrar (burbuja) y pulsación larga (menú) ---------- */
  initGestures() {
    const o = this.orb; let st = null, lp = null;
    o.addEventListener('pointerdown', (e) => {
      if (e.button > 0) return;
      st = { x: e.clientX, y: e.clientY, px: this.pos.x, py: this.pos.y, moved: false, long: false };
      try { o.setPointerCapture(e.pointerId); } catch { /* sin captura */ }
      lp = setTimeout(() => { if (st && !st.moved) { st.long = true; this.haptic(25); this.openMenu(); } }, 520);
    });
    o.addEventListener('pointermove', (e) => {
      if (!st) return;
      const dx = e.clientX - st.x, dy = e.clientY - st.y;
      if (!st.moved && Math.hypot(dx, dy) > 7) { st.moved = true; clearTimeout(lp); if (this.mini) { this.closeMenu(); this.el.classList.remove('esf-snap'); this.el.classList.add('esf-dragging'); } }
      if (st.moved && this.mini) this.setPos(st.px + dx, st.py + dy);
    });
    const end = () => {
      if (!st) return;
      clearTimeout(lp);
      if (st.moved && this.mini) this.snap();
      else if (!st.moved && !st.long) this.tap();
      this.el.classList.remove('esf-dragging');
      st = null;
    };
    o.addEventListener('pointerup', end);
    o.addEventListener('pointercancel', () => { clearTimeout(lp); this.el.classList.remove('esf-dragging'); if (st?.moved && this.mini) this.snap(); st = null; });
    o.addEventListener('contextmenu', (e) => e.preventDefault());   // la pulsación larga es nuestro menú
    // Con el teclado también: Intro o espacio tocan la esfera.
    o.tabIndex = 0;
    o.setAttribute('role', 'button');
    o.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.tap(); } });
    this.limpiezas.push(() => clearTimeout(lp));
  }
  // Límites: el contenedor posicionado donde vive la burbuja.
  area() { return (this.el.parentElement?.offsetParent || document.body).getBoundingClientRect(); }
  setPos(x, y) {
    const a = this.area(), r = this.el.getBoundingClientRect(), m = 10;
    const bx = r.left - this.pos.x, by = r.top - this.pos.y;   // dónde estaría sin desplazar
    this.pos = { x: Math.min(a.right - m - r.width - bx, Math.max(a.left + m - bx, x)), y: Math.min(a.bottom - m - r.height - by, Math.max(a.top + m - by, y)) };
    this.el.style.translate = `${this.pos.x}px ${this.pos.y}px`;
  }
  // Devolverla a donde la dejaste (sin animación), por ejemplo al recargar.
  setPosition(p) {
    if (!p || !Number.isFinite(p.x) || !Number.isFinite(p.y)) return;
    this.setPos(p.x, p.y);
    this.el.classList.toggle('esf-izq', this.alaIzquierda());
  }
  alaIzquierda() {
    const a = this.area(), r = this.el.getBoundingClientRect();
    return r.left + r.width / 2 < a.left + a.width / 2;
  }
  // Se pega al borde izquierdo o derecho, el que esté más cerca.
  snap() {
    const a = this.area(), r = this.el.getBoundingClientRect(), m = 14;
    const toLeft = this.alaIzquierda();
    const bx = r.left - this.pos.x;
    this.el.classList.add('esf-snap');
    this.setPos(toLeft ? a.left + m - bx : a.right - m - r.width - bx, this.pos.y);
    this.el.classList.toggle('esf-izq', toLeft);
    this.haptic(8);
    this.dispatchEvent(new CustomEvent('moved', { detail: { ...this.pos, izquierda: toLeft } }));
  }

  openMenu() {
    const items = [
      ...this.menuExtra,
      [Sound.on ? 'Silenciar sonidos' : 'Activar sonidos', () => { Sound.on = !Sound.on; this.dispatchEvent(new CustomEvent('sound', { detail: Sound.on })); }],
      [this.dnd ? 'Quitar «no molestar»' : 'No molestar', () => { this.dnd = !this.dnd; this.dispatchEvent(new CustomEvent('dnd', { detail: this.dnd })); }],
      [this.asleep ? 'Despertar' : 'Dormir', () => { if (this.asleep) { this.asleep = false; this.lastActivity = performance.now(); this.render(); } else this.sleep(); }],
      ['Ajustes', () => this.dispatchEvent(new CustomEvent('settings'))],
    ];
    this.menu.innerHTML = items.map(([t], i) => `<button type="button" role="menuitem" data-i="${i}">${escapa(t)}</button>`).join('');
    this.menu.querySelectorAll('button').forEach((b) => b.onclick = (e) => { e.stopPropagation(); this.closeMenu(); items[+b.dataset.i][1](); });
    this.closeCard(); this.menu.classList.add('esf-open');
    this.el.querySelector('.esf-pill').classList.remove('esf-on');
    // se cierra al tocar fuera
    this.later(() => { this.outside = (e) => { if (!this.menu.contains(e.target)) this.closeMenu(); }; document.addEventListener('pointerdown', this.outside, true); }, 0);
  }
  closeMenu() {
    this.menu?.classList.remove('esf-open');
    if (this.outside) { document.removeEventListener('pointerdown', this.outside, true); this.outside = null; }
  }

  /* ---------- vida en reposo: gestos pequeños, aleatorios y espaciados ---------- */
  startIdleLife() {
    const loop = () => {
      this.idleT = setTimeout(() => {
        if (!this.vivo) return;
        const quiet = performance.now() - this.lastPointer > 4000;   // si la estás usando, no distrae
        if (this.orb.dataset.state === 'idle' && quiet && !this.paused && !this.reduced) this.idleAct();
        loop();
      }, 7000 + Math.random() * 9000);
    };
    loop();
  }
  idleAct() {
    const r = Math.random(), now = performance.now();
    if (r < .35) this.lookOverride = { until: now + 1800, f: (t) => ({ ty: t < .45 ? -.55 : t < .9 ? .55 : 0, tp: .05 }) };   // mira a un lado y a otro
    else if (r < .6) { const o = this.orb; const b = () => { o.classList.add('esf-blink'); this.later(() => o.classList.remove('esf-blink'), 110); }; b(); this.later(b, 240); }   // parpadeo doble
    else if (r < .82) this.play('esf-hop1', 700);   // saltito
    else this.play('esf-tilt', 1600);               // ladea la cabeza
  }

  activity() {
    this.lastActivity = performance.now();
    if (this.asleep && !this.tasks.size) { this.asleep = false; this.render(); }
  }
  checkSleep() {
    if (!this.asleep && !this.tasks.size && !this.flash && performance.now() - this.lastActivity > SLEEP_AFTER) { this.asleep = true; this.render(); }
  }

  startBlink() {
    const loop = () => {
      this.blinkT = setTimeout(() => {
        if (!this.vivo) return;
        if (!['done', 'sleep', 'error', 'offline'].includes(this.orb.dataset.state)) { this.orb.classList.add('esf-blink'); this.later(() => this.orb.classList.remove('esf-blink'), 120); }
        loop();
      }, 2400 + Math.random() * 2800);
    };
    loop();
  }

  // Mirada: los ojos ruedan sobre la esfera, hacia el cursor o según lo que hace.
  startEyes() {
    const body = this.orb.querySelector('.esf-body'), shadow = this.orb.querySelector('.esf-shadow');
    const ojos = [...this.orb.querySelectorAll('.esf-eye')];   // [izquierdo, derecho]
    let pointer = null, lastMove = 0, yaw = 0, pitch = 0, vy = 0, vp = 0, ty = 0, tp = 0, wander = 0, lvl = 0, prev = performance.now(), lastWork = 0;
    this.escucha(window, 'pointermove', (e) => { pointer = { x: e.clientX, y: e.clientY }; lastMove = performance.now(); }, { passive: true });
    const frame = (now) => {
      if (!this.vivo) return;
      this.raf = requestAnimationFrame(frame);
      // batería: en pausa no se calcula nada; en reposo sin interacción, a ~15 fps
      if (this.paused) { prev = now; return; }
      const calm = ['idle', 'sleep', 'offline'].includes(this.orb.dataset.state) && now - lastMove > 8000 && !this.lookOverride && !this.mirada;
      if (calm && now - lastWork < 66) return;
      lastWork = now;
      const dt = Math.min(.05, (now - prev) / 1000); prev = now;
      const look = this.look, ov = this.lookOverride, mi = this.mirada;
      if (mi && now >= mi.until) this.mirada = null;
      if (ov && now < ov.until) ({ ty, tp } = ov.f(1 - (ov.until - now) / 1800));
      else if (ov) this.lookOverride = null;
      if (this.mirada) {
        // a un punto concreto: como al cursor, pero sin topes bruscos (tanh), para que
        // recorra la línea de texto con suavidad de la primera letra a la última
        const r = this.orb.getBoundingClientRect();
        ty = .62 * Math.tanh((mi.x - (r.left + r.width / 2)) / 260);
        tp = -.52 * Math.tanh((mi.y - (r.top + r.height / 2)) / 260);
      }
      else if (ov && now < ov.until) { /* mirada del gesto de reposo */ }
      else if (look === 'think') { ty = .42; tp = .48; }
      else if (look === 'scan') { ty = Math.sin(now / 520) * .55; tp = 0; }
      else if (look === 'read') { ty = -.4 + ((now / 900) % 1) * .8; tp = -.1; }
      else if (look === 'you') { ty = 0; tp = 0; }
      else if (look === 'down') { ty = 0; tp = -.25; }
      else if (look === 'input') { ty = -.05; tp = -.48; }   // mira al campo de texto, abajo
      else if (pointer && now - lastMove < 3000) {
        const r = this.orb.getBoundingClientRect();
        ty = Math.max(-.6, Math.min(.6, (pointer.x - (r.left + r.width / 2)) / 300));
        tp = Math.max(-.5, Math.min(.5, -(pointer.y - (r.top + r.height / 2)) / 300));
      } else if (now > wander) { ty = Math.random() * .8 - .4; tp = Math.random() * .55 - .25; wander = now + 1500 + Math.random() * 2000; }
      // muelle: la mirada se pasa un poco del objetivo y vuelve (más viva que un deslizamiento lineal)
      const stiff = 95, damp = Math.exp(-12 * dt);
      vy = (vy + (ty - yaw) * stiff * dt) * damp; yaw += vy * dt;
      vp = (vp + (tp - pitch) * stiff * dt) * damp; pitch += vp * dt;
      // volumen suavizado: sube rápido y baja algo más despacio, como un vúmetro
      const lt = this.lvlTarget || 0, lk = Math.min(1, dt * (lt > lvl ? 22 : 9));
      lvl += (lt - lvl) * lk;
      this.orb.style.setProperty('--lvl', lvl.toFixed(3));
      const R = this.orb.offsetWidth / 2, sy = Math.sin(yaw), sp = Math.sin(pitch);
      // Los ojos van pintados sobre una bola (15/10): giran juntos, como una cara. Al mirar a
      // un lado se juntan y se estrechan; al mirar arriba o abajo se aplastan un poco. Nunca se
      // inclinan (en diagonal daban cara de sospecha) ni pasan de ~0,75 R (al borde parecía que
      // la esfera se fuera). Probado en una rejilla de 3×3 y 5×5 posiciones con Josep. El
      // parpadeo va dentro, en el eje del ojo.
      const lonC = yaw * 1.1, latC = pitch, parpadeo = this.orb.classList.contains('esf-blink') ? ' scaleY(.1)' : '';
      const sL = Math.sin(lonC), sA = Math.sin(latC);
      const cx = .72 * R * sL * Math.cos(latC), cy = -.68 * R * sA;
      const sep = .18 * R * (1 - .25 * sL * sL);
      const ancho = 1 - .3 * sL * sL, alto = 1 - .3 * sA * sA;
      ojos.forEach((ojo, i) => {
        const lado = i ? 1 : -1;
        const dx = cx + lado * (sep - .18 * R);
        ojo.style.transform = `translate(${dx.toFixed(1)}px, ${cy.toFixed(1)}px) scale(${ancho.toFixed(3)}, ${alto.toFixed(3)})${parpadeo}`;
      });
      // el cuerpo se inclina un poco hacia donde mira, y la sombra al revés: sensación de volumen
      body.style.translate = `${(sy * R * .04).toFixed(1)}px ${(-sp * R * .03).toFixed(1)}px`;
      shadow.style.translate = `${(-sy * R * .05).toFixed(1)}px 0`;
    };
    this.raf = requestAnimationFrame(frame);
  }
}

/* =====================================================================
   Asistente — traduce un vocabulario de eventos a lo que hace la esfera.
   La esfera no sabe nada de dictado, de n8n ni de voces: solo esto.

   Usuario   user.typing · user.speech.start · user.speech.end · user.audio.level {v}
             stt.partial {text} · stt.final {text}
   Agente    agent.thinking · agent.text.delta {text} · agent.text.done
             agent.speech.start · agent.audio.level {v} · agent.transcript.delta {text} · agent.speech.end
             agent.tool.start {id, action, label, text, total} · agent.tool.progress {id, done, total}
             agent.tool.end {id, ok, text} · agent.confirm {title, detail, choices} → Promise
             agent.error {text} · agent.notice {text} · agent.greet · agent.sleep · reset
   action: buscar · revisar · crear · editar · compartir · eliminar (o cualquier otra: «trabajando»)
   ===================================================================== */
const ACTION_LOOK = {
  buscar:    { state: 'search' },
  revisar:   { state: 'work', badge: 'ojo', look: 'read' },
  crear:     { state: 'work', badge: 'mas' },
  editar:    { state: 'work', badge: 'lapiz' },
  compartir: { state: 'work', badge: 'share' },
  eliminar:  { state: 'work', badge: 'tras' },
};
const THINK_DELAY = 300;   // si la respuesta llega antes, no se enseña «pensando» (evita parpadeos)
const tail = (s, n = 70) => (s.length > n ? '…' + s.slice(-n) : s);

export class Asistente {
  constructor(esfera) { this.e = esfera; this.speaking = false; this.listening = false; this.heard = ''; this.said = ''; this.written = ''; }

  emit(type, d = {}) {
    const e = this.e;
    if (!e?.vivo) return undefined;
    switch (type) {
      case 'user.typing':
        if (!e.tasks.has('leer')) e.run('leer', { state: 'hear', label: 'Te leo', text: '' });
        e.nod();
        clearTimeout(this.typingT); this.typingT = setTimeout(() => e.finish('leer', null), 1500);
        break;
      case 'user.speech.start':
        // si el asistente estaba hablando, le está interrumpiendo: se calla y escucha al momento
        if (this.speaking) this.emit('agent.speech.end', { interrupted: true });
        this.stopThinking(); e.finish('leer', null);
        this.listening = true; this.heard = '';
        e.run('oir', { state: 'listen', label: 'Escuchando', text: 'Te escucho…' });
        break;
      case 'user.audio.level': if (this.listening) e.level(d.v); break;
      case 'stt.partial': case 'stt.final':
        this.heard = d.text;
        if (this.listening) e.update('oir', { text: `«${tail(d.text, 60)}»` });
        else if (e.tasks.has('pensar')) e.update('pensar', { text: `«${tail(d.text, 60)}»` });
        break;
      case 'user.speech.end':
        this.listening = false; e.level(0);   // «escuchando» sigue a la vista hasta que piense o responda: sin parpadeo
        if (d.cancelled) { e.finish('oir', null); break; }
        this.think();
        break;
      case 'agent.thinking': this.think(d.now ? 0 : THINK_DELAY); break;
      case 'agent.text.delta':
        this.stopThinking(); this.written += d.text;
        if (!e.tasks.has('chat')) e.run('chat', { state: 'reply', label: 'Respondiendo', text: '' });
        e.update('chat', { text: tail(this.written) });
        break;
      case 'agent.text.done':
        e.update('chat', { badge: 'ok' }); this.written = '';
        clearTimeout(this.chatT); this.chatT = setTimeout(() => e.finish('chat', null), 2500);
        break;
      case 'agent.speech.start':
        this.stopThinking(); this.speaking = true; this.said = '';
        e.run('voz', { state: 'speak', label: 'Hablando', text: '' });
        break;
      case 'agent.audio.level': if (this.speaking) e.level(d.v); break;
      case 'agent.transcript.delta':
        this.said += d.text;
        if (this.speaking) e.update('voz', { text: tail(this.said) });
        break;
      case 'agent.speech.end':
        if (!this.speaking) break;
        this.speaking = false; e.level(0); e.finish('voz', null);
        if (d.interrupted) e.dispatchEvent(new CustomEvent('interrupted'));   // p. ej. para cortar la voz
        break;
      case 'agent.tool.start': {
        this.stopThinking();
        const look = ACTION_LOOK[d.action] || { state: 'work' };
        e.run('tool:' + d.id, { ...look, label: d.label || d.action, text: d.text || '', progress: d.total ? [0, d.total] : null });
        break;
      }
      case 'agent.tool.progress': e.update('tool:' + d.id, { progress: [d.done, d.total] }); break;
      // quiet: se cierra sin «hecho» (p. ej. una propuesta, que aún no ha hecho nada)
      case 'agent.tool.end': e.finish('tool:' + d.id, d.quiet ? null : d.ok === false ? 'error' : 'done', d.text || ''); break;
      case 'agent.confirm':
        this.stopThinking();
        return e.ask({ kind: d.choices && d.choices.length > 2 ? 'pregunta' : 'permiso', title: d.title, detail: d.detail, choices: d.choices });
      case 'agent.error':
        this.stopThinking(); this.speaking = this.listening = false; e.level(0);
        e.finish('voz', null); e.finish('oir', null); e.finish('chat', null); e.finish('error', 'error', d.text || 'Algo ha fallado');
        break;
      case 'agent.greet':   // saludo: asiente dos veces
        e.nod(); setTimeout(() => e.vivo && e.nod(), 260);
        break;
      case 'agent.sleep': this.stopThinking(); e.sleep(); break;
      case 'agent.notice': e.notify(d.text, d.ms); break;          // aviso sin bloquear
      case 'connection.lost': this.stopThinking(); e.setOnline(false); break;
      case 'connection.back': e.setOnline(true); break;
      case 'reset':
        this.stopThinking(); clearTimeout(this.typingT); clearTimeout(this.chatT); this.speaking = this.listening = false; this.written = '';
        e.clear();
        break;
      default: break;
    }
    return undefined;
  }
  think(delay = THINK_DELAY) {
    this.e.lastActivity = performance.now(); this.e.asleep = false;   // pensar también es actividad
    clearTimeout(this.thinkT);
    const go = () => { this.e.finish('oir', null); this.e.run('pensar', { state: 'think', label: 'Pensando', text: this.heard ? `«${tail(this.heard, 60)}»` : 'Pensando…' }); };
    if (delay <= 0) go();   // inmediato de verdad: un temporizador de 0 ms puede tardar 1 s si el navegador ralentiza la pestaña
    else this.thinkT = setTimeout(go, delay);
  }
  stopThinking() { clearTimeout(this.thinkT); this.e.finish('pensar', null); if (!this.listening) this.e.finish('oir', null); }
  destroy() { clearTimeout(this.thinkT); clearTimeout(this.typingT); clearTimeout(this.chatT); }
}
