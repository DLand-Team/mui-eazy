function e(e){let n=`${4==e.slice(5).length?"":"20"}${e.slice(5)}`,t=e.slice(2,5),l=e.slice(0,2);return`${n} ${c(t)} ${l}`}const n=e=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e];function c(e){return{JAN:1,FEB:2,MAR:3,APR:4,MAY:5,JUN:6,JUL:7,AUG:8,SEP:9,OCT:10,NOV:11,DEC:12}[e]||1}export{c as getMonthNum,n as getMonthStr,e as transformTime};
