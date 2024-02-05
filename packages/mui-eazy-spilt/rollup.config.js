import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
// import * as fs from "fs";
// import * as path from "path";
// import { RollupOptions } from "rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
/**entries */
const entry = "src/index.ts";
// const componentsDir = "src/components";
// const componentsName = fs.readdirSync(path.resolve(componentsDir));
// const componentsEntry = componentsName
//   .filter((item) => {
//     let path = `${componentsDir}/${item}`;
//     return fs.statSync(path).isDirectory();
//   })
//   .map((name) => `${componentsDir}/${name}/index.ts`);

const isProd = process.env.NODE_ENV === "production";

const commonPlugins = [
  image(),
  postcss(),
  commonjs(),
  resolve(),
  typescript({ tsconfig: "./tsconfig.json" }),
  babel({
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    exclude: "**/node_modules/**",
  }),
  json(),
  terser(),
];

const esmOutput = {
  preserveModules: true,
  preserveModulesRoot: "src",
};

export default () => {
  return {
    input: [entry],
    output: {
      ...esmOutput, dir: "dist/", format: "es",
    },
    external: ['react', 'react-dom', '@emotion/react', '@mui/material', '@emotion/styled', '@mui/system', '@mui/x-data-grid', '@mui/x-date-pickers', 'yup', '@mui/lab', 'tslib'],
    plugins: [...commonPlugins],
    logLevel: "silent"
  };
};
