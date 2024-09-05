/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/offline',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
