import{j as e}from"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import{useFormContext as o,Controller as r}from"../../node_modules/.pnpm/react-hook-form@7.45.4_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js";import t from"../../node_modules/.pnpm/@mui_material@5.15.5_@emotion_react@11.5.0_@emotion_styled@11.6.0_@types_react@18.2.51_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Slider/Slider.js";import m from"../../node_modules/.pnpm/@mui_material@5.15.5_@emotion_react@11.5.0_@emotion_styled@11.6.0_@types_react@18.2.51_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormHelperText/FormHelperText.js";function a({name:a,helperText:d,...n}){const{control:s}=o();return e.jsx(r,{name:a,control:s,render:({field:o,fieldState:{error:r}})=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...o,valueLabelDisplay:"auto",...n}),(!!r||d)&&e.jsx(m,{error:!!r,children:r?r?.message:d})]})})}export{a as default};