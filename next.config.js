/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'dhia-portfolio.vercel.app',
          },
        ],
        destination: 'https://www.dhiabejaoui.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
