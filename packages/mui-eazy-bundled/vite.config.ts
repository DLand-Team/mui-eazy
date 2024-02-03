import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as fs from 'fs';
// ----------------------------------------------------------------------
const entry = 'src/index.tsx';
const componentsDir = 'src/components';
const componentsName = fs.readdirSync(path.resolve(componentsDir));
let folders = componentsName.filter(function (item, index) {
  let stat = fs.lstatSync('./src/components/' + item);
  return stat.isDirectory();
});
const componentsEntry = folders.map((name) => `${componentsDir}/${name}/index.ts`);
const esmOutput = {
  preserveModules: true,
  // preserveModulesRoot: 'src',
  // exports: 'named',
  assetFileNames: ({ name }) => {
    const { ext, dir, base } = path.parse(name);
    if (ext !== '.css') return '[name].[ext]';
    return path.join(dir, 'style', base);
  },
};
export default defineConfig({
  build: {
    minify: process.env.DEBUG ? false : true,
    sourcemap: 'hidden',
    lib: {
      entry: entry, // 设置入口文件
      name: 'mui-eazy', // 起个名字，安装、引入用
      fileName: (format) => `mui-eazy.${format}.js`, // 打包后的文件名
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@mui/material', '@emotion/styled'],
      output: {
        dir: 'dist/es/',
        format: 'es',
        sourcemap: process.env.DEBUG ? true : false,
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          '@emotion/react': '@emotion/react',
          '@mui/material': '@mui/material',
          '@emotion/styled': '@emotion/styled',
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
  server: {
    port: 8032,
    proxy: {
      '/api': {
        // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
        target: 'https://scaling.com.au/api', // 目标地址 --> 服务器地址
        // target: 'http://localhost:4001/api', // 目标地址 --> 服务器地址
        changeOrigin: true, // 允许跨域
        ws: true, // 允许websocket代理
        // 重写路径 --> 作用与vue配置pathRewrite作用相同
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  preview: {
    port: 8032,
  },
});
