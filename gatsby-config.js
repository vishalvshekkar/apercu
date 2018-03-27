const rootDir = `public`;

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-offline',
    options: {
      staticFileGlobs: [
        `${rootDir}/**/*.{js,woff2,ttf,woff,svg,eot}`,
        `${rootDir}/index.html`,
        `${rootDir}/manifest.json`,
        `${rootDir}/offline-plugin-app-shell-fallback/index.html`,
      ],
      stripPrefix: rootDir,
      navigateFallback: `/offline-plugin-app-shell-fallback/index.html`,
      navigateFallbackWhitelist: [/^.*(?!\.\w?$)/],
      cacheId: `gatsby-plugin-offline`,
      dontCacheBustUrlsMatching: /(.\w{8}.woff2)/,
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff)$/,
          handler: `fastest`,
        },
      ],
      skipWaiting: false,
    }
  }],
};
