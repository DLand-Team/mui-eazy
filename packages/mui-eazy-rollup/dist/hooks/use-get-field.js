import{j as e}from"../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import{createElement as t}from"react";import{Stack as i,Typography as s}from"@mui/material";import{getField as l}from"../utils/get-field.js";import n from"../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/MenuItem/MenuItem.js";const o=(o=null)=>(a,r)=>{const{isHidden:m,type:c,label:p=a,config:d,prefix:u="",fieldConfig:f,wrapper:x}=r;if(m)return;let j,y=a;if(u)if(Array.isArray(u)){let e=[...u];e.push(y),y=e.join(".")}else y=u+"."+y;if("select"===c){const i=l(c);j=t(i,{...f,name:y,label:p,key:y},d?.options?.map((t=>e.jsx(n,{value:"string"==typeof t?t:t.value,children:"string"==typeof t?t:t.label},"string"==typeof t?t:t.key))))}else if("editer"===c){const t=l(c);j=e.jsxs(i,{sx:{width:"100%"},spacing:1.5,children:[e.jsx(s,{variant:"subtitle2",children:p}),e.jsx(t,{...f,simple:!0,name:y})]},y)}else if("autoCompleteGoogle"===c){const t=l(c);j=e.jsx(t,{name:y,label:p},y)}else if("checkbox"===c){const e=l(c);j=t(e,{...f,name:y,label:p,key:y})}else if("datePicker"===c){const e=l(c);j=t(e,{...f,name:y,label:p,key:y})}else if("multiple"===c){const e=l(c);j=t(e,{methods:o,...f,name:y,key:y})}else if("upload"===c){const n=l(c);j=e.jsxs(i,{sx:{width:"100%"},spacing:1.5,children:[e.jsx(s,{variant:"subtitle2",children:p}),t(n,{...f,name:y,key:y})]})}else if("uploadBox"===c){const n=l(c);j=e.jsxs(i,{spacing:1.5,children:[e.jsx(s,{variant:"subtitle2",children:p}),t(n,{...f,name:y,key:y})]})}else if("radio"===c){const n=l(c);let o=[];o=d?.options?.length&&"string"==typeof d?.options[0]?d?.options.map((e=>({value:e,key:e,label:e}))):d?.options,j=e.jsxs(i,{spacing:1.5,children:[e.jsx(s,{variant:"subtitle2",children:p}),t(n,{options:o,...f,name:y,key:y})]})}else if("multiSelect"===c){const n=l("multiSelect");j=e.jsxs(i,{spacing:1.5,children:[e.jsx(s,{variant:"subtitle2",children:p}),t(n,{...f,name:y,label:p,key:y})]})}else{const e=l("string");j=t(e,{...f,name:y,label:p,key:y})}if(x){let t=x;return e.jsx(t,{children:j},y)}return j};export{o as useGetField};
