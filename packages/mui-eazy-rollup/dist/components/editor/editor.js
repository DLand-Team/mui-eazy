import{j as e}from"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import"../../utils/highlight.js";import"../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/dist/quill.snow.css.js";import r from"../../node_modules/.pnpm/react-quill@2.0.0_react-dom@18.2.0_react@18.2.0/node_modules/react-quill/lib/index.js";import{StyledEditor as o}from"./styles.js";import t,{formats as s}from"./toolbar.js";import{alpha as l}from"@mui/system";function i({id:i="minimal-quill",error:m,simple:a=!1,helperText:d,sx:n,...p}){const c={toolbar:{container:`#${i}`},history:{delay:500,maxStack:100,userOnly:!0},syntax:!0,clipboard:{matchVisual:!1}};return e.jsxs(e.Fragment,{children:[e.jsxs(o,{sx:{...m&&{border:e=>`solid 1px ${e.palette.error.main}`,"& .ql-editor":{bgcolor:e=>l(e.palette.error.main,.08)}},...n},children:[e.jsx(t,{id:i,isSimple:a}),e.jsx(r,{modules:c,formats:s,placeholder:"Write something awesome...",...p})]}),d&&d]})}export{i as default};
