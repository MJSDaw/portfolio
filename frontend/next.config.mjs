/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Reemplaza 'portfolio' con el nombre de tu repositorio
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
