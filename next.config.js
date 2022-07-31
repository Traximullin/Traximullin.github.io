/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  scssOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    API_URL: process.env.API_URL,
  }
}

module.exports = nextConfig
