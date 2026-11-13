import React from 'react';
import { Button } from './ui/button';
import { ChevronLeft, Scale, FileText, AlertCircle, CheckCircle, HelpCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface TermsOfUseProps {
    onBack: () => void;
}

export default function TermsOfUse({ onBack }: TermsOfUseProps) {
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
                        <Scale className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">Service Agreement</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Terms of Use</h1>
                    <p className="text-muted-foreground mb-12">Last Updated: March 6, 2026</p>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="w-6 h-6 text-primary" />
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using the services provided by Nexa Digital Agency, including our website and digital tools, you agree to be bound by these Terms of Use and all applicable laws and regulations in Nigeria.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-primary" />
                                2. Use License
                            </h2>
                            <div className="p-6 bg-muted/50 rounded-2xl border border-border/40">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Permission is granted to temporarily access the materials on Nexa Digital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2 text-sm text-muted-foreground">
                                    <li>Modify or copy the materials.</li>
                                    <li>Use the materials for any commercial purpose or public display.</li>
                                    <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                                    <li>Remove any copyright or other proprietary notations from the materials.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <AlertCircle className="w-6 h-6 text-primary" />
                                3. Disclaimer
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The materials on Nexa Digital's website are provided on an 'as is' basis. Nexa Digital Agency makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Scale className="w-6 h-6 text-primary" />
                                4. Limitations
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                In no event shall Nexa Digital Agency or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we have been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <HelpCircle className="w-6 h-6 text-primary" />
                                5. Accuracy of Materials
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The materials appearing on the Nexa Digital website could include technical, typographical, or photographic errors. Nexa Digital Agency does not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Mail className="w-6 h-6 text-primary" />
                                6. Governing Law
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>
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
