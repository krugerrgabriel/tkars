/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
});
const { withPlaiceholder } = require('@plaiceholder/next');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['transdesk.com.br', 'www.transdesk.com.br', 'localhost']
  }
};

// module.exports = withPWA({
//   target: 'serverless',
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true
//   }
// });

module.exports = withPWA(withPlaiceholder(nextConfig));
