import{d as x,f as e,g as _,z as i,w as t,A as c,B as S,_ as k,x as m,h as b,y as z,j as v,i as r,Y as o,G as q,F as w,l as D,aL as N,aP as P,E as T}from"./DOoLS5_l.js";const V={class:"prompt"},A=x({__name:"Prompt",props:{text:{type:String,default:"",required:!0}},setup(a){return(f,p)=>{const s=k;return e(),_("div",V,[i(s,{caption3:"",bold:"",unselectable:""},{default:t(()=>[c(S(a.text),1)]),_:1})])}}}),E={key:1,class:"promptSetting-empty"},j=x({__name:"PromptSetting",props:{name:{type:String,default:"",required:!0},data:{type:Array,default:[],required:!0},more:{type:Boolean,default:!1}},setup(a){const f=a,p=m(0),s=m(0),u=m(!1),y=b(()=>f.data),$=b(()=>({height:u.value?`${s.value}px`:"100%"})),B=()=>{u.value=!u.value};return(F,l)=>{const d=k,g=T,h=z("resize");return v((e(),r(g,{class:"promptSetting",style:P(o($)),animation:""},{default:t(()=>[i(N,{disabled:!a.more,onClick:B},{default:t(()=>[i(d,{class:"promptSetting-label",footnote:"",bold:"",unselectable:""},{default:t(()=>[c(S(a.name),1)]),_:1}),o(y).length>0?v((e(),r(g,{key:0,class:"promptSetting-list"},{default:t(()=>[(e(!0),_(w,null,q(o(y),(n,C)=>(e(),r(A,{key:`promptSetting-list-item-${C}`,text:n},null,8,["text"]))),128))]),_:1})),[[h,n=>s.value=n.height]]):(e(),_("div",E,[i(d,{body:"",bold:"",unselectable:"",color:"60"},{default:t(()=>l[0]||(l[0]=[c(" - ")])),_:1})])),o(s)>o(p)?(e(),r(d,{key:2,class:"promptSetting-ellipsis",caption1:"",bold:"",unselectable:""},{default:t(()=>l[1]||(l[1]=[c(" ... ")])),_:1})):D("",!0)]),_:1},8,["disabled"])]),_:1},8,["style"])),[[h,n=>p.value=n.height]])}}});export{j as _};