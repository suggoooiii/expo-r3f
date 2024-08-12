module.exports = function (api) {
  api.cache(true);
  return {
    extends: ["expo", "prettier"],
    plugins: ["prettier"],
    presets: ["babel-preset-expo"],
    rules: {
      "prettier/prettier": "error",
    },
  };
};
