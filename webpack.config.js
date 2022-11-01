/** @type {import("webpack").Configuration} */
const webpackConfig = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    publicPath: "/build/",
  },
  module: {
    rules: [
      // Write and provide `import str from "./style.css"`
      {
        type: "asset/resource",
        resourceQuery: /url/,
        use: [
          {
            loader: require.resolve("./resource-loader.js"),
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          { loader: "postcss-loader" },
        ],
      },
      {
        resourceQuery: /css-named-exports/,
        use: [
          {
            loader: require.resolve("./css-named-exports-loader.js"),
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                exportOnlyLocals: true,
              },
            },
          },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.css$/i,
        resourceQuery: { not: [/css-named-exports/, /url/] },
        use: [{ loader: require.resolve("./test-loader.js") }],
      },
    ],
  },
};

module.exports = webpackConfig;
