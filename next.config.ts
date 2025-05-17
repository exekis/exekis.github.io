import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // build a fully static site
  output: "export",

  // (good for GitHub Pages)
  trailingSlash: true,

  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",

};

export default nextConfig;