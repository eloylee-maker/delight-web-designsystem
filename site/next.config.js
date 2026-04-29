/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow iframes from same origin so /preview/*.html embeds render
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
