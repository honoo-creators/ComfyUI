import{_ as ne}from"./CfB9QmQU.js";import{d as U,ad as se,h as g,f as i,g as y,z as e,w as s,F as oe,G as ue,Y as a,i as $,ae as ie,H as j,p as re,af as G,t as V,D as q,_ as N,A as x,B as ce,l as f,K as de,ag as me,x as r,Z as O,ah as _e,ai as pe,C as ve,a2 as fe,aj as he,E as ye,U as ge,V as $e,$ as ke,b as be}from"./CCzr4apV.js";import{_ as Ce}from"./1gJ9OhY6.js";import{_ as Te}from"./CMEFqJdC.js";import{_ as we}from"./8iZHoqmL.js";import{_ as Ve}from"./D5Wvuviw.js";const xe={class:"tabs"},Ee=U({__name:"Tabs",props:{list:{type:Array,default:()=>[]}},setup(E){const k=E,{list:t}=se(k),c=g(()=>`width: calc(100% / ${t.value.length});`),p=g(()=>n=>({_icon:t.value[n].icon,_current:t.value[n].current,_disabled:!t.value[n].click&&!t.value[n].path})),d=g(()=>{let n=-1;if(t.value.some(u=>u.path)){const u=de().path;n=t.value.findIndex(o=>o.path===u)}else n===-1&&(n=t.value.findIndex(u=>u.current));return n});return(n,u)=>(i(),y("div",xe,[e(V,{class:"tabs-list",align:"center",nowrap:""},{default:s(()=>[(i(!0),y(oe,null,ue(a(t),(o,m)=>(i(),$(ie(o.path?j:"div"),{key:`tabs-list-item-${m}`,class:re(["tabs-list-item",p.value(m)]),style:G(c.value),to:o.path,replace:"","no-hover-style":"",onClick:b=>o.click&&o.click()},{default:s(()=>[e(V,{justify:"center",align:"center",gap:"8"},{default:s(()=>[o.icon?(i(),$(q,{key:0,type:o.icon.name,size:o.icon.size||16},null,8,["type","size"])):o.name?(i(),$(N,{key:1,caption1:"",bold:"",center:"",unselectable:"",lineclamp:"1"},{default:s(()=>[x(ce(o.name),1)]),_:2},1024)):f("",!0)]),_:2},1024)]),_:2},1032,["class","style","to","onClick"]))),128))]),_:1}),d.value!==-1?(i(),y("div",{key:0,class:"tabs-bar",style:G(`${c.value}; transform: translateX(${100*d.value}%)`)},null,4)):f("",!0)]))}}),Fe={class:"pageDevHttpRequestFetchClient"},Ie={key:0},Re={key:0},Be={key:0},Se='{ "page": 1, "limit": 100 }',Ne=U({__name:"fetch-client",setup(E){const{request:k}=me(),t=r(""),c=r(""),p=r("GET"),d=r(null),n=r(null),u=r(!1),o=r(!1),m=r(!1),b=r(""),C=r(!1),F=r(!1),A=r(""),P=g(()=>!t.value&&m.value&&F.value),D=g(()=>[{name:"GET",click:()=>p.value="GET",current:p.value==="GET"},{name:"POST",click:()=>p.value="POST",current:p.value==="POST"}]),I=g(()=>t.value.startsWith(ke().public.API_URL)?{Authorization:`Bearer ${be().token.value}`}:{}),L=async()=>{p.value==="GET"?await H():await J()},J=async()=>{let _={};try{_=c.value?JSON.parse(c.value):{}}catch(l){await _e().error(new pe(ve.ValidationError,"",`パラメータに問題があります。${l}`));return}try{d.value=null,n.value=null,u.value=!0,d.value=await k(t.value,{method:"POST",headers:I.value,body:_})}catch(l){n.value=l}finally{u.value=!1}},H=async()=>{try{d.value=null,n.value=null,u.value=!0;const _=c.value?JSON.parse(c.value):null;d.value=await k(t.value,{method:"GET",headers:I.value,body:_})}catch(_){n.value=_}finally{u.value=!1}},W=()=>{m.value=!1,b.value=""},M=_=>{m.value=!0,b.value=_},K=()=>{t.value="",c.value="",d.value=null,n.value=null};return(_,l)=>{const X=ne,T=N,R=q,B=fe,Y=he,v=ye,S=Ce,Z=Ee,Q=Te,w=we,z=Ve,ee=V,ae=j,te=ge,le=$e;return i(),y("div",Fe,[e(le,null,{default:s(()=>[e(te,{justify:"stretch"},{default:s(()=>[e(v,{relative:""},{default:s(()=>[e(T,{subheadline:"",extrabold:""},{default:s(()=>[e(X,{modelValue:a(t),"onUpdate:modelValue":l[0]||(l[0]=h=>O(t)?t.value=h:null),type:"text",name:"requestUrl",label:"Request URL",placeholder:"https://example.com/api",autocomplete:"",validation:"always",onFocus:l[1]||(l[1]=h=>o.value=!0),onBlur:l[2]||(l[2]=h=>o.value=!1),onValid:W,onInvalid:M},null,8,["modelValue"])]),_:1}),a(t)?(i(),$(v,{key:0,absolute:"",right:"0",top:"0",h:"100%"},{default:s(()=>[e(Y,null,{default:s(()=>[e(B,{xsmall:"",minimal:"",disabled:a(u),onClick:K},{default:s(()=>[e(R,{name:"cross",size:"12"})]),_:1},8,["disabled"])]),_:1})]),_:1})):f("",!0)]),_:1}),e(S,{focus:a(o),invalid:a(m),message:a(b)},null,8,["focus","invalid","message"]),e(w,null,{default:s(()=>[a(t)&&!a(m)?(i(),y("div",Ie,[e(v,{h:"28"}),e(Z,{list:a(D)},null,8,["list"]),e(v,{h:"8"}),e(T,{caption1:""},{default:s(()=>[e(Q,{modelValue:a(c),"onUpdate:modelValue":l[3]||(l[3]=h=>O(c)?c.value=h:null),name:"params",label:`Input ${a(p)==="GET"?"query":"body"}...`,rows:"5",placeholder:Se,onFocus:l[4]||(l[4]=h=>C.value=!0),onBlur:l[5]||(l[5]=h=>C.value=!1)},null,8,["modelValue","label"])]),_:1}),e(S,{focus:a(C),invalid:a(F),message:a(A),description:"json 形式で入力してください。"},null,8,["focus","invalid","message"]),e(v,{h:"40"}),e(B,{loading:a(u),disabled:a(P),w:"100%",onClick:L},{default:s(()=>l[6]||(l[6]=[x(" Request ")])),_:1},8,["loading","disabled"]),e(v,{h:"40"})])):f("",!0)]),_:1}),e(w,null,{default:s(()=>[a(t)&&!a(m)&&(a(d)||a(n))?(i(),y("div",Re,[e(v,{h:"48"}),a(d)?(i(),$(z,{key:0,title:"Response",lang:"json",code:JSON.stringify(a(d),null,4)},null,8,["code"])):f("",!0),a(n)?(i(),$(z,{key:1,title:"Error",lang:"json",code:JSON.stringify(a(n),null,4)},null,8,["code"])):f("",!0)])):f("",!0)]),_:1}),e(w,null,{default:s(()=>[a(t)?f("",!0):(i(),y("div",Be,[e(v,{h:"28"}),e(ae,{blank:"",to:"https://github.com/honoo-creators/honoo-technologies-ui/wiki/Fetch-Client"},{default:s(()=>[e(ee,{justify:"end",align:"center",gap:"8",style:{opacity:".6"}},{default:s(()=>[e(R,{name:"question",size:"12"}),e(T,{footnote:"",bold:""},{default:s(()=>l[7]||(l[7]=[x(' What is "Fetch Client" ? ')])),_:1})]),_:1})]),_:1})]))]),_:1})]),_:1})]),_:1})])}}});export{Ne as default};