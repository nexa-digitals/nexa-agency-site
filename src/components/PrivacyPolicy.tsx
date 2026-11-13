import React from 'react';
import { Button } from './ui/button';
import { ChevronLeft, Shield, Lock, Eye, FileText, Globe, Mail, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface PrivacyPolicyProps {
    onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={onBack}
                    >
                        <img
                            src="/brand/Nexa_full.png"
                            alt="Nexa Digital"
                            className="h-8 block dark:hidden"
                        />
                        <img
                            src="/brand/Nexa_full_dark.png"
                            alt="Nexa Digital"
                            className="h-8 hidden dark:block"
                        />
                    </div>
                    <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Home
                    </Button>
                </div>
            </header>

            <main className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-6 text-primary">
                        <Shield className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">Legal Information</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-12">Last Updated: March 6, 2026</p>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Eye className="w-6 h-6 text-primary" />
                                1. Introduction
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Nexa Digital Agency ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our digital services, including our SME automation tools and client portals.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="w-6 h-6 text-primary" />
                                2. Information We Collect
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="p-6 bg-muted/50 rounded-2xl border border-border/40">
                                    <h3 className="font-bold mb-2">Personal Data</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Name, email address, phone number, and company details provided when you contact us or register for an account.
                                    </p>
                                </div>
                                <div className="p-6 bg-muted/50 rounded-2xl border border-border/40">
                                    <h3 className="font-bold mb-2">Usage Data</h3>
                                    <p className="text-sm text-muted-foreground">
                                        IP addresses, browser types, version, pages visited, and time spent on our platform to improve user experience.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Zap className="w-6 h-6 text-primary" />
                                3. How We Use Your Information
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We use the collected data for various purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>To provide and maintain our services to your business.</li>
                                <li>To notify you about changes to our services or project updates.</li>
                                <li>To provide customer support and gather feedback.</li>
                                <li>To monitor the usage of our digital tools to ensure stability and security.</li>
                                <li>To detect, prevent, and address technical issues or security threats.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Lock className="w-6 h-6 text-primary" />
                                4. Data Security
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The security of your data is paramount. We implement industry-standard security measures, including encryption and secure server protocols (via Convex and Clerk), to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-primary" />
                                5. Third-Party Services
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may employ third-party companies (such as Supabase, Clerk, and Convex) to facilitate our services. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Mail className="w-6 h-6 text-primary" />
                                6. Contact Us
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                                <p className="font-bold text-primary">Nexa Digital Agency</p>
                                <p className="text-muted-foreground">Email: info@nexadigital.com.ng</p>
                                <p className="text-muted-foreground">Address: Lagos, Nigeria</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </main>

            {/* Basic Footer for the page */}
            <footer className="py-10 border-t border-border/40 text-center text-sm text-muted-foreground">
                <p>© 2026 Nexa Digital Agency. All rights reserved.</p>
            </footer>
        </div>
    );
}

