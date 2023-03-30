/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'fakestoreapi.com']
  },
  env:{
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}

module.exports = nextConfig
