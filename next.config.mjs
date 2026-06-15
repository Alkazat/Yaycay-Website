/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Serve next-gen formats (smaller payloads) for every next/image asset.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // The dynamic OG routes (lib/og) read fonts/lockup/photos at runtime; make
  // sure those assets are traced into the serverless functions.
  outputFileTracingIncludes: {
    '/**': ['./lib/og/**'],
  },
  // Canonicalise the apex host to www (the exact-host match leaves preview
  // domains untouched).
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'yaycay.ai' }],
        destination: 'https://www.yaycay.ai/:path*',
        statusCode: 301,
      },
    ];
  },
  // Pages are statically generated (SSG). The single /api/signup route handler
  // runs as a serverless function on Vercel for the Brevo capture fallback.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
