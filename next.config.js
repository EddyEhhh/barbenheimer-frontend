/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['barbenheimer-movies.s3.ap-southeast-1.amazonaws.com'],
      },
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig


