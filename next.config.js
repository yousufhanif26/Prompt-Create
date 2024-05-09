// /** @type {import('next').NextConfig} */
// const nextConfig = {};

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      // remotePatterns: [
      //   {
      //     protocol: 'https',
      //     hostname: 'lh3.googleusercontent.com',
      //     port: '',
      //     pathname: '/**',
      //   },
      // ],
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  

// //   module.exports = nextConfig

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },
//   webpack(config) {
//     config.experiments = {
//       ...config.experiments,
//       topLevelAwait: true,
//     };
//     return config;
//   },
// };

// export default nextConfig;