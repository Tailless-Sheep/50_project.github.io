import{i as c}from"./3-C1nT38vD.js";import{_ as n,r as i,f as u,l as t,c as _,d as s,b as r,u as d,t as p,o as v}from"./index-BsnbJHZM.js";const m={class:"container"},f=["src"],y={__name:"BlurryLoading",setup(g){const e=i(0);u(()=>{const a=setInterval(()=>{e.value+=1,e.value>=100&&clearInterval(a)},20)});const o=t(()=>10-e.value/10),l=t(()=>1-e.value/100);return(a,b)=>(v(),_("div",m,[s("img",{class:"img",style:r({filter:`blur(${o.value}px)`}),src:d(c)},null,12,f),s("div",{class:"text",style:r({opacity:`${l.value}`})},p(e.value)+"%",5)]))}},I=n(y,[["__scopeId","data-v-0eb4d4ba"]]);export{I as default};
