const basePath = process.env.NODE_ENV === 'production' ? '/kents-portfolio' : '';

const nextConfig = {
  basePath,
  assetPrefix: `${basePath}/`,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

