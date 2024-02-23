import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import esbuild from "rollup-plugin-esbuild";
import * as fs from "fs";
import * as path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";
// import swc from "@rollup/plugin-swc";
import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import dts from "rollup-plugin-dts";
/**entries */
const entry = "src/index.ts";
const componentsDir = "src/components";
const componentsName = fs.readdirSync(path.resolve(componentsDir));
const componentsEntry = componentsName
	.filter((item) => {
		let path = `${componentsDir}/${item}`;
		return fs.statSync(path).isDirectory();
	})
	.map((name) => `${componentsDir}/${name}/index.ts`);

const isProd = process.env.NODE_ENV === "production";

const commonPlugins = [
	image(),
	postcss(),
	resolve(),
	commonjs(),
	// swc({
	// 	extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
	// 	jsc: {
	// 		baseUrl: path.resolve("./"),
	// 	},
	// }),
	esbuild({
		tsconfig: "./tsconfig.json",
	}),
	replace({
		'Object.defineProperty(exports, "__esModule", { value: true });': "",
		delimiters: ["\n", "\n"],
	}),
	json(),
];

const esmOutput = {
	preserveModules: true,
	preserveModulesRoot: "src",
};

export default () => {
	return {
		input: [entry],
		output: {
			...esmOutput,
			dir: "dist/",
			format: "es",
		},
		external: [
			"react",
			"react-dom",
			"@emotion/react",
			"@mui/material",
			"@emotion/styled",
			"@mui/system",
			"@mui/x-data-grid",
			"@mui/x-date-pickers",
			"yup",
			"@mui/lab",
		],
		plugins: [...commonPlugins],
		logLevel: "silent",
	};
};
