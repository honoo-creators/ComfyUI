import{d,f as n,i as t,w as a,l as o,k as c,aN as u,D as m,_ as f,U as y}from"./DTE7kaSZ.js";const _=["innerHTML"],p=["innerHTML"],z=d({__name:"PageIntro",props:{spinner:{type:Boolean,default:!1},icon:{type:String,default:""},iconSize:{type:Number,default:40},title:{type:String,default:""},body:{type:String,default:""}},setup(e){return(g,b)=>{const s=u,l=m,i=f,r=y;return n(),t(r,{class:"pageIntro",justify:"center",gap:"24"},{default:a(()=>[e.spinner?(n(),t(s,{key:0,size:e.iconSize},null,8,["size"])):e.icon?(n(),t(l,{key:1,name:e.icon,size:e.iconSize},null,8,["name","size"])):o("",!0),e.title?(n(),t(i,{key:2,class:"pageIntro-title",title2:"",extrabold:"",center:""},{default:a(()=>[c("span",{innerHTML:e.title},null,8,_)]),_:1})):o("",!0),e.body?(n(),t(i,{key:3,class:"pageIntro-body",caption1:"",bold:"",center:""},{default:a(()=>[c("span",{innerHTML:e.body},null,8,p)]),_:1})):o("",!0)]),_:1})}}});export{z as _};