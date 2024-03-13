/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "readymadeui.com",
        port: "",
        //pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
