import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ViewProjects from './components/ViewProjects'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'
import { Toaster } from './components/ui/toaster'
import { CookieConsent } from './components/CookieConsent'
import SEO from './components/SEO'

// The portal used page names ('projects', 'privacy', ...) for navigation.
// Map them to real URLs so the copied components keep working unchanged.
const ROUTES: Record<string, string> = {
  landing: '/',
  projects: '/portfolio',
  privacy: '/privacy',
  terms: '/terms',
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const navigate = useNavigate()
  const go = (page: string) => navigate(ROUTES[page] ?? '/')
  const home = () => navigate('/')

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage onNavigate={go} />} />
        <Route path="/portfolio" element={<ViewProjects onBack={home} />} />
        <Route path="/privacy" element={<PrivacyPolicy onBack={home} />} />
        <Route path="/terms" element={<TermsOfUse onBack={home} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
      <CookieConsent />
    </div>
  )
}
