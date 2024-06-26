module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // Configura a nova JSX transform
      },
    ],
    "@babel/preset-typescript",
  ],
};
