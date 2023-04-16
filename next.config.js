// const runtimeCaching = require("next-pwa/cache");
// const withPWA = require("next-pwa")({
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     runtimeCaching,
//     buildExcludes: [/middleware-manifest.json$/],
// });

// const nextConfig = withPWA({
//     // next config
// });
// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          "fs": false,
          "net": false,
          "tls": false,
          "crypto": require.resolve("crypto-browserify"),
          "stream": require.resolve("stream-browserify"),
          "url": require.resolve("url"),
          "zlib": require.resolve("browserify-zlib"),
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
          "assert": require.resolve("assert"),
          "os": require.resolve("os-browserify"),
          "path": require.resolve("path-browserify"),
          "process/browser": require.resolve("process/browser"),
        };
      }
      return config;
    },
  };
  
  module.exports = nextConfig;