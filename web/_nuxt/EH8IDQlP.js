import{d as f,i as d,ac as n,r as g,k as C,p as P,w as r,F as h,g as x,h as t,am as G,m as M,l,an as R,q as T,e as $,c as k,D as v,J as N}from"./CdXuvUie.js";import{_ as B}from"./BQe5DXC7.js";import{u as E}from"./BfNzaeap.js";const I=f({__name:"mood",setup(b){const{promptMoodSuggests:o}=d(n()),e=g([...n().promptMood||[]]),m=C(()=>{let a="";return o.value.length>0&&(a=E().shuffle([...o.value])[0]),a}),p=()=>{n().setPromptMood(e.value),$().push(k().GENERATE_PROMPT_LIGHTING)};return(a,s)=>{const c=v,u=N,_=h;return x(),P(_,{class:"pageGeneratePromptC"},{default:r(()=>[t(u,{gap:"28"},{default:r(()=>[t(B,{icon:{name:"edit",size:36},title:"色調・ムード",body:"残暑が厳しい9月の終わり、暖かい夕焼けの色調、など<br />雰囲気を具体的に入力してください。"}),t(G,M({selects:l(e),"onUpdate:selects":s[0]||(s[0]=i=>R(e)?e.value=i:null),name:"promptMood","guide-prompt":""},{placeholder:l(m),list:l(o)}),null,16,["selects"]),t(c,{onClick:p},{default:r(()=>s[1]||(s[1]=[T(" 次へ ")])),_:1})]),_:1})]),_:1})}}});export{I as default};