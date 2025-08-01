// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // No domains needed for local images in /public
    // domains: ['your-remote-domain.com'], // Add if you use remote images
    unoptimized: false, // Default: optimize images
  },
};

export default nextConfig;