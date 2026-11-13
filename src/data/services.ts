import type { LucideIcon } from 'lucide-react'
import { Shield, Cloud, FileCheck, Palette, Briefcase, Code2 } from 'lucide-react'

export interface Service {
  name: string
  description: string
  features: string[]
  icon: LucideIcon
}

// Snapshot of the first six services in the portal's Convex `services` table
// (the same ones the portal's landing page shows), taken 2026-11-13.
// Edit here to change what the landing page shows.
export const services: Service[] = [
  {
    name: 'Security Audit',
    description: 'Comprehensive security assessment of your digital infrastructure',
    features: ['Vulnerability assessment', 'Penetration testing', 'Security report'],
    icon: Shield,
  },
  {
    name: 'Cloud Security',
    description: 'Secure your cloud infrastructure and data with enterprise-grade solutions',
    features: ['Cloud architecture review', 'Access management', 'Data encryption'],
    icon: Cloud,
  },
  {
    name: 'Compliance Solutions',
    description: 'Ensure your business meets industry regulations and standards',
    features: ['GDPR compliance', 'HIPAA compliance', 'SOC 2 certification'],
    icon: FileCheck,
  },
  {
    name: 'UI/UX Design',
    description: 'User-centered design for web and mobile applications',
    features: ['User research', 'Wireframing & prototyping', 'Visual design'],
    icon: Palette,
  },
  {
    name: 'IT Consultancy',
    description:
      'We provide expert IT consulting to help businesses optimize technology, streamline operations, and implement sustainable digital strategies for growth',
    features: ['Tech audits', 'Process optimization', 'Project strategy'],
    icon: Briefcase,
  },
  {
    name: 'Software Development',
    description:
      'We build scalable, secure, and high-performing software — from web and mobile apps to enterprise solutions tailored to your business needs.',
    features: ['Web apps', 'Mobile apps', 'Desktop systems'],
    icon: Code2,
  },
]
