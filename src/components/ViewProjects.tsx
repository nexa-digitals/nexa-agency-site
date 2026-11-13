import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from './ui/button'
import BrandedLoader from './ui/branded-loader'
import SEO from './SEO'
import { ArrowLeft, ExternalLink, Zap, Globe, Layers, ArrowRight, ChevronRight, CheckCircle, Smartphone, Monitor, Database } from "lucide-react";

interface Project {
  id: string | number;
  name: string;
  url: string;
  images: string[];
  languages: string[];
  about: string;
  outcome: string;
  industry: string;
  status?: string;
  isPulsing?: boolean;
}

const PRIMARY_PROJECTS: Project[] = [
  {
    id: 'pypelyne',
    name: "Pypelyne",
    url: "https://socialpulse-p9du.onrender.com/",
    images: [
      `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200`,
      `https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900`,
      `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600`
    ],
    languages: ["Next.js", "TypeScript", "Prisma"],
    about: "A digital platform focused on operational efficiency and business workflows. Engineered to remove bottlenecks in complex organizational structures.",
    outcome: "Currently in closed beta with early enterprise partners.",
    industry: "Nexa Ecosystem",
    status: "In Development",
    isPulsing: true
  },
  {
    id: 'korvia',
    name: "Korvia",
    url: "https://korvia-ui.onrender.com/",
    images: [
      `https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200`,
      `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900`,
      `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600`
    ],
    languages: ["Next.js", "Nest Js", "PostgreSQL", "Prisma"],
    about: "A sovereign product platform under Nexa Digital, designed to be the backbone for next-generation digital services.",
    outcome: "Finalizing security audits and infrastructure scaling.",
    industry: "Nexa Ecosystem",
    status: "Launching Soon",
    isPulsing: true
  }
];

interface ViewProjectsProps {
  onBack?: () => void;
}

const ViewProjects = ({ onBack }: ViewProjectsProps) => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Snapshot of the portal's Convex `projects` table, taken 2026-11-13.
  // Add projects here (or to PRIMARY_PROJECTS above) to show them.
  const projectsData: any[] = [
    {
      _id: '3d-portfolio',
      name: '3d Portfolio',
      url: 'https://3d-portfolio-one-rust.vercel.app/',
      images: [],
      languages: ['React', 'Tailwind CSS', 'ThreeJS'],
      about: '',
    },
  ];

  const allProjects = useMemo(() => {
    const dynamic = projectsData
      ? projectsData
        .filter((p: any) => {
          const name = p.name?.toLowerCase() || "";
          return !name.includes("jobylze") && !name.includes("jobylyze");
        })
        .map((p: any) => ({
          id: p._id,
          name: p.name,
          url: p.url,
          images: (p.images && p.images.length ? p.images : [
            `https://s.wordpress.com/mshots/v1/${encodeURIComponent(p.url)}?w=1200`,
            `https://s.wordpress.com/mshots/v1/${encodeURIComponent(p.url)}?w=900`,
            `https://s.wordpress.com/mshots/v1/${encodeURIComponent(p.url)}?w=600`
          ]),
          languages: p.languages || [],
          about: p.about || '',
          industry: p.industry || 'Digital Solution',
          outcome: p.outcome || 'Successful delivery of core objectives.',
          status: p.status,
          isPulsing: p.isPulsing
        }))
      : [];

    // Filter dynamic to avoid duplicates with primaries
    const filteredDynamic = dynamic.filter(dp =>
      !PRIMARY_PROJECTS.some(pp => pp.name.toLowerCase() === dp.name.toLowerCase())
    );

    return [...PRIMARY_PROJECTS, ...filteredDynamic];
  }, [projectsData]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [selected]);

  const isLoading = projectsData === undefined;
  const hasNoProjects = allProjects.length === 0;

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <SEO
        title="Our Portfolio | Nexa Digital"
        description="A showcase of enterprise-grade digital products delivered by Nexa Digital."
      />

      {/* Modern Portfolio Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className='flex items-center space-x-2 cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src='/brand/Nexa_full.png'
                alt='Nexa Digital'
                className='h-8 block dark:hidden'
              />
              <img
                src='/brand/Nexa_full_dark.png'
                alt='Nexa Digital'
                className='h-8 hidden dark:block'
              />
            </div>

            <div className="flex items-center space-x-6">
              {onBack && (
                <Button variant="ghost" onClick={onBack} className="text-sm font-medium flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Button>
              )}
              <Button onClick={() => window.location.href = '#projects'} className="rounded-full px-4 sm:px-6 shadow-lg shadow-primary/20 text-xs sm:text-sm">
                <span className="hidden sm:inline">Start a New Project</span>
                <span className="sm:hidden">Start Project</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero / Header Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Active <span className="text-primary">Evolving Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We build functional, high-performance systems that live and grow.
              Explore our primary ecosystem products and select client case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-32">
              <BrandedLoader size={72} label="Curating Portfolio..." />
            </div>
          )}

          {!isLoading && hasNoProjects && (
            <div className="max-w-2xl mx-auto text-center py-32">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
                <Layers className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">No projects showcased yet</h2>
              <p className="text-muted-foreground mb-12">We're currently updating our portfolio with our latest successes. Check back shortly.</p>
              <Button onClick={onBack} variant="outline" className="rounded-full">Return Home</Button>
            </div>
          )}

          {!isLoading && !hasNoProjects && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {allProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group cursor-pointer flex flex-col"
                  onClick={() => setSelected(project)}
                >
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl bg-muted border border-border/40 mb-8 w-full">
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-2xl">
                          EXPLORE
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-8 left-8 flex gap-3">
                      <div className="px-4 py-2 bg-white/90 backdrop-blur-md text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                        {(project as any).industry || 'Case Study'}
                      </div>
                      {project.status && (
                        <div className="px-4 py-2 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
                          {project.isPulsing && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                          )}
                          {project.status}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-start gap-6 flex-grow">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{project.name}</h3>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed max-w-md line-clamp-2">
                        {project.about}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.languages.slice(0, 3).map((lang) => (
                          <span key={lang} className="px-4 py-1.5 text-xs font-bold border border-border rounded-full text-foreground/70">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="h-12 w-12 border border-border rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Sidebar */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 40, stiffness: 300 }}
              className="relative w-full md:w-[500px] lg:w-[600px] h-full bg-background border-l border-border shadow-2xl overflow-y-auto p-6 sm:p-8 lg:p-12"
            >
              <Button
                variant="ghost"
                className="mb-12 p-0 h-auto hover:bg-transparent group"
                onClick={() => setSelected(null)}
              >
                <ArrowLeft className="w-6 h-6 mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="font-bold text-lg">Back to Portfolio</span>
              </Button>

              <div className="space-y-12">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="text-sm font-bold tracking-widest text-primary uppercase">
                    {(selected as any).industry || 'Industry Case Study'}
                  </div>
                  {selected.status && (
                    <div className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-primary/20 flex items-center gap-2">
                      {selected.isPulsing && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                      )}
                      {selected.status}
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-5xl font-extrabold tracking-tight mb-6">{selected.name}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {selected.about}
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-border">
                    <img src={selected.images[0]} alt={selected.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {selected.images.slice(1, 3).map((img, i) => (
                      <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-border">
                        <img src={img} alt={`${selected.name} detail`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="p-8 bg-muted rounded-3xl border border-border">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" /> The Mission
                    </h4>
                    <p className="text-muted-foreground text-lg italic leading-relaxed">
                      "{(selected as any).outcome || 'Focusing on operational excellence and system longevity.'}"
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4 uppercase tracking-widest text-muted-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selected.languages.map((lang) => (
                        <span key={lang} className="px-6 py-2 bg-background border border-border rounded-full font-bold text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border flex justify-between items-center">
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-2xl font-bold hover:text-primary transition-colors"
                    >
                      Visit Project <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Simple Footer */}
      <footer className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Building for the long term</h2>
          <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/30">
            Discuss your system build
          </Button>
          <div className="mt-24 pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-muted-foreground font-medium">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground">Nexa Digital Ecosystem 2026</span>
            </div>
            <div className="flex gap-12">
              <span className="hover:text-primary cursor-pointer transition-colors">Digital Strategy</span>
              <span className="hover:text-primary cursor-pointer transition-colors">System Audits</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Contact</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ViewProjects;
