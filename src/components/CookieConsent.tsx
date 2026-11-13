import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Cookie, X, Shield, Settings } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'

interface CookiePreferences {
    necessary: boolean
    functional: boolean
    analytics: boolean
    marketing: boolean
}

const COOKIE_CONSENT_KEY = 'nexa_cookie_consent'
const COOKIE_PREFERENCES_KEY = 'nexa_cookie_preferences'

export const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true, // Always true, can't be disabled
        functional: false,
        analytics: false,
        marketing: false,
    })

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
        if (!consent) {
            // Show banner after a short delay for better UX
            setTimeout(() => setShowBanner(true), 1000)
        } else {
            // Load saved preferences
            const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY)
            if (savedPrefs) {
                setPreferences(JSON.parse(savedPrefs))
            }
        }
    }, [])

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
        localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs))
        setPreferences(prefs)
        setShowBanner(false)
        setShowSettings(false)

        // Apply preferences (you can extend this based on your analytics/marketing tools)
        if (!prefs.analytics) {
            // Disable analytics tracking
            console.log('Analytics disabled by user')
        }
        if (!prefs.marketing) {
            // Disable marketing cookies
            console.log('Marketing cookies disabled by user')
        }
    }

    const acceptAll = () => {
        savePreferences({
            necessary: true,
            functional: true,
            analytics: true,
            marketing: true,
        })
    }

    const rejectAll = () => {
        savePreferences({
            necessary: true,
            functional: false,
            analytics: false,
            marketing: false,
        })
    }

    const saveCustomPreferences = () => {
        savePreferences(preferences)
    }

    if (!showBanner) return null

    return (
        <>
            {/* Cookie Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
                <Card className="max-w-5xl mx-auto pointer-events-auto bg-background/95 backdrop-blur-xl border-2 border-border/50 shadow-2xl rounded-3xl overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Cookie className="w-8 h-8 text-primary" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                            <Shield className="w-5 h-5 text-primary" />
                                            We Value Your Privacy
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic.
                                            By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or reject non-essential cookies.
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <Button
                                        onClick={acceptAll}
                                        className="rounded-full px-8 gap-2 shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Accept All
                                    </Button>
                                    <Button
                                        onClick={rejectAll}
                                        variant="outline"
                                        className="rounded-full px-8 border-2"
                                    >
                                        Reject All
                                    </Button>
                                    <Button
                                        onClick={() => setShowSettings(true)}
                                        variant="ghost"
                                        className="rounded-full px-8 gap-2"
                                    >
                                        <Settings className="w-4 h-4" />
                                        Customize
                                    </Button>
                                </div>

                                <p className="text-xs text-muted-foreground pt-2">
                                    Read our{' '}
                                    <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                                        Privacy Policy
                                    </a>{' '}
                                    and{' '}
                                    <a href="/terms-of-service" className="text-primary hover:underline font-medium">
                                        Terms of Service
                                    </a>{' '}
                                    for more information.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Settings Dialog */}
            <Dialog open={showSettings} onOpenChange={setShowSettings}>
                <DialogContent className="max-w-2xl rounded-3xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                            <Cookie className="w-6 h-6 text-primary" />
                            Cookie Preferences
                        </DialogTitle>
                        <DialogDescription className="text-base pt-2">
                            Manage your cookie settings. You can enable or disable different types of cookies below.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 py-6">
                        {/* Necessary Cookies */}
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-border/40">
                            <div className="flex-grow space-y-2">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-lg">Strictly Necessary Cookies</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Always Active</span>
                                        <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                                            <div className="w-4 h-4 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    These cookies are essential for the website to function properly. They enable core functionality such as security,
                                    network management, and accessibility. You cannot disable these cookies.
                                </p>
                            </div>
                        </div>

                        {/* Functional Cookies */}
                        <div className="flex items-start gap-4 p-4 rounded-2xl border border-border/40 hover:bg-muted/20 transition-colors">
                            <div className="flex-grow space-y-2">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-lg">Functional Cookies</h4>
                                    <button
                                        onClick={() => setPreferences({ ...preferences, functional: !preferences.functional })}
                                        className={`w-12 h-6 rounded-full transition-all ${preferences.functional ? 'bg-primary' : 'bg-muted-foreground/30'
                                            } flex items-center ${preferences.functional ? 'justify-end' : 'justify-start'} px-1`}
                                    >
                                        <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                    </button>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    These cookies allow the website to remember choices you make (such as your user preferences, language, or region)
                                    and provide enhanced, more personalized features.
                                </p>
                            </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-start gap-4 p-4 rounded-2xl border border-border/40 hover:bg-muted/20 transition-colors">
                            <div className="flex-grow space-y-2">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-lg">Analytics Cookies</h4>
                                    <button
                                        onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                                        className={`w-12 h-6 rounded-full transition-all ${preferences.analytics ? 'bg-primary' : 'bg-muted-foreground/30'
                                            } flex items-center ${preferences.analytics ? 'justify-end' : 'justify-start'} px-1`}
                                    >
                                        <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                    </button>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                    This helps us improve our website and services.
                                </p>
                            </div>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-start gap-4 p-4 rounded-2xl border border-border/40 hover:bg-muted/20 transition-colors">
                            <div className="flex-grow space-y-2">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-lg">Marketing Cookies</h4>
                                    <button
                                        onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                                        className={`w-12 h-6 rounded-full transition-all ${preferences.marketing ? 'bg-primary' : 'bg-muted-foreground/30'
                                            } flex items-center ${preferences.marketing ? 'justify-end' : 'justify-start'} px-1`}
                                    >
                                        <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                    </button>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant and
                                    engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-border/40">
                        <Button
                            onClick={() => setShowSettings(false)}
                            variant="outline"
                            className="rounded-full px-8"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={saveCustomPreferences}
                            className="rounded-full px-8 gap-2"
                        >
                            Save Preferences
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
