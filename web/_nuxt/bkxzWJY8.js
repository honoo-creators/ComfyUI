import{d as _e,aE as de,x as f,h as k,P as W,o as ge,ar as Y,aJ as he,X as ve,a5 as d,f as a,i as s,w as t,z as n,Y as e,m as J,aF as K,l as u,g as w,k as X,p as ye,G as Z,F as L,A as g,aG as ee,c as A,a0 as ke,n as te,aD as ae,D as we,au as Ce,E as $e,_ as Ee,U as Pe,t as Se,a2 as Te,V as be,B as ne,al as Le,$ as Oe,as as Re}from"./DTE7kaSZ.js";import{_ as Be}from"./A_v5ED_Z.js";import{_ as Me}from"./BcirAi-M.js";import{_ as oe}from"./C-5YsgHm.js";import{_ as Ie}from"./D8ZPbYKp.js";const De={key:1,class:"pageOutput-info-spinner"},Ne=["innerHTML"],Ue=["innerHTML"],Ae=1e3,se=.1,le=4,h=40,qe=_e({__name:"output",setup(Ge){const{isQueue:O,output:re,isInitQueue:R,progress:C}=d(),l=de(),B=f(0),m=f(0),G=f(!1),_=f(!1),r=f([]),j=f(!1),z=f("Starting.");let M=1,I;const D=k(()=>`${r.value.length}/${h}`),N=k(()=>{if(r.value.length===h)return"背景美術を生成しました。";const o=Math.floor(m.value/36e5),i=Math.floor(m.value%36e5/6e4),c=Math.floor(m.value%6e4/1e3);let v="";return o===0&&i===0&&c===0?v="-- : -- : --":v=`${String(o).padStart(2,"0")} : ${String(i).padStart(2,"0")} : ${String(c).padStart(2,"0")}`,U.value?`${v}`:" "}),$=k(()=>r.value.length===h),U=k(()=>!R.value&&(C.value>=0||r.value.length>0)?!0:R.value),ie=k(()=>l.imageHeight/l.imageWidth*100),H=async()=>{await ke().open({name:"prompt"})||(O.value&&d().postInterrupt(),d().queueClear(),r.value=[],await Y(),await l.setWorkflow(),l.incrementRetryCount(),E())},ue=()=>{l.incrementRetryCount(),te(A().GENERATE_UPLOAD)},ce=()=>{l.init(),te(A().GENERATE_LOOKSTYLE)},x=async()=>{if(_.value)return;const o=1e3;await ae().wait(o),m.value-=o,m.value>=0?x():m.value=0},pe=o=>{Le().open({name:"imagePreview",options:{index:o,list:r.value,onDownloadEnd:()=>V()}})},E=async()=>{$.value||_.value||(O.value?(await ae().wait(Ae),E()):(_.value=!1,d().queuePrompt({json:JSON.stringify(l.workflow),batchCount:h-r.value.length})))},V=()=>{_.value=!1,E()};return W(()=>re.value,o=>{o&&o.length>0&&r.value.push(o[o.length-1].replace("http://127.0.0.1:8188",Oe().public.BASE_URL))},{deep:!0}),W(()=>C.value,(o,i)=>{if(!B.value&&i===0&&(B.value=Date.now()),o>=se&&!G.value){G.value=!0;const c=Date.now()-B.value;m.value=c*(1/se)*(h-r.value.length),x()}},{immediate:!0}),ge(async()=>{await Y(),E(),I=he(()=>{M=M%3+1,z.value=" Starting "+".".repeat(M)},1e3),j.value=!0}),ve(()=>{O.value&&d().postInterrupt(),d().queueClear(),I!==null&&clearInterval(I)}),(o,i)=>{const c=we,v=Ce,P=$e,S=Ee,T=Pe,me=Re,q=Be,fe=Me,b=Se,y=Te,F=be;return a(),s(F,{class:"pageOutput",wide:""},{default:t(()=>[n(T,{gap:"36"},{default:t(()=>[e($)?(a(),s(oe,J({key:0},{title:e(D),body:e(N)},{icon:"shine"}),null,16)):(a(),s(T,{key:1,class:"pageOutput-info",justify:"center",gap:"24"},{default:t(()=>[n(P,{w:"48",h:"48",mt:"20",relative:""},{default:t(()=>[e(_)?(a(),s(K,{key:0,onClick:V},{default:t(()=>[n(c,{name:"play",size:"44"})]),_:1})):u("",!0),e(_)?u("",!0):(a(),w("div",De,[n(v,{size:"48",stroke:"4.4"})]))]),_:1}),e(D)?(a(),s(S,{key:0,class:"pageOutput-info-title",title2:"",extrabold:"",center:""},{default:t(()=>[X("span",{innerHTML:e(D)},null,8,Ne)]),_:1})):u("",!0),e(N)?(a(),s(S,{key:1,class:ye(["pageOutput-info-body",{_animation:!e(U)}]),caption1:"",bold:"",center:""},{default:t(()=>[X("span",{innerHTML:e(N)},null,8,Ue)]),_:1},8,["class"])):u("",!0)]),_:1})),n(b,{gap:"8",split:le},{default:t(()=>[(a(),w(L,null,Z(h,p=>n(fe,{key:`pageOutput-item-${p}`,class:"pageOutput-img",per:e(ie)},{default:t(()=>[e(r)[p-1]?(a(),s(K,{key:0,onClick:Q=>pe(p-1)},{default:t(()=>[n(me,{src:e(r)[p-1],cover:""},null,8,["src"])]),_:2},1032,["onClick"])):u("",!0),!e($)&&p-1===e(r).length?(a(),s(P,{key:1,class:"pageOutput-img-progress",w:"100%",h:"100%",relative:""},{default:t(()=>[n(q,{w:"100%",h:"100%",animation:""}),n(P,{absolute:"",top:"8",left:"8",color:"dark","min-w":"32",r:"4",pt:"4",pb:"4",pr:"4",pl:"4"},{default:t(()=>[e(R)&&e(C)>0?(a(),s(S,{key:0,callout:"",bold:"",center:"",color:"light","baseline-height":""},{default:t(()=>[g(ne(Math.round(e(C)*100))+"% ",1)]),_:1})):(a(),s(S,{key:1,callout:"",bold:"",color:"light","baseline-height":"",style:{width:"56px"}},{default:t(()=>[g(ne(e(z)),1)]),_:1}))]),_:1})]),_:1})):(a(),s(q,{key:2,w:"100%",h:"100%",animation:!e(U),delay:p/le*150},null,8,["animation","delay"]))]),_:2},1032,["per"])),64))]),_:1}),e($)?(a(),s(T,{key:2,justify:"center",gap:"40"},{default:t(()=>[n(oe,{icon:"checkCircleLine",body:"生成画像は以上です"}),n(F,null,{default:t(()=>[n(T,{justify:"stretch",gap:"20"},{default:t(()=>[n(y,{onClick:ue},{default:t(()=>i[0]||(i[0]=[g(" 設定を変更してやり直す ")])),_:1}),n(y,{info:"",onClick:ce},{default:t(()=>i[1]||(i[1]=[g(" 新しい背景美術を生成する ")])),_:1})]),_:1})]),_:1})]),_:1})):u("",!0)]),_:1}),e(j)?(a(),w(L,{key:0},[(a(),s(ee,{to:"#headerWideCenter"},[e(l).prompt&&e(l).prompt.length>0?(a(),s(b,{key:0,class:"headerPrompt",justify:"center",align:"center",gap:"8",nowrap:""},{default:t(()=>[n(b,{class:"headerPrompt-list",align:"center",gap:"2",fit:""},{default:t(()=>[(a(!0),w(L,null,Z(e(l).prompt,(p,Q)=>(a(),s(Ie,J({key:`headerPrompt-item-${Q}`,ref_for:!0},{text:p}),null,16))),128))]),_:1}),n(P,{class:"headerPrompt-btn",w:"40","min-w":"40",h:"40","min-h":"40"},{default:t(()=>[n(y,{class:"headerPrompt-btn-inner",w:"100%",h:"100%",onClick:H},{default:t(()=>[n(c,{name:"edit",size:"16",color:"light"})]),_:1})]),_:1})]),_:1})):!e(l).prompt||!e(l).prompt.length?(a(),s(b,{key:1,class:"headerPromptEmpty",justify:"center",align:"center",gap:"8",nowrap:""},{default:t(()=>[n(y,{xsmall:"",rounded:"",w:"160",onClick:H},{default:t(()=>[n(c,{name:"edit",size:"16",color:"light"}),!e(l).prompt||!e(l).prompt.length?(a(),w(L,{key:0},[g(" プロンプトを設定する ")],64)):u("",!0)]),_:1})]),_:1})):u("",!0)])),(a(),s(ee,{to:"#headerWideRightEnd"},[n(y,{class:"headerEndBtn",minimal:"",xsmall:"",to:("useConstantsPath"in o?o.useConstantsPath:e(A))().dashboard()},{default:t(()=>i[2]||(i[2]=[g(" 終了する ")])),_:1},8,["to"])]))],64)):u("",!0)]),_:1})}}});export{qe as default};