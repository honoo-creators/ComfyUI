import{d as b,aE as E,x as p,f as c,i as F,w as t,z as e,Y as f,g as d,A as i,F as g,e as y,c as w,a2 as B,as as $,U as v,V as N,a1 as G}from"./DTE7kaSZ.js";import{_ as P}from"./C-5YsgHm.js";const V=b({__name:"upload",setup(R){const r=G(),s=E(),n=p(s.base64),_=p(s.imageFile),u=async()=>{const o=await r.select(["image"]);_.value=o.file,n.value=await r.encode(o.blob)},C=()=>{s.setBase64(n.value),s.setImageFile(_.value),y().push(w().GENERATE_PROMPT_SCENE)};return(o,a)=>{const l=B,k=$,m=v,x=N;return c(),F(x,{class:"pageGenerateUpload"},{default:t(()=>[e(m,{justify:"center",gap:"28"},{default:t(()=>[f(n)?(c(),d(g,{key:1},[e(k,{src:f(n)},null,8,["src"]),e(m,{gap:"12"},{default:t(()=>[e(l,{onClick:C},{default:t(()=>a[1]||(a[1]=[i(" 次へ ")])),_:1}),e(l,{tertiary:"",onClick:u},{default:t(()=>a[2]||(a[2]=[i(" 変更する ")])),_:1})]),_:1})],64)):(c(),d(g,{key:0},[e(P,{icon:"upload",title:"原図データをアップロード",body:"幅5000px・高さ5000px<br />20Mb以内の png・jpg ファイル"}),e(l,{w:"360",onClick:u},{default:t(()=>a[0]||(a[0]=[i(" データを選択 ")])),_:1})],64))]),_:1})]),_:1})}}});export{V as default};