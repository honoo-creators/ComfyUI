import{d as f,i as g,ac as o,r as d,k as h,p as C,w as r,F as x,g as R,h as s,am as $,m as k,l as i,an as v,q as L,e as N,c as P,D as B,J as E}from"./CdXuvUie.js";import{_ as G}from"./BQe5DXC7.js";import{u as T}from"./BfNzaeap.js";const D=f({__name:"lighting",setup(b){const{promptLightingSuggests:a}=g(o()),e=d([...o().promptLighting||[]]),l=h(()=>{let n="";return a.value.length>0&&(n=T().shuffle([...a.value])[0]),n}),p=()=>{o().setPromptLighting(e.value),N().push(P().GENERATE_CONFIRM)};return(n,t)=>{const m=B,c=E,u=x;return R(),C(u,{class:"pageGeneratePromptD"},{default:r(()=>[s(c,{gap:"28"},{default:r(()=>[s(G,{icon:{name:"edit",size:36},title:"ライティング",body:"柔らかな朝の光、劇的なスポットライト、など<br />光の演出を具体的に入力してください。"}),s($,k({selects:i(e),"onUpdate:selects":t[0]||(t[0]=_=>v(e)?e.value=_:null),name:"promptLighting","guide-prompt":""},{placeholder:i(l),list:i(a)}),null,16,["selects"]),s(m,{onClick:p},{default:r(()=>t[1]||(t[1]=[L(" 次へ ")])),_:1})]),_:1})]),_:1})}}});export{D as default};