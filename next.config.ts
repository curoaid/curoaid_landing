import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vathala-bucket.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;