import{j as e}from"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import{LeftIcon as o,RightIcon as t}from"./arrow-icons.js";import i from"../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js";import r from"../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/IconButton/IconButton.js";import s from"../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js";import n from"../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js";import{alpha as a}from"@mui/system";const l=i(r,{shouldForwardProp:e=>"filled"!==e&&"hasChild"!==e&&"shape"!==e})((({filled:e,shape:o,hasChild:t,theme:i})=>({color:"inherit",transition:i.transitions.create("all",{duration:i.transitions.duration.shorter}),..."rounded"===o&&{borderRadius:1.5*i.shape.borderRadius},...!e&&{opacity:.48,"&:hover":{opacity:1}},...e&&{color:a(i.palette.common.white,.8),backgroundColor:a(i.palette.grey[900],.48),"&:hover":{color:i.palette.common.white,backgroundColor:i.palette.grey[900]}},...t&&{zIndex:9,top:"50%",position:"absolute",marginTop:i.spacing(-2.5)}})));function m({shape:i="circular",filled:r=!1,icon:a,onNext:m,onPrev:d,children:c,leftButtonProps:_,rightButtonProps:p,sx:u,...h}){const x="rtl"===s().direction;return!!c?e.jsxs(n,{sx:u,...h,children:[m&&e.jsx(l,{filled:r,shape:i,hasChild:!!c,onClick:d,..._,sx:{left:16,..._?.sx},children:e.jsx(o,{icon:a,isRTL:x})}),c,d&&e.jsx(l,{filled:r,shape:i,hasChild:!!c,onClick:m,...p,sx:{right:16,...p?.sx},children:e.jsx(t,{icon:a,isRTL:x})})]}):e.jsxs(n,{direction:"row",alignItems:"center",display:"inline-flex",sx:u,...h,children:[e.jsx(l,{filled:r,shape:i,onClick:d,..._,children:e.jsx(o,{icon:a,isRTL:x})}),e.jsx(l,{filled:r,shape:i,onClick:m,...p,children:e.jsx(t,{icon:a,isRTL:x})})]})}export{m as default};
