import{j as e}from"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import{useFormContext as r,Controller as o}from"../../node_modules/.pnpm/react-hook-form@7.50.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.js";import"../image/image.js";import"../iconify/iconify.js";import{UploadBtn as t}from"../upload/upload-btn.js";import{UploadDrag as m}from"../upload/upload-drag/index.js";import"@mui/material";import{useEffect as l}from"react";import"../upload/upload-drag/cropModal.js";import i from"../../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormHelperText/FormHelperText.js";function n({name:m,...l}){const{control:i}=r();return e.jsx(o,{name:m,control:i,render:({field:r,fieldState:{error:o}})=>e.jsx(t,{files:r.value,error:!!o,...l})})}function a({accept:t,name:n,multiple:a,helperText:s,onUpload:d,isCrop:p,...u}){const{control:c,setValue:f,getValues:x,watch:_,trigger:j}=r();return l((()=>{const e=_(((e,r)=>{r.name==n&&j(n)}));return()=>e.unsubscribe()}),[]),e.jsx(o,{name:n,control:c,render:({field:r,fieldState:{error:o}})=>e.jsx(m,{isCrop:p,multiple:a,accept:t||{"image/*":[]},files:a?r.value:r.value?[r.value]:[],error:!!o,onOrder:e=>{f(n,e)},onAdd:e=>{if(a){const r=x(n)||[];f(n,[...r,e])}else f(n,e)},onDel:e=>{if(a){let r=x(n),o=r.findIndex((r=>r==e));r.splice(o,1),f(n,r)}else f(n,null)},helperText:(!!o||s)&&e.jsx(i,{error:!!o,sx:{px:2},children:o?o?.message:s}),...u})})}export{a as FieldUpload,n as FieldUploadBox};
