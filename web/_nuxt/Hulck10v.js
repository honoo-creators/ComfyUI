import{d as x,x as u,h as b,P as F,f as o,g as r,j as C,ah as D,k as g,F as M,G as N,B as S,m as z,i as k,w as L,l as m,_ as P,D as j,p as A}from"./CgPfrX_a.js";const E=["value","disabled"],G={class:"select-label-inner"},H={key:0,class:"select-label-required"},U=x({__name:"Select",props:{modelValue:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},placeholder:{type:String,default:""},description:{type:String,default:""},fail:{type:String,default:""},autocomplete:{type:String,default:"off"},caption:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},options:{type:Array,default:()=>[]}},emits:["update:modelValue","enter-key-down","valid","invalid","focus","blur"],setup(l,{emit:B}){const t=l,d=u(null),c=`input-${t.name}`,p=u(""),f=u(!0),n=B,v=u(!1),y=u(!1),i=b({get:()=>t.modelValue,set:s=>{n("update:modelValue",s),n(s?"valid":"invalid")}}),h=b(()=>({_focus:v.value,_input:i.value.length,_readonly:t.readonly,_noLabel:!t.label,_disabled:t.disabled,_invalid:f.value===!1}));F(()=>t.focus,(s,a)=>{d.value&&(s?d.value.focus():d.value.blur())});const V=()=>{v.value=!0,n("focus")},w=()=>{t.required&&i.value.length===0?(p.value="選択してください",f.value=!1):(p.value="",f.value=!0),v.value=!1,n("blur")},$=(s,a)=>{let e=a;return e||(e=s),e};return(s,a)=>(o(),r("div",{class:A(["select",h.value])},[C(g("select",z({id:c,ref_key:"field",ref:d,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),class:"select-field"},{name:l.name,placeholder:l.placeholder,required:l.required,disabled:l.disabled,autocomplete:l.autocomplete},{onFocus:V,onBlur:w,onMouseover:a[1]||(a[1]=e=>y.value=!0),onMouseleave:a[2]||(a[2]=e=>y.value=!1)}),[(o(!0),r(M,null,N(l.options,(e,q)=>(o(),r("option",{key:`option-${c}-${q}`,value:e.value,disabled:!e.value||e.disabled},S($(e.value,e.name)),9,E))),128))],16),[[D,i.value]]),l.label?(o(),k(P,{key:0,tag:"label",for:c,class:"select-label"},{default:L(()=>[g("span",G,S(l.label),1),l.required?(o(),r("span",H,"*")):m("",!0)]),_:1})):m("",!0),l.disabled?m("",!0):(o(),k(j,{key:1,class:"select-icon",name:"arrowDown",size:"12"}))],2))}});export{U as _};