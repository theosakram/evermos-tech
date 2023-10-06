const defaultURL = process.env.BASE_URL;
const defaultSource = process.env.BASE_SOURCE || "/api-evermos";

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    defaultSource,
  },
  serverRuntimeConfig: {
    defaultURL,
  },
  rewrites: async () => {
    return [
      {
        source: `${defaultSource}/:path*`,
        destination: `${defaultURL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
