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
  env: {
    NEXT_PUBLIC_POSTHOG_KEY: 'phc_elppgP1N5F8L3j3XYlamzXBhLjvKgFiRh02NeD5SUDB',
    NEXT_PUBLIC_POSTHOG_HOST: 'https://eu.i.posthog.com'
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
