/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // config referente ao dominio que vai nas imagens
  images: {
    domains: ['files.stripe.com']
  }
}

module.exports = nextConfig
