import { babel } from "@rollup/plugin-babel";

export default {
  input: "./src/index.js", // 入口文件
  output: {
    file: "./lib/bundle.js", // 输出文件
    format: "esm", // 模块规范: amd,common.js,ES6...
  },
  // 插件
  plugins: [babel()],
  // 从外部引入的包
  external: ["react", "@emotion/core", "framer-motion"],
};
