import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        domains: ['fakestoreapi.com']
    },
    devIndicators: false,  // <-- disables all dev UI indicators including the overlay
};

export default nextConfig;
