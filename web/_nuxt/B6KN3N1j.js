import{d,h as c,f as s,g as a,k as r,aM as o,Y as n}from"./BZrGgrSf.js";const h={class:"pieLoader"},l=["width","height"],p=["stroke-dasharray"],k=d({__name:"PieLoader",props:{progress:{type:Number,default:0},size:{type:[String,Number],default:100},stroke:{type:[String,Number],default:2.8}},setup(e){const i=e,t=c(()=>({"stroke-width":i.stroke}));return(u,m)=>(s(),a("div",h,[(s(),a("svg",{width:e.size,height:e.size,viewBox:"0 0 36 36",class:"pieLoader-chart"},[r("path",{class:"pieLoader-chart-bg",style:o(n(t)),d:`M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831`},null,4),r("path",{class:"pieLoader-chart-stroke",style:o(n(t)),"stroke-dasharray":`${e.progress}, 100`,d:`M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831`},null,12,p)],8,l))]))}});export{k as _};
