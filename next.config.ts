import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.memeorandum.com",
      },
      {
        protocol: "http",
        hostname: "www.memeorandum.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "a4.espncdn.com",
      },
      {
        protocol: "https",
        hostname: "images.axios.com",
      },
      {
        protocol: "https",
        hostname: "www.washingtonpost.com",
      },
      {
        protocol: "https",
        hostname: "cst.brightspotcdn.com",
      },
      {
        protocol: "https",
        hostname: "www.rollingstone.com",
      },
      {
        protocol: "https",
        hostname: "i.abcnewsfe.com",
      },
      {
        protocol: "https",
        hostname: "npr.brightspotcdn.com",
      },
      {
        protocol: "https",
        hostname: "www.oregonlive.com",
      },
      {
        protocol: "https",
        hostname: "on3static.com",
      },
      {
        protocol: "https",
        hostname: "assets3.cbsnewsstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.nintendolife.com",
      },
      {
        protocol: "https",
        hostname: "cdn.kqed.org",
      },
      {
        protocol: "https",
        hostname: "www.politico.com",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "dims.apnews.com",
      },
      {
        protocol: "https",
        hostname: "media-cldnry.s-nbcnews.com",
      },
      // Wildcard patterns for common news domains
      {
        protocol: "https",
        hostname: "*.cnn.com",
      },
      {
        protocol: "https",
        hostname: "*.bbc.com",
      },
      {
        protocol: "https",
        hostname: "*.people.com",
      },
      {
        protocol: "https",
        hostname: "*.bbc.co.uk",
      },
      {
        protocol: "https",
        hostname: "*.reuters.com",
      },
      {
        protocol: "https",
        hostname: "*.ap.org",
      },
      {
        protocol: "https",
        hostname: "*.wsj.com",
      },
      {
        protocol: "https",
        hostname: "*.nytimes.com",
      },
      {
        protocol: "https",
        hostname: "*.nbcnews.com",
      },
      {
        protocol: "https",
        hostname: "*.abcnews.com",
      },
      {
        protocol: "https",
        hostname: "*.cbsnews.com",
      },
      {
        protocol: "https",
        hostname: "*.foxnews.com",
      },
      {
        protocol: "https",
        hostname: "*.espn.com",
      },
      {
        protocol: "https",
        hostname: "*.espncdn.com",
      },
      {
        protocol: "https",
        hostname: "*.axios.com",
      },
      {
        protocol: "https",
        hostname: "*.politico.com",
      },
      {
        protocol: "https",
        hostname: "*.washingtonpost.com",
      },
      {
        protocol: "https",
        hostname: "*.npr.org",
      },
      {
        protocol: "https",
        hostname: "*.brightspotcdn.com",
      },
      {
        protocol: "https",
        hostname: "*.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "*.imgix.net",
      },
      {
        protocol: "https",
        hostname: "people.com",
      },
      {
        protocol: "https",
        hostname: "*.people.com",
      },
      // Allow all domains (use with caution in production)
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default withPWA(nextConfig);
