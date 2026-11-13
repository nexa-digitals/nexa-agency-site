import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  keywords?: string;
  url?: string;
  image?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  name = 'Nexa Digital',
  type = 'website',
  keywords,
  url,
  image,
  author = 'Nexa Digital',
}) => {
  const siteTitle = title ? `${title} | ${name}` : name;
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const siteImage = image || (typeof window !== 'undefined' ? new URL('/brand/Nexa_full.png', window.location.origin).toString() : '');
  const siteDescription = description || "Expert software development, design, and cybersecurity services tailored for local small businesses. Grow your community presence with Nexa Digital.";

  // Enhanced Structured Data for Local Business
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: name,
    image: siteImage,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '', // Add business phone if available
    address: {
      '@type': 'PostalAddress',
      'streetAddress': '8 Oremeta Street',
      'addressLocality': 'Ikeja',
      'addressRegion': 'Lagos',
      'postalCode': '114001',
      'addressCountry': 'Nigeria NG' 
    },
    geo: {
      '@type': 'GeoCoordinates',
      'latitude': '',
      'longitude': ''
    },
    description: siteDescription,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '09:00',
      'closes': '17:00'
    },
    sameAs: [
      // Add social links here
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      {siteUrl && <link rel="canonical" href={siteUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />

      {/* Mobile & App Tags */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
