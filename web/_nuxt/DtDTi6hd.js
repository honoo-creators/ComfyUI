import{d as f,aw as g,aN as o,x as d,h,f as C,i as x,w as r,z as s,aa as N,ao as R,m as $,Y as i,Z as v,A as L,e as P,c as k,a2 as w,U as A,V as B}from"./BQYQe1C_.js";import{u as E}from"./BfNzaeap.js";const b=f({__name:"lighting",setup(G){const{promptLightingSuggests:a}=g(o()),e=d([...o().promptLighting||[]]),l=h(()=>{let n="";return a.value.length>0&&(n=E().shuffle([...a.value])[0]),n}),p=()=>{o().setPromptLighting(e.value),P().push(k().GENERATE_CONFIRM)};return(n,t)=>{const c=w,u=A,m=B;return C(),x(m,{class:"pageGeneratePromptD"},{default:r(()=>[s(u,{gap:"28"},{default:r(()=>[s(N,{icon:{name:"edit",size:36},title:"ライティング",body:"柔らかな朝の光、劇的なスポットライト、など<br />光の演出を具体的に入力してください。"}),s(R,$({selects:i(e),"onUpdate:selects":t[0]||(t[0]=_=>v(e)?e.value=_:null),name:"promptLighting","guide-prompt":""},{placeholder:i(l),list:i(a)}),null,16,["selects"]),s(c,{onClick:p},{default:r(()=>t[1]||(t[1]=[L(" 次へ ")])),_:1})]),_:1})]),_:1})}}});export{b as default};