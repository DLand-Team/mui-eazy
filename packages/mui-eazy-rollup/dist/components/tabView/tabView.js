import{j as e}from"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import{Tabs as o,Tab as i}from"@mui/material";import{useState as t,useCallback as m,useLayoutEffect as r}from"react";import"../../utils/highlight.js";import"../../node_modules/.pnpm/numeral@2.0.6/node_modules/numeral/numeral.js";import"../../utils/myDay.js";import"../../hooks/use-fields.js";import"../iconify/iconify.js";import"../image/image.js";import"../upload/upload-drag/cropModal.js";import"../editor/index.js";import"../../node_modules/.pnpm/react-google-autocomplete@2.7.3_react@18.2.0/node_modules/react-google-autocomplete/lib/usePlacesAutocompleteService.js";import{uuidv4 as l}from"../../utils/uuidv4.js";import a from"../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js";function s({tabs:a,...s}){const[d,p]=t([]),[u,c]=t("My Information"),j=m(((e,o)=>{c(o)}),[]);return r((()=>{const e=[];a.forEach(((o,i)=>{e.push({}),o.id||(e[i].id=l()),Object.assign(e[i],o)})),e[0].id&&c(e[0].id),p(e)}),[a]),e.jsxs(e.Fragment,{children:[e.jsx(o,{scrollButtons:!1,onChange:j,style:{marginBottom:"20px"},...s,value:u,children:d.map((({id:o,label:t})=>e.jsx(i,{value:o,label:t},t||o)))}),d.map((({id:o,node:i})=>e.jsx(n,{value:u,index:o,children:i},o)))]})}function n(o){const{children:i,value:t,index:m,...r}=o;return e.jsx("div",{role:"tabpanel",hidden:t!==m,id:`simple-tabpanel-${m}`,"aria-labelledby":`simple-tab-${m}`,...r,children:t===m&&e.jsx(a,{sx:{py:3},children:i})})}export{s as TabView};
