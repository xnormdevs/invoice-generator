/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zos.alipayobjects.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "660d2bd96ddfa2943b33731c.mockapi.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  basePath: '/invoice-generator',  
};

export default nextConfig;
