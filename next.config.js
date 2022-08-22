/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.transdesk.com.br', 'localhost']
  }
};

module.exports = nextConfig;
