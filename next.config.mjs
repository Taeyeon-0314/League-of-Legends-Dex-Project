/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['ddragon.leagueoflegends.com'],
    },

};

export default nextConfig;
