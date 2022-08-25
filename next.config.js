/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['transdesk.com.br', 'www.transdesk.com.br', 'localhost']
  }
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  }
});

module.exports = nextConfig;
