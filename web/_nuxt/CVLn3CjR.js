import{d as T,x as o,h as p,P as L,o as C,ay as O,y as U,f,g as y,j as A,aN as F,k as g,m as R,i as K,w as P,B as j,l as h,_ as z,p as H,aO as W}from"./543exzgI.js";const Y=["autocomplete","maxlength"],_={class:"input-label-inner"},G={key:0,class:"input-label-required"},b="update:modelValue",J="enter-key-down",x="valid",S="invalid",E="focus",M="blur",X=T({__name:"Input",props:{name:{type:String,default:"field",required:!0},type:{type:String,default:"text"},label:{type:String,default:""},placeholder:{type:String,default:""},modelValue:{type:String,default:"",required:!0},autocomplete:{type:Boolean,default:!1},pattern:{type:String},patternMismatchMessage:{type:String,default:"入力形式が正しくありません。"},maxlength:{type:[Number,String]},limitlength:{type:[Number,String]},required:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},noSpin:{type:Boolean,default:!1},validation:{type:String,default:"blur",validator:t=>["always","blur"].includes(t)}},emits:{[b]:t=>!0,[J]:()=>!0,[x]:()=>!0,[S]:t=>!0,[E]:()=>!0,[M]:()=>!0},setup(t,{emit:B}){const{noOnlySpace:I}=W(),e=t,s=B,i=o("idle"),w=o(null),d=o(e.focus),m=o(!1),v=`input-${e.name}`,r=o(""),V=p(()=>({[`_${i.value}`]:!0,_focus:d.value,_input:l.value.length,_readonly:e.readonly,_noLabel:!e.label,_disabled:e.disabled,_noSpin:e.noSpin})),l=p({get:()=>e.modelValue,set:a=>{s(b,a)}});L(()=>e.modelValue,()=>{(e.validation==="always"||r.value)&&u()});const $=()=>{},k=()=>{},q=()=>{d.value=!0,s(E)},D=()=>{e.validation==="blur"&&u(),d.value=!1,s(M)},u=()=>{let a="";l.value===""&&e.required&&(a=`${e.label?`${e.label}を`:`${e.placeholder}を`}入力してください。`),!a&&e.maxlength&&l.value.length>Number.parseInt(String(e.maxlength))&&(a=`${e.maxlength}文字以内で入力してください。現在${l.value.length}文字です。`),!a&&l.value!==""&&l.value.match(I)&&(a="空白のみの入力はできません。"),!a&&e.pattern&&!new RegExp(e.pattern).test(l.value)&&(a=e.patternMismatchMessage),l.value===""&&!e.required&&(a=""),a?(i.value="invalid",s(S,a),r.value=a):(i.value="valid",s(x),r.value="")};return C(async()=>{await O(),l.value&&u()}),(a,n)=>{const N=U("focus");return f(),y("div",{class:H(["input",V.value])},[A(g("input",R({id:v,ref_key:"fieldEl",ref:w,"onUpdate:modelValue":n[0]||(n[0]=c=>l.value=c),class:"input-field"},{type:t.type,name:t.name,placeholder:t.placeholder,required:t.required,readonly:t.readonly,disabled:t.disabled,autocomplete:t.autocomplete,pattern:t.pattern,maxlength:t.maxlength},{autocomplete:t.autocomplete?"on":"off",maxlength:t.limitlength,onInput:$,onKeydown:k,onFocus:q,onBlur:D,onMouseover:n[1]||(n[1]=c=>m.value=!0),onMouseleave:n[2]||(n[2]=c=>m.value=!1)}),null,16,Y),[[F,l.value],[N,t.focus]]),t.label?(f(),K(z,{key:0,tag:"label",for:v,class:"input-label"},{default:P(()=>[g("span",_,j(t.label),1),t.required?(f(),y("span",G,"*")):h("",!0)]),_:1})):h("",!0)],2)}}});export{X as _};