/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: '11bf093b46fefd087710f92f8eceda1d',
    PRIVATE_KEY: 'fb4db6c2f3e53af3513b9ff6719f42816c8c53d1',
    GET_HOST: 'https://gateway.marvel.com'
  }
}

module.exports = nextConfig
