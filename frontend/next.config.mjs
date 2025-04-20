/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Adjust this to match your GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
