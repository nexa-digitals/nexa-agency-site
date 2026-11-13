import React, { useState } from 'react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import {
  Code2,
  Palette,
  ArrowRight,
  CheckCircle,
  Users,
  Menu,
  Zap,
  Target,
  Trophy,
  MessageSquare,
  Globe,
  Layers,
  ChevronRight,
  X,
  Cookie,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import SEO from './SEO';
import { services } from '../data/services';
import { PORTAL_URL, CONTACT_EMAIL } from '../lib/config';
import { submitLead, type LeadForm } from '../lib/submitLead';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const EMPTY_FORM: LeadForm = {
  name: '',
  companyName: '',
  email: '',
  phone: '',
  source: '',
  websiteUrl: '',
  service: '',
  goal: '',
  challenge: '',
  budget: '',
  readyToStart: '',
};

const scrollToContact = () =>
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

function LandingPage({ onNavigate }: LandingPageProps) {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    source: '',
    websiteUrl: '',
    service: '',
    goal: '',
    challenge: '',
    budget: '',
    readyToStart: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const botField = String(new FormData(e.currentTarget as HTMLFormElement).get('bot-field') ?? '');

    let ok = false;
    try {
      ok = await submitLead(formData, botField);
    } catch (error) {
      console.error('Lead submission failed:', error);
    } finally {
      setSubmitting(false);
    }

    if (ok) {
      toast({
        title: 'Request Submitted!',
        description: 'Thank you for getting in touch. Our team will review your project details and contact you shortly.',
      });
      setFormData(EMPTY_FORM);
    } else {
      toast({
        variant: 'destructive',
        title: "We couldn't send your request",
        description: `Please email us directly at ${CONTACT_EMAIL} and we'll get back to you.`,
      });
    }
  };

  // "Start a project" / "Get started" → the lead form on this page.
  const handleGetStarted = scrollToContact;

  // "Client Login" → the client portal (only shown when its URL is configured).
  const handlePortalLogin = () => {
    if (PORTAL_URL) window.location.href = PORTAL_URL;
  };

  const handleContactSales = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

  const processSteps = [
    {
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business goals, target audience, and market landscape to build a bulletproof digital strategy.',
      icon: Target,
    },
    {
      title: 'Design & Experience',
      description: 'Our designers craft intuitive, high-fidelity interfaces that prioritize user engagement and brand authority.',
      icon: Palette,
    },
    {
      title: 'Development & Build',
      description: 'We engineer scalable, secure, and high-performance solutions using cutting-edge tech stacks.',
      icon: Code2,
    },
    {
      title: 'Deployment & Growth',
      description: 'Seamless launch followed by continuous optimization to ensure your digital presence dominates your industry.',
      icon: Trophy,
    },
  ];

  const team = [
    {
      name: 'Joshua Akinrinlola',
      role: 'Chief Executive Officer',
      credibility: 'IT Professional, Business Development',
      image: '/team/Joshua.png',
    },
    {
      name: 'Akirinlola Olamide',
      role: 'Chief Technology Officer',
      credibility: 'Software Engineer, Full-stack Architect, Cybersecurity Expert',
      image: '/team/olamide.jpg',
    },

    {
      name: 'Solomon Eze',
      role: 'Lead UX Designer',
      credibility: 'Award-winning Product Designer, UI/UX Specialist, Marketing Strategist',
      image: '/team/solomon.png',
    },
  ];

  const testimonials = [
    {
      name: 'Mercy Bassey',
      text: 'They know how to treat their customers and always deliver on time with quality.',
      initial: 'M',
    },
    {
      name: 'Wranos',
      text: 'They always ensured my site was managed and provided standard quality service for our company, kudos to them.',
      initial: 'W',
    },
    {
      name: 'Chidi Okafor',
      text: 'The digital systems they built for us are robust and easy to use. Highly recommended for any SME looking to scale.',
      initial: 'C',
    },
    {
      name: 'Linda Abiola',
      text: 'Professional service and attention to detail. They delivered a custom tool that perfectly fit our business needs.',
      initial: 'L',
    },
  ];


  return (
    <div className='min-h-screen bg-background selection:bg-primary/10 selection:text-primary'>
      <SEO
        title="Nexa Digital | Scale Your Small Business with Practical Digital Tools"
        description="Nexa Digital helps small businesses scale and operate more efficiently with practical digital tools, automation, and systems. Elevate your digital presence today."
        keywords="Software Development, SME Automation, Digital Tools for Small Business, Efficiency systems"
      />

      {/* Modern Header */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
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

            <nav className='hidden lg:flex items-center space-x-10'>
              <a href='#services' className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>Services</a>
              <a href='#why-nexa' className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>Why Nexa</a>
              <a href='#process' className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>Our Process</a>
              <a href='#team' className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>Team</a>
            </nav>

            <div className='hidden lg:flex items-center space-x-4'>
              {PORTAL_URL && (
                <Button variant='ghost' onClick={handlePortalLogin} className="text-sm font-medium">Client Login</Button>
              )}
              <Button onClick={handleGetStarted} className="rounded-full px-6 shadow-lg shadow-primary/20">Get Started</Button>
            </div>

            <div className='flex lg:hidden items-center space-x-3'>
              <Button onClick={handleGetStarted} size="sm" className="rounded-full px-4 text-xs font-bold shadow-lg shadow-primary/20">
                Get Started
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' className="rounded-full">
                    <Menu className='h-6 w-6' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-56 mt-2 rounded-2xl p-2'>
                  <DropdownMenuItem asChild className="rounded-xl"><a href='#services' className="w-full">Services</a></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-xl"><a href='#why-nexa' className="w-full">Why Nexa</a></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-xl"><a href='#process' className="w-full">Process</a></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-xl"><a href='#team' className="w-full">Team</a></DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-xl"><a href='#contact' className="w-full">Contact</a></DropdownMenuItem>
                  {PORTAL_URL && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handlePortalLogin} className="rounded-xl font-bold text-primary">
                        Client Login
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden'>
        <div className='absolute inset-0 z-0 opacity-40 pointer-events-none'>
          <img src='/hero-bg.png' alt='' className='w-full h-full object-cover blur-sm opacity-20' />
          <div className='absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full' />
          <div className='absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[100px] rounded-full' />
        </div>

        <div className='container relative z-10 mx-auto px-6 text-center'>
          <div className='max-w-4xl mx-auto'>
            <Badge variant='outline' className='mb-6 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary rounded-full'>
              The Future of SME Growth
            </Badge>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-foreground leading-[1.1]'>
              Scale Smarter. Operate Faster. <span className='text-primary'>Grow Better.</span>
            </h1>
            <p className='text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed'>
              Nexa Digital empowers small businesses with practical digital tools and automation systems
              that remove manual bottlenecks, allowing you to scale with precision and confidence.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button size='lg' onClick={handleGetStarted} className='text-lg px-10 h-14 rounded-full shadow-lg shadow-primary/20'>
                Start a Project <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button size='lg' variant='outline' className='text-lg px-10 h-14 rounded-full bg-background' onClick={() => onNavigate('projects')}>
                View Portfolio
              </Button>
            </div>

            {/* Trusted By / Logos */}
            <div className='mt-24 pt-16 border-t border-border/40'>
              <p className='text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center'>Trusted by industry leaders</p>
              <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500'>
                <div className='flex items-center space-x-2'><Layers className="w-5 h-5 md:w-6 md:h-6" /> <span className="font-bold text-lg md:text-xl">CloudScale</span></div>
                <div className='flex items-center space-x-2'><Globe className="w-5 h-5 md:w-6 md:h-6" /> <span className="font-bold text-lg md:text-xl">GlobalOne</span></div>
                <div className='flex items-center space-x-2'><MessageSquare className="w-5 h-5 md:w-6 md:h-6" /> <span className="font-bold text-lg md:text-xl">Speakly</span></div>
                <div className='font-bold text-lg md:text-xl tracking-tighter'>WRANOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nexa Section / Problems Section */}
      <section id='why-nexa' className='py-20 lg:py-32 bg-primary/5'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center'>
            <div className='space-y-8'>
              <div className='text-center lg:text-left'>
                <h2 className='text-sm font-bold tracking-widest text-primary uppercase mb-4'>The Reality Checklist</h2>
                <h3 className='text-4xl lg:text-5xl font-bold mb-6'>The Problems We Saw</h3>
                <p className='text-lg text-muted-foreground leading-relaxed'>
                  Running a small business is often a struggle against disorganized operations and manual bottlenecks.
                  We saw the same patterns across industries:
                </p>
              </div>

              <div className='grid gap-6'>
                {[
                  { title: 'Manual Processes', desc: 'Wasting hours on tasks that could be automated in minutes.' },
                  { title: 'Disconnected Data', desc: 'No clear visibility into how your business is actually performing.' },
                  { title: 'System Fragility', desc: 'Processes that break the moment you try to scale.' },
                  { title: 'High Tooling Costs', desc: 'Generic software that costs too much and does too little.' },
                ].map((item, i) => (
                  <div key={i} className='flex gap-4 p-4 bg-background border border-border/40 rounded-2xl shadow-sm'>
                    <div className='bg-red-500/10 p-2 rounded-lg h-fit'><X className='w-5 h-5 text-red-500' /></div>
                    <div>
                      <h4 className='font-bold'>{item.title}</h4>
                      <p className='text-sm text-muted-foreground'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-primary p-8 md:p-12 lg:p-12 rounded-[2rem] text-primary-foreground shadow-2xl relative overflow-hidden'>
              <div className='absolute top-0 right-0 p-8 opacity-10'><Zap className='w-40 h-40' /></div>
              <h3 className='text-3xl font-bold mb-6'>Why Nexa Exists</h3>
              <p className='text-lg mb-8 leading-relaxed opacity-90'>
                Nexa Digital wasn't born in a marketing lab. We were born on the factory floors,
                the back-office rooms, and the checkout counters of real businesses.
              </p>
              <div className='space-y-6'>
                <div className='flex gap-4 items-start'>
                  <div className='bg-white/20 p-2 rounded-lg'><CheckCircle className='w-5 h-5' /></div>
                  <p className='font-medium'>We build tailored digital solutions that solve these exact problems with precision.</p>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='bg-white/20 p-2 rounded-lg'><CheckCircle className='w-5 h-5' /></div>
                  <p className='font-medium'>We bridge the gap between complex enterprise technology and practical SME budgets.</p>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='bg-white/20 p-2 rounded-lg'><CheckCircle className='w-5 h-5' /></div>
                  <p className='font-medium'>Our goal is to make efficiency and scale accessible to every ambitious organization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-24 lg:py-32 bg-muted/30'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-sm font-bold tracking-widest text-primary uppercase mb-4'>Enterprise Capabilities</h2>
            <h3 className='text-4xl lg:text-5xl font-bold mb-6'>Solutions Engineered for Success</h3>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              We provide a full spectrum of digital services, from high-performance
              development to strategic security audits.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.name} className='group hover:border-primary/50 transition-all duration-300 bg-background border-border/40'>
                  <CardHeader className='pb-4'>
                    <div className='w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors'>
                      <IconComponent className='w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors' />
                    </div>
                    <CardTitle className='text-2xl font-bold'>{service.name}</CardTitle>
                    <CardDescription className='text-base mt-2'>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-3 mb-8'>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className='flex items-center text-sm font-medium text-muted-foreground'>
                          <CheckCircle className='w-4 h-4 text-primary mr-3 flex-shrink-0' />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant='link' className='p-0 text-primary font-bold group' onClick={handleGetStarted}>
                      Learn More <ChevronRight className='ml-1 w-4 h-4 transition-transform group-hover:translate-x-1' />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 lg:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 bg-primary z-0' />
        <div className='absolute inset-0 opacity-10 pointer-events-none'>
          <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent' />
        </div>

        <div className='container relative z-10 mx-auto px-6 text-center text-primary-foreground'>
          <h2 className='text-4xl lg:text-6xl font-extrabold mb-8 tracking-tight'>Ready to scale your <br className='hidden lg:block' /> digital presence?</h2>
          <p className='text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed'>
            Join hundreds of ambitious organizations that trust Nexa Digital to build
            their most critical digital infrastructure.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button size='lg' variant='secondary' onClick={handleGetStarted} className='text-lg px-12 h-16 rounded-full font-bold'>
              Get Started Now
            </Button>
            <Button size='lg' variant='outline' onClick={handleContactSales} className='text-lg px-10 h-16 rounded-full bg-white/10 border-white/20 text-white font-bold hover:bg-white/20'>
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id='process' className='py-20 lg:py-32 border-y border-border/40'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center'>
            <div className='order-2 lg:order-1'>
              <h2 className='text-sm font-bold tracking-widest text-primary uppercase mb-4'>Our Methodology</h2>
              <h3 className='text-4xl lg:text-5xl font-bold mb-8'>How We Deliver Extraordinary Results</h3>
              <p className='text-lg text-muted-foreground mb-12 leading-relaxed'>
                Our approach is rooted in precision, transparency, and collaboration.
                We don't just build; we strategiclly partner with you to ensure every
                line of code and every pixel serves a purpose.
              </p>
              <div className='space-y-12'>
                {processSteps.map((step, idx) => (
                  <div key={idx} className='flex gap-6 items-start'>
                    <div className='flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20'>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className='text-xl font-bold mb-2'>{step.title}</h4>
                      <p className='text-muted-foreground leading-relaxed'>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='order-1 lg:order-2 relative'>
              <div className='aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200'
                  alt='Collaborative Session'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute -bottom-6 -left-6 p-6 bg-background border border-border rounded-2xl shadow-xl max-w-[200px] hidden md:block'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='p-1.5 bg-green-500/10 rounded-full'><CheckCircle className='w-4 h-4 text-green-500' /></div>
                  <div className='font-bold text-sm'>Strategy Approved</div>
                </div>
                <p className='text-xs text-muted-foreground font-medium'>100% alignment before production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 lg:py-32 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-bold tracking-widest text-primary uppercase mb-4'>Client Voices</h2>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Trusted by Ambitious Brands</h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {testimonials.map((t, idx) => (
              <div key={idx} className='p-8 bg-muted/30 border border-border/40 rounded-[2rem] hover:border-primary/30 transition-all duration-300 flex flex-col'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20'>
                    {t.initial}
                  </div>
                  <h4 className='font-bold text-foreground'>{t.name}</h4>
                </div>
                <p className='text-muted-foreground leading-relaxed italic'>
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id='team' className='py-24 lg:py-32 bg-muted/50'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-20'>
            <h2 className='text-sm font-bold tracking-widest text-primary uppercase mb-4'>The Minds Behind Nexa</h2>
            <h3 className='text-4xl lg:text-5xl font-bold mb-6'>World-Class Expertise</h3>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              A team of seasoned professionals dedicated to pushing the boundaries
              of what's possible in the digital realm.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {team.map((member, idx) => (
              <div key={idx} className='group bg-background rounded-3xl overflow-hidden border border-border/40 hover:shadow-2xl transition-all duration-500'>
                <div className='aspect-[4/5] overflow-hidden relative'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent' />
                </div>
                <div className='p-8'>
                  <h4 className='text-2xl font-bold mb-1'>{member.name}</h4>
                  <p className='text-primary font-semibold mb-4'>{member.role}</p>
                  <p className='text-sm text-muted-foreground bg-muted p-3 rounded-lg border border-border/40 italic'>
                    "{member.credibility}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-background'>
        <div className='container mx-auto px-6 max-w-7xl'>
          <div className='bg-white dark:bg-muted/10 rounded-[2.5rem] shadow-2xl overflow-hidden grid lg:grid-cols-12 border border-border/40'>
            {/* Left Column: Form */}
            <div className='lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center'>
              <h2 className='text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>
                Get in <span className='text-primary'>Touch</span>
              </h2>
              <p className='text-muted-foreground text-sm md:text-base mb-8 max-w-lg leading-relaxed font-medium'>
                Join hundreds of ambitious organizations that trust Nexa Digital to build their most critical digital infrastructure.
              </p>
              
              <form name='lead' onSubmit={handleContactSubmit} className='space-y-6'>
                {/* Spam honeypot: hidden from people, bots fill it in. */}
                <p className='hidden' aria-hidden='true'>
                  <label>
                    Don't fill this out: <input name='bot-field' tabIndex={-1} autoComplete='off' />
                  </label>
                </p>
                {/* Basic Information */}
                <div>
                  <h3 className='text-base font-bold text-foreground mb-4 border-b pb-1.5 uppercase tracking-wider text-primary/80'>Basic Information</h3>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                      <input
                        type='text'
                        name='name'
                        placeholder='Full Name *'
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 placeholder:text-muted-foreground/60 text-sm'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        name='companyName'
                        placeholder='Company Name'
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 placeholder:text-muted-foreground/60 text-sm'
                      />
                    </div>
                    <div>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email Address *'
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 placeholder:text-muted-foreground/60 text-sm'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        name='phone'
                        placeholder='Phone Number *'
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 placeholder:text-muted-foreground/60 text-sm'
                      />
                    </div>
                    <div className='sm:col-span-2'>
                      <input
                        type='url'
                        name='websiteUrl'
                        placeholder='Website URL (if applicable)'
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 placeholder:text-muted-foreground/60 text-sm'
                      />
                    </div>
                  </div>
                </div>

                {/* Service of Interest & Primary Goal */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider'>What service are you interested in?</label>
                    <div className='relative'>
                      <select
                        name='service'
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 appearance-none cursor-pointer pr-10 text-sm'
                      >
                        <option value='' disabled>Select a service...</option>
                        <option value='Cybersecurity/websites and digital asset security'>Cybersecurity/websites and digital asset security</option>
                        <option value='Website Design & Development'>Website Design & Development</option>
                        <option value='E-commerce Website'>E-commerce Website</option>
                        <option value='SEO'>SEO</option>
                        <option value='Social Media Marketing'>Social Media Marketing</option>
                        <option value='Branding & Design'>Branding & Design</option>
                        <option value='Content Marketing'>Content Marketing</option>
                        <option value='Lead Generation'>Lead Generation</option>
                        <option value='Multiple Services'>Multiple Services</option>
                        <option value='Not Sure Yet'>Not Sure Yet</option>
                      </select>
                      <div className='absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground'>
                        <ChevronRight className='w-4 h-4 rotate-90' />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className='block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider'>What is your primary goal?</label>
                    <div className='relative'>
                      <select
                        name='goal'
                        required
                        value={formData.goal}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 appearance-none cursor-pointer pr-10 text-sm'
                      >
                        <option value='' disabled>Select a primary goal...</option>
                        <option value='Secure my digital assets/website'>Secure my digital assets/website</option>
                        <option value='Generate more leads'>Generate more leads</option>
                        <option value='Increase online sales'>Increase online sales</option>
                        <option value='Improve brand awareness'>Improve brand awareness</option>
                        <option value='Improve website performance'>Improve website performance</option>
                        <option value='Rank higher on Google'>Rank higher on Google</option>
                        <option value='Launch a new business'>Launch a new business</option>
                        <option value='Other'>Other</option>
                      </select>
                      <div className='absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground'>
                        <ChevronRight className='w-4 h-4 rotate-90' />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge Open Text Area */}
                <div>
                  <label className='block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider'>What challenge are you trying to solve right now?</label>
                  <textarea
                    name='challenge'
                    placeholder='Describe your challenges or project details here...'
                    rows={3}
                    value={formData.challenge}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 placeholder:text-muted-foreground/60 resize-none text-sm'
                  />
                </div>

                {/* Budget & Timeline */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider'>Estimated Budget</label>
                    <div className='relative'>
                      <select
                        name='budget'
                        required
                        value={formData.budget}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 appearance-none cursor-pointer pr-10 text-sm'
                      >
                        <option value='' disabled>Select budget range...</option>
                        <option value='Under ₦250,000'>Under ₦250,000</option>
                        <option value='₦250,000 – ₦500,000'>₦250,000 – ₦500,000</option>
                        <option value='₦500,000 – ₦1M'>₦500,000 – ₦1M</option>
                        <option value='₦1M – ₦5M'>₦1M – ₦5M</option>
                        <option value='₦5M+'>₦5M+</option>
                      </select>
                      <div className='absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground'>
                        <ChevronRight className='w-4 h-4 rotate-90' />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className='block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider'>Ready to start within 30 days?</label>
                    <div className='relative'>
                      <select
                        name='readyToStart'
                        required
                        value={formData.readyToStart}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-border/60 bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 appearance-none cursor-pointer pr-10 text-sm'
                      >
                        <option value='' disabled>Select timeline...</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                        <option value='Just researching'>Just researching</option>
                      </select>
                      <div className='absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground'>
                        <ChevronRight className='w-4 h-4 rotate-90' />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type='submit'
                  disabled={submitting}
                  className='w-full bg-primary hover:bg-primary/95 disabled:opacity-60 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 tracking-wider text-sm mt-2'
                >
                  {submitting ? 'SENDING…' : 'SEND'}
                </button>
              </form>
            </div>

            {/* Right Column: Contact details */}
            <div className='lg:col-span-5 relative min-h-[500px] lg:min-h-[550px] overflow-visible flex items-center justify-center px-6 py-12 sm:px-10 md:px-12 lg:justify-end'>
              <div className='absolute inset-y-0 right-0 w-full lg:w-[72%] bg-primary' />
              <div className='space-y-10 relative z-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl shadow-primary/20 sm:p-10 lg:-ml-28 lg:mr-8'>
                {/* Call Us */}
                <div className='flex gap-4 items-start group'>
                  <Phone className='w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform group-hover:scale-110' />
                  <div>
                    <h4 className='text-xl font-bold text-foreground mb-1'>
                      Call Us
                    </h4>
                    <p className='text-muted-foreground text-base font-semibold'>Lagos, Nigeria</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className='flex gap-4 items-start group'>
                  <Mail className='w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform group-hover:scale-110' />
                  <div>
                    <h4 className='text-xl font-bold text-foreground mb-1'>
                      Email Us
                    </h4>
                    <p className='text-muted-foreground text-base font-semibold break-all'>info@nexadigital.com.ng</p>
                  </div>
                </div>

                {/* Visit Us */}
                <div className='flex gap-4 items-start group'>
                  <MapPin className='w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform group-hover:scale-110' />
                  <div>
                    <h4 className='text-xl font-bold text-foreground mb-1'>
                      Visit Us
                    </h4>
                    <p className='text-muted-foreground text-base font-semibold leading-relaxed mb-4'>
                      8 Oremeta Str, Oregun Ikeja<br />Lagos, Nigeria
                    </p>
                    
                    {/* Social media icons below the physical address */}
                    <div className='flex gap-3 mt-6 border-t pt-6 border-border/70'>
                      <a href='#' className='w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary text-primary hover:text-white cursor-pointer transition-all duration-200' aria-label='Twitter'>
                        <Twitter className='w-4 h-4' />
                      </a>
                      <a href='#' className='w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary text-primary hover:text-white cursor-pointer transition-all duration-200' aria-label='Facebook'>
                        <Facebook className='w-4 h-4' />
                      </a>
                      <a href='#' className='w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary text-primary hover:text-white cursor-pointer transition-all duration-200' aria-label='LinkedIn'>
                        <Linkedin className='w-4 h-4' />
                      </a>
                      <a href='#' className='w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary text-primary hover:text-white cursor-pointer transition-all duration-200' aria-label='Instagram'>
                        <Instagram className='w-4 h-4' />
                      </a>
                      <a href='#' className='w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary text-primary hover:text-white cursor-pointer transition-all duration-200' aria-label='TikTok'>
                        <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
                          <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.12 1.12 1.09 2.63 1.63 4.16 1.67v3.85c-1.72-.08-3.38-.79-4.66-1.93-.11-.1-.2-.21-.3-.32v5.74c.04 4.11-2.9 7.78-6.95 8.44-4.57.85-8.9-2.12-9.67-6.68-.82-4.51 2.05-8.91 6.51-9.79.88-.19 1.79-.22 2.69-.11v3.91c-.74-.15-1.5-.13-2.24.06-2.07.45-3.41 2.45-3.03 4.54.34 2.02 2.18 3.44 4.22 3.29 1.95-.08 3.51-1.63 3.52-3.59v-13.2h.02z' />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className='py-20 bg-background border-t border-border/40'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            <div className='lg:col-span-2'>
              <div className='flex items-center space-x-2 mb-8'>
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
              <p className='text-muted-foreground mb-8 max-w-md leading-relaxed'>
                Building world-class digital products through elite engineering,
                stunning design, and deep strategic insight. We are Nexa Digital.
              </p>
              <div className='flex space-x-6'>
                {/* Social icons placeholders */}
                <div className='w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors'><Globe className="w-5 h-5" /></div>
                <div className='w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors'><MessageSquare className="w-5 h-5" /></div>
                <div className='w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors'><Users className="w-5 h-5" /></div>
              </div>
            </div>

            <div>
              <h4 className='font-bold text-lg mb-8 uppercase tracking-widest'>Services</h4>
              <ul className='space-y-4 text-muted-foreground'>
                <li className='hover:text-primary cursor-pointer transition-colors' onClick={handleGetStarted}>Enterprise Software</li>
                <li className='hover:text-primary cursor-pointer transition-colors' onClick={handleGetStarted}>UI/UX Design Systems</li>
                <li className='hover:text-primary cursor-pointer transition-colors' onClick={handleGetStarted}>Cybersecurity Audits</li>
                <li className='hover:text-primary cursor-pointer transition-colors' onClick={handleGetStarted}>Cloud Infrastructure</li>
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-lg mb-8 uppercase tracking-widest'>Company</h4>
              <ul className='space-y-4 text-muted-foreground'>
                <li className='hover:text-primary cursor-pointer transition-colors'>About Nexa</li>
                <li className='hover:text-primary cursor-pointer transition-colors' onClick={() => onNavigate('projects')}>Case Studies</li>
                <li className='hover:text-primary cursor-pointer transition-colors'>Careers</li>
                <li className='hover:text-primary cursor-pointer transition-colors' onClick={scrollToContact}>Contact</li>
              </ul>
            </div>
          </div>

          <div className='border-t border-border/40 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground'>
            <p>© 2026 Nexa Digital Agency. All rights reserved.</p>
            <div className='flex flex-wrap gap-4 md:gap-8 mt-4 md:mt-0 justify-center'>
              <span
                className='hover:text-primary cursor-pointer transition-colors'
                onClick={() => onNavigate('privacy')}
              >
                Privacy Policy
              </span>
              <span
                className='hover:text-primary cursor-pointer transition-colors'
                onClick={() => onNavigate('terms')}
              >
                Terms of Service
              </span>
              <button
                onClick={() => {
                  localStorage.removeItem('nexa_cookie_consent');
                  localStorage.removeItem('nexa_cookie_preferences');
                  window.location.reload();
                }}
                className='hover:text-primary cursor-pointer transition-colors inline-flex items-center gap-1.5'
              >
                <Cookie className="w-3.5 h-3.5" />
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
