import{i as c}from"./3-yppXioPP.js";import{_ as n,r as u,f as i,l as t,c as _,d as s,b as o,u as d,t as p,o as v}from"./index-Hi5t869m.js";const m={class:"container"},f=["src"],y={__name:"5.BlurryLoading",setup(g){const e=u(0);i(()=>{const a=setInterval(()=>{e.value+=1,console.log(e.value),e.value>=100&&clearInterval(a)},20)});const r=t(()=>10-e.value/10),l=t(()=>1-e.value/100);return(a,b)=>(v(),_("div",m,[s("img",{class:"img",style:o({filter:`blur(${r.value}px)`}),src:d(c)},null,12,f),s("div",{class:"text",style:o({opacity:`${l.value}`})},p(e.value)+"%",5)]))}},I=n(y,[["__scopeId","data-v-f5a8b42b"]]);export{I as default};
