import{d,r as f,a0 as p,k as n,g as m,f as v,G as _,h as g,w as y,I as w,ar as B,v as h,B as S}from"./CdXuvUie.js";const C=d({__name:"Ratio",props:{golden:{type:Boolean,default:!1},square:{type:Boolean,default:!1},cinema:{type:Boolean,default:!1},ultraWideGaming:{type:Boolean,default:!1},overflow:{type:String,default:"hidden",validator:l=>["hidden","visible"].includes(l)},per:{type:[Number,String],default:0}},setup(l){const e=l,a=f("");p([()=>e.golden,()=>e.square,()=>e.cinema,()=>e.ultraWideGaming,()=>e.per],([t,r,o,u,c])=>{t&&(a.value="golden"),r&&(a.value="square"),o&&(a.value="cinema"),u&&(a.value="ultraWideGaming"),!a.value&&!c&&(a.value="golden")},{immediate:!0});const s=n(()=>({[`_overflow${e.overflow.charAt(0).toUpperCase()+e.overflow.slice(1)}`]:!0,[`_${a.value}`]:!0})),i=n(()=>{let t={};return e.per&&(t={paddingTop:`${e.per}%`}),t});return(t,r)=>{const o=S;return m(),v("div",{class:h(["ratio",s.value])},[_("div",{class:"ratio-container",style:B(i.value)},[g(o,{class:"ratio-container-inner",justify:"center",align:"center"},{default:y(()=>[w(t.$slots,"default")]),_:3})],4)],2)}}});export{C as _};