import{d as i,am as d,aE as n,x as C,h as g,f as x,i as P,w as r,z as t,ad as h,m as G,Y as l,Z as M,A as R,e as T,c as $,a2 as v,U as E,V as N}from"./DTE7kaSZ.js";import{_ as k}from"./C-5YsgHm.js";import{u as A}from"./C4RRpsp9.js";const S=i({__name:"mood",setup(B){const{promptMoodSuggests:o}=d(n()),e=C([...n().promptMood||[]]),m=g(()=>{let a="";return o.value.length>0&&(a=A().shuffle([...o.value])[0]),a}),c=()=>{n().setPromptMood(e.value),T().push($().GENERATE_PROMPT_LIGHTING)};return(a,s)=>{const p=v,u=E,_=N;return x(),P(_,{class:"pageGeneratePromptC"},{default:r(()=>[t(u,{gap:"28"},{default:r(()=>[t(k,{icon:"edit",title:"色調・ムード"}),t(h,G({selects:l(e),"onUpdate:selects":s[0]||(s[0]=f=>M(e)?e.value=f:null),name:"promptMood"},{placeholder:l(m),list:l(o)}),null,16,["selects"]),t(p,{onClick:c},{default:r(()=>s[1]||(s[1]=[R(" 次へ ")])),_:1})]),_:1})]),_:1})}}});export{S as default};