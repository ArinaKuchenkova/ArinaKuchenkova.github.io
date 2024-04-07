/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@svgr/webpack',
          options: { babel: false, dimensions: false, },
        },
      ],
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: [{
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
            },
          }],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
