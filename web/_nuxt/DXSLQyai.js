import{d as y,r as b,k as S,o as k,g as a,f as i,h as p,w as m,q as _,G as g,p as u,m as f,l,z as h,W as $,H as x,N as w,M as B}from"./CdXuvUie.js";import{_ as q}from"./C-D94Ift.js";import{_ as N}from"./BFZc-Vuz.js";const I={class:"imageSetting"},T={class:"imageSetting-image"},D=y({__name:"ImageSetting",props:{fit:{type:Boolean,default:!1},data:{type:String,default:"",required:!0}},setup(s){const o=s,n=b(1),d=S(()=>o.data);return k(()=>{if(!o.fit){const e=new Image;e.src=o.data,e.onload=()=>{const t=e.width,r=e.height;n.value=r/t}}}),(e,t)=>{const r=h,c=$,v=q;return a(),i("div",I,[p(r,{class:"imageSetting-label",caption3:"",bold:"",unselectable:"",color:"light"},{default:m(()=>t[0]||(t[0]=[_(" 原図データ ")])),_:1}),g("div",T,[s.fit?(a(),u(c,f({key:0},{src:l(d)},{cover:""}),null,16)):(a(),u(v,{key:1,per:l(n)*100},{default:m(()=>[p(c,f({src:l(d)},{cover:""}),null,16)]),_:1},8,["per"]))]),t[1]||(t[1]=g("div",{class:"imageSetting-overlay"},null,-1))])}}}),V={class:"promptSetting"},C={key:0,class:"promptSetting-list"},M={key:1,class:"promptSetting-empty"},E=y({__name:"PromptSetting",props:{name:{type:String,default:"",required:!0},data:{type:Array,default:[],required:!0}},setup(s){const o=s,n=S(()=>o.data);return(d,e)=>{const t=h;return a(),i("div",V,[p(t,{class:"promptSetting-label",caption3:"",bold:"",unselectable:""},{default:m(()=>[_(x(s.name),1)]),_:1}),l(n).length>0?(a(),i("div",C,[(a(!0),i(w,null,B(l(n),(r,c)=>(a(),u(N,{key:`promptSetting-list-item-${c}`,text:r},null,8,["text"]))),128))])):(a(),i("div",M,[p(t,{body:"",bold:"",unselectable:"",color:"60"},{default:m(()=>e[0]||(e[0]=[_(" - ")])),_:1})]))])}}});export{D as _,E as a};