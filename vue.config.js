const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000,
    proxy: {
      "/api/": {
        target: "http://10.20.40.238:8080",
        changeOrigin: true,
        pathRewrite: {
          "/api/": "/",
        },
      },
    },
  },
});
