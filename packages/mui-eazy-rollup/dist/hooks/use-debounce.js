import{useState as t,useEffect as r}from"react";function e(e,o=500){const[n,c]=t(e);return r((()=>{const t=setTimeout((()=>{c(e)}),o);return()=>{clearTimeout(t)}}),[e,o]),n}export{e as useDebounce};
