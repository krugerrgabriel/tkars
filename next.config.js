/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['transdesk.com.br', 'www.transdesk.com.br', 'localhost']
  }
};

module.exports = nextConfig;
