import{d as G,e as ue,b as de,at as fe,au as _e,x as g,h as c,y as O,f as o,i as r,w as t,j as f,z as s,Y as n,g as R,$ as A,l as u,F as H,k as S,A as me,B as pe,aL as ge,p as he,c as ve,aX as be,ab as ke,H as we,D as ye,a2 as Se,E as Q,t as We,aY as Re,T as Ce,_ as Ie,V as Y,ax as $e,aQ as F,aZ as Be,aR as Ne,m as ze,r as Me,av as Te,a4 as xe,u as De}from"./543exzgI.js";import{_ as Le}from"./U6P34mNz.js";import{_ as Ue}from"./CFYU5ez6.js";import"./DhAcUocL.js";import"./BCM3nDqv.js";import"./BDivQwxy.js";import"./iRRxFaah.js";import"./DwIVxkWV.js";import"./C0Cc5fHK.js";import"./ByA5TxpV.js";const Ve={key:0,class:"headerWide-inner-centerLeftUI"},Ee={class:"headerWide-inner-center"},je={key:0,class:"headerWide-inner-centerRightUI"},W=110,Pe=G({__name:"HeaderWide",props:{back:{type:[String,Number],default:1},close:{type:[String,Number],default:1},title:{type:String,default:""},logo:{type:Boolean,default:!1},globalMenu:{type:Boolean,default:!1},menu:{type:[Boolean,Function],default:!1},menuNotice:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},background:{type:Boolean,default:!0}},setup(k){const{isPureNumber:C}=Ne(),{replace:v,go:b}=ue(),{DEV:B,dashboard:I}=ve(),{loggedIn:h}=de(),{face:N}=fe(_e()),a=k,l=g(0),x=g(0),z=g(0),M=g(0),w=g(0),$=g(0),y=g(0),X=g(0),Z=c(()=>w.value>0),q=c(()=>{const d=W*2+Number(F().getVariable("maxWidth","wide"))-480;return Be().width.value<=d}),J=c(()=>`calc(100% - ${F().getSize($.value+(y.value||w.value))})`),D=c(()=>{let e="";return!U.value&&a.back?e="back":e="logo",e}),K=c(()=>{const e=[];return a.back||a.avatar&&e.push("avatar"),e}),L=c(()=>{let e="";return a.title?e="title":a.back||a.globalMenu&&(e="globalMenu"),e}),U=c(()=>{let e="";return a.back&&(e="back"),e}),V=c(()=>{let e="";return Z.value?e="button":a.menu?e="menu":a.close&&(e="close"),e}),ee=c(()=>{let e="";return C(String(a.back))?parseInt(String(a.back))>0&&(e="go"):String(a.back)&&(e="replace"),e}),te=c(()=>{let e="";return C(String(a.close))?parseInt(String(a.close))>0&&(e="go"):String(a.close)&&(e="replace"),e}),ae=()=>{if(be().isPrevRoute)switch(ee.value){case"go":b(-1*parseInt(String(a.back)));break;case"replace":v(String(a.back));break}else v(I())},ne=()=>{switch(te.value){case"go":b(-1*parseInt(String(a.close)));break;case"replace":v(String(a.close));break}},E=()=>{typeof a.menu=="function"?a.menu():ke().open({name:"myMenu",from:"right"})};return(e,d)=>{const se=Le,oe=we,ie=ye,re=Se,_=Q,m=We,T=Re,j=Ce,ce=Ie,P=Y,le=$e,p=O("resize");return o(),r(m,{tag:"header",class:he(["headerWide",{_background:k.background}]),align:"center",nowrap:""},{default:t(()=>[f((o(),r(P,{class:"headerWide-inner",wide:""},{default:t(()=>[s(m,{justify:"between",align:"center",nowrap:"",fit:""},{default:t(()=>[f((o(),r(_,{w:W,"min-w":W,mr:"auto"},{default:t(()=>[n(D)?(o(),R(H,{key:0},[n(D)==="logo"?(o(),r(m,{key:0,align:"center",gap:"12",nowrap:""},{default:t(()=>[s(oe,{to:n(I)()},{default:t(()=>[s(se,{size:"32"})]),_:1},8,["to"]),s(_,{"min-w":"20","min-h":"20"},{default:t(()=>[("useRuntimeConfig"in e?e.useRuntimeConfig:n(A))().public.DEV_ENABLED&&("useRuntimeConfig"in e?e.useRuntimeConfig:n(A))().public.ENVIRONMENT==="local"?(o(),r(re,{key:0,to:n(B),secondary:"",w:"20",h:"20"},{default:t(()=>[s(ie,{name:"setting",size:"12",color:"light"})]),_:1},8,["to"])):u("",!0)]),_:1})]),_:1})):u("",!0)],64)):u("",!0)]),_:1})),[[p,i=>l.value=i.width]]),f((o(),r(_,{w:n(q)?"60%":"100%",h:"100%"},{default:t(()=>[s(P,{fit:""},{default:t(()=>[s(_,{w:"100%",h:"100%",relative:""},{default:t(()=>[s(j,{x:"40"},{default:t(()=>[n(U)==="back"?(o(),R("div",Ve,[f(s(T,{icon:"arrowLeft",size:"22",onClick:ae},null,512),[[p,i=>$.value=i.width]])])):u("",!0)]),_:1}),f((o(),r(_,{class:"headerWide-inner-centerLeftInfo","max-w":n(J),h:"100%"},{default:t(()=>[s(m,{align:"center",nowrap:"",fit:""},{default:t(()=>d[0]||(d[0]=[S("div",{id:"headerWideLeft"},null,-1)])),_:1})]),_:1},8,["max-w"])),[[p,i=>M.value=i.width]]),S("div",Ee,[n(L)==="title"?(o(),r(m,{key:0,justify:"center",align:"center",nowrap:"",fit:""},{default:t(()=>[s(ce,{caption1:"",bold:"",center:""},{default:t(()=>[me(pe(a.title),1)]),_:1})]),_:1})):u("",!0),s(_,{h:n(L)?"0":"100%"},{default:t(()=>[s(m,{justify:"center",align:"center",nowrap:"",fit:""},{default:t(()=>d[1]||(d[1]=[S("div",{id:"headerWideCenter"},null,-1)])),_:1})]),_:1},8,["h"])]),s(j,{x:"40"},{default:t(()=>[n(V)==="menu"?(o(),R("div",je,[f(s(T,{icon:"menu",size:"22",onClick:E},null,512),[[p,i=>y.value=i.width+(k.menuNotice?16:0)]]),k.menuNotice?(o(),r(_,{key:0,r:"circle",color:"primary",w:"6",h:"6",absolute:"",bottom:"46%",left:"8%"})):u("",!0)])):u("",!0),n(V)==="close"?f((o(),r(T,{key:1,class:"headerWide-inner-centerRightUI",icon:"cross",size:"22",onClick:ne},null,512)),[[p,i=>y.value=i.width]]):u("",!0)]),_:1}),f((o(),r(_,{class:"headerWide-centerRight"},{default:t(()=>[s(m,{justify:"end",align:"center",fit:""},{default:t(()=>d[2]||(d[2]=[S("div",{id:"headerWideRight"},null,-1)])),_:1})]),_:1})),[[p,i=>w.value=i.width]])]),_:1})]),_:1})]),_:1},8,["w"])),[[p,i=>x.value=i.width]]),f((o(),r(_,{w:W,"min-w":W,ml:"auto"},{default:t(()=>[s(m,{justify:"end",align:"center",gap:"40",nowrap:""},{default:t(()=>[s(m,{justify:"end",align:"center",fit:""},{default:t(()=>d[3]||(d[3]=[S("div",{id:"headerWideRightEnd"},null,-1)])),_:1}),n(K).includes("avatar")?(o(),R(H,{key:0},[n(h)?(o(),r(ge,{key:0,onClick:E},{default:t(()=>[s(le,{src:n(N),size:"28"},null,8,["src"])]),_:1})):u("",!0)],64)):u("",!0)]),_:1})]),_:1})),[[p,i=>z.value=i.width]])]),_:1})]),_:1})),[[p,i=>X.value=i.width]])]),_:1},8,["class"])}}}),Ae={class:"layoutDefault"},Ke=G({__name:"default",setup(k){const{isScreenSizeAbove:C}=Te(),v=g(0),b=c(()=>De().meta.page),B=c(()=>{var l;return((l=b.value)==null?void 0:l.type)||""}),I=c(()=>{var l;return((l=b.value)==null?void 0:l.isGenerateSetting)||!1}),h=c(()=>{var l;return((l=b.value)==null?void 0:l.header)||{}}),N=c(()=>h.value.title||h.value.back||h.value.close||h.value.logo||h.value.menu),a=c(()=>v.value+40);return(l,x)=>{const z=Y,M=Q,w=xe,$=O("resize");return o(),R("div",Ae,[f((o(),r(M,{class:"layoutDefault-header",pb:"12"},{default:t(()=>[n(N)?(o(),r(Pe,ze({key:0},n(h),{background:!1}),null,16)):u("",!0),n(I)?(o(),r(z,{key:1,wide:"","no-padding":n(C)("l")},{default:t(()=>[s(Ue)]),_:1},8,["no-padding"])):u("",!0)]),_:1})),[[$,y=>v.value=y.height]]),s(w,{class:"layoutDefault-page","top-space":n(a),center:n(B)==="center","bottom-space":"80"},{default:t(()=>[Me(l.$slots,"default")]),_:3},8,["top-space","center"])])}}});export{Ke as default};