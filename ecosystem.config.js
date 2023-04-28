module.exports = {
  apps: [
    {
      name: "Basecamp",
      script: "./dist/index.js",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
