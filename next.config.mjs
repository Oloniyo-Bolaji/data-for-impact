import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ['image/avif', 'image/webp'], // optional: modern formats
    qualities: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], // include 70
  },
};

export default withBundleAnalyzer(nextConfig);
