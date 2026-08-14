import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // build a fully static site
  output: "export",

  // keep route directories compatible with GitHub Pages
  trailingSlash: true,

  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
};

export default nextConfig;
