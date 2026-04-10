export default function TailwindRevolusioner() {
  return (
    // Background utama menggunakan Dynamic Mesh Gradient (CSS Hook)
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-200">
      <Navbar />
      
      <main className="max-w-6xl mx-auto p-6 space-y-12">
        <HeroSection />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Glassmorphism" 
            desc="Efek kaca transparan menggunakan backdrop-blur modern."
            variant="glass"
          />
          <FeatureCard 
            title="Interactive Hover" 
            desc="Animasi transisi yang smooth dengan koordinat bayangan."
            variant="shadow"
          />
          <FeatureCard 
            title="Auto-Dark Mode" 
            desc="Support skema warna sistem secara otomatis."
            variant="dark"
          />
        </div>

        <InteractivePlayground />
      </main>
    </div>
  );
}

// --- Komponen Atomik ---

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="size-8 bg-indigo-600 rounded-lg rotate-12 flex items-center justify-center text-white font-bold italic">T4</div>
        <span className="text-xl font-black tracking-tighter uppercase">NextGen UI</span>
      </div>
      <div className="hidden md:flex gap-8 font-medium text-sm">
        <a href="#" className="hover:text-indigo-600 transition-colors">Components</a>
        <a href="#" className="hover:text-indigo-600 transition-colors">Showcase</a>
        <a href="#" className="hover:text-indigo-600 transition-colors">Docs</a>
      </div>
      <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-600 transition-all active:scale-95 shadow-xl shadow-indigo-200">
        Get Started
      </button>
    </nav>
  );
}

function HeroSection() {
  return (
    <header className="py-16 text-center space-y-6">
      <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Revolusi Tailwind CSS 4.
      </h1>
      <p className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed">
        Beralih dari sekadar utility-first ke **design-system-first**. Lebih cepat, lebih kecil, dan jauh lebih cantik.
      </p>
    </header>
  );
}

function FeatureCard({ title, desc, variant }) {
  const styles = {
    glass: "bg-white/40 backdrop-blur-xl border border-white/20",
    shadow: "bg-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300",
    dark: "bg-slate-900 text-white shadow-indigo-900/20"
  };

  return (
    <div className={`p-8 rounded-3xl shadow-lg ${styles[variant]}`}>
      <div className="size-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4 font-bold">
        {title[0]}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={variant === 'dark' ? 'text-slate-400' : 'text-slate-600'}>{desc}</p>
    </div>
  );
}

function InteractivePlayground() {
  return (
    <section className="bg-indigo-600 rounded-[2.5rem] p-10 text-white overflow-hidden relative">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Siap untuk masa depan?</h2>
        <p className="mb-8 opacity-80 max-w-md">Eksperimen dengan container queries dan variable hooks langsung di browser tanpa kompilasi ulang.</p>
        <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-transform active:scale-95">
          Mulai Belajar Sekarang
        </button>
      </div>
      {/* Dekorasi Abstract */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 size-64 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
}