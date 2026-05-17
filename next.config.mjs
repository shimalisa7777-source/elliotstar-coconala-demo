/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: '/home/mona/Desktop/elliotstar-demo-vercel-source',
  },
}

export default nextConfig