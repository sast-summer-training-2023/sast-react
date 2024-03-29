/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, /* @note: To prevent duplicated call of useEffect */
    swcMinify: true,

    async rewrites() {
        return [{
            source: "/api/:path*",
            destination: "http://127.0.0.1:8001/:path*",
        }];
    }
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
