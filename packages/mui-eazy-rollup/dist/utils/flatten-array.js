function n(t,e="children"){let c=[];const l=t?.map((n=>(n[e]&&n[e].length&&(c=[...c,...n[e]]),n)));return l?.concat(c.length?n(c,e):c)}export{n as flattenArray};
