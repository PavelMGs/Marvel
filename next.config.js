/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: 'aa2f078e9ff6b00e7682572935ca6dce',
    PRIVATE_KEY: '9de63f0287b941c8928cfcecc9b4f082adbcf614',
    GET_HOST: 'https://gateway.marvel.com'
  }
}

module.exports = nextConfig
