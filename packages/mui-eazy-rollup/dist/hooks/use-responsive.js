import e from"../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js";import t from"../node_modules/.pnpm/@mui_material@5.15.10_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/useMediaQuery/useMediaQuery.js";function o(o,m,r){const n=e(),a=t(n.breakpoints.up(m)),_=t(n.breakpoints.down(m)),i=t(n.breakpoints.between(m,r)),s=t(n.breakpoints.only(m));return"up"===o?a:"down"===o?_:"between"===o?i:s}export{o as useResponsive};
