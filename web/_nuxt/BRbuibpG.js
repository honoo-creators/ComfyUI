import{d as v,g as s,f as R,h as t,m as S,_ as C,b as Z,i as se,j as ce,r as E,k as b,w as e,l as n,p as r,q as m,t as O,c as F,v as ie,x as B,y as L,z,A as ee,B as x,D as Y,E as re,F as P,G as J,H as I,I as K,J as $,K as U,L as te,M,N as j,O as ne,T as ue,P as oe,Q,R as V,S as _e,o as de,u as fe,a as pe,n as me,s as ge,C as he,U as ye,V as be,W as ke,X as Se,Y as Ie}from"./CdXuvUie.js";import{_ as Te}from"./CnNlR6Op.js";const Ae={class:"indicatorScroll"},Ne=v({__name:"IndicatorScroll",props:{h:{type:[Number,String],default:100},color:{type:String,default:"dark"}},setup(a){return(c,f)=>(s(),R("div",Ae,[t(C,S({class:"indicatorScroll-bg"},{color:a.color}),null,16),t(C,S({class:"indicatorScroll-bar"},{h:a.h,color:a.color}),null,16)]))}}),X=110,Oe=v({__name:"TheTopHeader",props:{bg:{type:Boolean,default:!1}},setup(a){const{loggedIn:c}=Z(),{face:f}=se(ce()),{isBaseScreenSizeAbove:u}=B(),d=a,o=E(!1),i=E(!1),l=E(!1),_=b(()=>({_bg:d.bg})),h=()=>{o.value=!0,l.value=!0,location.href=L().signup(L().LOGIN_REDIRECT_URL)},g=()=>{i.value=!0,l.value=!0,location.href=L().login(L().LOGIN_REDIRECT_URL)};return(k,p)=>{const T=Te,y=C,D=z,A=ee,N=x,w=Y,W=re,H=P;return s(),R("header",{class:ie(["theTopHeader",n(_)])},[t(H,{wide:""},{default:e(()=>[t(N,{justify:"between",align:"center",nowrap:""},{default:e(()=>[t(y,{class:"theTopHeader-left",w:n(u)()?X:"100%"},{default:e(()=>[t(T,{size:"34",color:a.bg?"dark":"light"},null,8,["color"])]),_:1},8,["w"]),n(u)()?(s(),r(y,{key:0,class:"theTopHeader-center",w:"100%"},{default:e(()=>[t(N,{justify:"center",gap:"32",nowrap:""},{default:e(()=>[t(A,{to:"#solution"},{default:e(()=>[t(D,{body:"",bold:"",color:a.bg?"dark":"light"},{default:e(()=>p[0]||(p[0]=[m(" ソリューション ")])),_:1},8,["color"])]),_:1}),t(A,{to:"#pricing"},{default:e(()=>[t(D,{body:"",bold:"",color:a.bg?"dark":"light"},{default:e(()=>p[1]||(p[1]=[m(" 料金 ")])),_:1},8,["color"])]),_:1})]),_:1})]),_:1})):O("",!0),t(y,{class:"theTopHeader-right",w:n(u)()?X:"100%",ml:"auto"},{default:e(()=>[n(c)?(s(),r(N,{key:0,justify:"end",align:"center",gap:"20",nowrap:""},{default:e(()=>[t(w,{info:"",h:"100%",loading:n(i),disabled:n(l),to:("useConstantsPath"in k?k.useConstantsPath:n(F))().dashboard()},{default:e(()=>p[2]||(p[2]=[m(" 生成する ")])),_:1},8,["loading","disabled","to"]),t(y,{mt:"1"},{default:e(()=>[t(A,{to:("useConstantsPath"in k?k.useConstantsPath:n(F))().dashboard({showMenu:!0})},{default:e(()=>[t(W,{src:n(f),size:"28"},null,8,["src"])]),_:1},8,["to"])]),_:1})]),_:1})):(s(),r(N,{key:1,justify:"end",align:"center",gap:"0",nowrap:""},{default:e(()=>[t(y,{"min-w":"106",h:"32"},{default:e(()=>[t(w,{info:"",w:"100%",h:"100%",loading:n(i),disabled:n(l),onClick:g},{default:e(()=>p[3]||(p[3]=[m(" ログイン ")])),_:1},8,["loading","disabled"])]),_:1}),t(y,{"min-w":"120",h:"32"},{default:e(()=>[t(w,{rounded:"",w:"100%",h:"100%",loading:n(o),disabled:n(l),onClick:h},{default:e(()=>p[4]||(p[4]=[m(" アカウント作成 ")])),_:1},8,["loading","disabled"])]),_:1})]),_:1}))]),_:1},8,["w"])]),_:1})]),_:1})],2)}}}),ve=160,Ce=160,De=160,Ee=160,we=32,Re=32,G=v({__name:"Sentence",props:{subheadline:{type:String,default:""},headline:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"dark",validator:a=>["dark","light"].includes(a)}},setup(a){const c={fontSize:16},f={fontSize:14},u={fontSize:44,lineHeight:56/40},d={fontSize:32,lineHeight:44/32},o={fontSize:18,lineHeight:1.6},i={fontSize:16,lineHeight:1.6},{isBaseScreenSizeAbove:l}=B(),_=b(()=>l()?ve:De),h=b(()=>l()?Ce:Ee),g=b(()=>l()?we:Re),k=b(()=>l()?c:f),p=b(()=>l()?u:d),T=b(()=>l()?o:i);return(y,D)=>{const A=z,N=P,w=C,W=$;return s(),r(w,S({class:"sentence",w:"100%"},{pt:n(_),pb:n(h)}),{default:e(()=>[t(W,S({justify:"center",align:"center"},{gap:n(g)}),{default:e(()=>[a.subheadline?(s(),r(N,{key:0,full:n(l)()},{default:e(()=>[t(A,S({lead:"",extrabold:"",center:""},{...n(k)}),{default:e(()=>[J("mark",null,I(a.subheadline),1)]),_:1},16)]),_:1},8,["full"])):O("",!0),a.headline?(s(),r(N,{key:1,full:n(l)()},{default:e(()=>[t(w,{mt:"-8"},{default:e(()=>[t(A,S({extrabold:"",center:"",linebreak:""},{...n(p),color:a.color}),{default:e(()=>[m(I(a.headline),1)]),_:1},16)]),_:1})]),_:1},8,["full"])):O("",!0),a.content?(s(),r(N,{key:2,full:n(l)()},{default:e(()=>[t(A,S({lead:"",bold:"",center:"",linebreak:""},{...n(T),color:a.color}),{default:e(()=>[m(I(a.content),1)]),_:1},16)]),_:1},8,["full"])):O("",!0),t(w,{w:"100%",mt:"12"},{default:e(()=>[K(y.$slots,"default")]),_:3})]),_:3},16)]),_:3},16)}}}),$e=""+new URL("main.D3t7aDJG.jpg",import.meta.url).href,ze=48,He=48,Be=56,xe=56,Pe=10,We=10,Le=v({__name:"Solution",props:{icon:{type:String,default:""},headline:{type:String,default:""},content:{type:String,default:""}},setup(a){const c={fontSize:28,lineHeight:1.6},f={fontSize:24,lineHeight:1.6},u={fontSize:14,lineHeight:1.6},d={fontSize:13,lineHeight:1.6},{isBaseScreenSizeAbove:o}=B(),i=b(()=>o()?ze:Be),l=b(()=>o()?He:xe),_=b(()=>o()?Pe:We),h=b(()=>o()?c:f),g=b(()=>o()?u:d);return(k,p)=>{const T=U,y=z,D=C,A=P,N=$;return s(),r(D,S({class:"solution","max-w":"720",w:"100%",r:"24"},{pt:n(i),pb:n(l)}),{default:e(()=>[t(N,S({justify:"center",align:"center"},{gap:n(_)}),{default:e(()=>[a.icon?(s(),r(T,{key:0,name:a.icon,size:"40",color:"gradationHorizontal"},null,8,["name"])):O("",!0),a.headline?(s(),r(A,{key:1,full:n(o)()},{default:e(()=>[t(D,{mt:"2"},{default:e(()=>[t(y,S({extrabold:"",center:"",linebreak:""},{...n(h)}),{default:e(()=>[m(I(a.headline),1)]),_:1},16)]),_:1})]),_:1},8,["full"])):O("",!0),a.content?(s(),r(A,{key:2,full:n(o)()},{default:e(()=>[t(y,S({body:"",center:"",linebreak:""},{...n(g)}),{default:e(()=>[m(I(a.content),1)]),_:1},16)]),_:1},8,["full"])):O("",!0)]),_:1},16)]),_:1},16)}}}),Me=0,je=0,Ge=0,qe=0,Ue=10,Fe=10,ae=v({__name:"Pricing",props:{icon:{type:String,default:""},headline:{type:String,default:""},content:{type:String,default:""}},setup(a){const c={fontSize:28,lineHeight:1.6},f={fontSize:24,lineHeight:1.6},u={fontSize:14,lineHeight:1.6},d={fontSize:13,lineHeight:1.6},{isBaseScreenSizeAbove:o}=B(),i=b(()=>o()?Me:Ge),l=b(()=>o()?je:qe),_=b(()=>o()?Ue:Fe),h=b(()=>o()?c:f),g=b(()=>o()?u:d);return(k,p)=>{const T=U,y=z,D=C,A=P,N=$;return s(),r(D,S({class:"pricingTicket","max-w":"720",w:"100%",r:"24"},{pt:n(i),pb:n(l)}),{default:e(()=>[t(N,S({justify:"center",align:"center"},{gap:n(_)}),{default:e(()=>[a.icon?(s(),r(T,{key:0,name:a.icon,size:"40",color:"gradationHorizontal"},null,8,["name"])):O("",!0),a.headline?(s(),r(A,{key:1,full:n(o)()},{default:e(()=>[t(D,{mt:"2"},{default:e(()=>[t(y,S({extrabold:"",center:"",linebreak:""},{...n(h)}),{default:e(()=>[m(I(a.headline),1)]),_:1},16)]),_:1})]),_:1},8,["full"])):O("",!0),a.content?(s(),r(A,{key:2,full:n(o)()},{default:e(()=>[t(y,S({body:"",center:"",linebreak:""},{...n(g)}),{default:e(()=>[m(I(a.content),1)]),_:1},16)]),_:1},8,["full"])):O("",!0),K(k.$slots,"default")]),_:3},16)]),_:3},16)}}}),q=4,Qe=v({__name:"Ticket",props:{count:{type:String,default:""},price:{type:String,default:""},caption:{type:String,default:""},active:{type:Boolean,default:!1}},setup(a){const c=E(!1);return(f,u)=>{const d=z,o=$,i=te,l=C;return s(),r(l,{class:"ticket",r:"24",pt:q,pb:q,pr:q,pl:q,color:a.active||n(c)?"gradationHorizontal":"light",animation:"",onMouseover:u[0]||(u[0]=_=>c.value=!0),onMouseleave:u[1]||(u[1]=_=>c.value=!1)},{default:e(()=>[t(l,{r:"20",color:"light"},{default:e(()=>[t(l,{r:"20",pt:"24",color:"dark03"},{default:e(()=>[t(o,{justify:"center",gap:"12"},{default:e(()=>[a.count?(s(),r(o,{key:0,justify:"center",gap:"6"},{default:e(()=>[t(d,{"font-size":"48",extrabold:"",center:"","baseline-height":"",unselectable:""},{default:e(()=>[m(I(a.count),1)]),_:1}),t(d,{caption1:"",extrabold:"",center:"","baseline-height":"",unselectable:""},{default:e(()=>u[2]||(u[2]=[m(" チケット ")])),_:1})]),_:1})):O("",!0),a.price?(s(),r(d,{key:1,extrabold:"",center:"",unselectable:""},{default:e(()=>[m(I(a.price),1)]),_:1})):O("",!0)]),_:1}),t(l,{w:"100%",h:"56"},{default:e(()=>[a.caption?(s(),r(i,{key:0},{default:e(()=>[t(d,{extrabold:"",center:"",unselectable:""},{default:e(()=>[J("mark",null,I(a.caption),1)]),_:1})]),_:1})):O("",!0)]),_:1})]),_:1})]),_:1})]),_:1},8,["color"])}}}),Ve=v({__name:"PricingTicket",setup(a){const c=E([{count:"10",price:"0円",caption:"初回限定",active:!0,first:!0},{count:"30",price:"15,000円",caption:"",active:!1,first:!1},{count:"50",price:"20,000円",caption:"5,000円お得",active:!1,first:!1},{count:"100",price:"30,000円",caption:"20,000円お得",active:!1,first:!1}]),f=b(()=>c.value.find(o=>o.active)),u=o=>{c.value=c.value.map((i,l)=>({...i,active:l===o}))},d=()=>{ne().open({name:"message",options:{title:"チケットプラン",content:"このプランは<br /><mark>まもなく登場予定</mark>です。",icon:"ticket",buttonName:"閉じる"}})};return(o,i)=>{const l=x,_=C,h=Y,g=P,k=$;return s(),r(ae,{class:"pricingTicket",icon:"ticket",headline:"必要な時に必要な分だけ利用するプラン"},{default:e(()=>[t(k,{justify:"center",align:"center",gap:"32"},{default:e(()=>[t(_,{w:"100%",mt:"8"},{default:e(()=>[t(l,{justify:"center",align:"stretch",gap:"12"},{default:e(()=>[(s(!0),R(j,null,M(n(c),(p,T)=>(s(),r(Qe,S({key:`ticket-${T}`,class:"pricingTicket-item",ref_for:!0},p,{onClick:y=>u(T)}),null,16,["onClick"]))),128))]),_:1})]),_:1}),t(g,{narrow:""},{default:e(()=>[t(h,{disabled:"",rounded:"",w:"100%",onDisabledClick:d},{default:e(()=>{var p,T;return[m(I((p=n(f))==null?void 0:p.price)+"で"+I((T=n(f))!=null&&T.first?"お試し":"")+"購入 ",1)]}),_:1})]),_:1})]),_:1})]),_:1})}}}),Ye="¥50,000",Je="〜/月",Ke=v({__name:"PricingEnterprise",setup(a){const c=["無制限に背景美術を生成可能","全ての機能をフルアクセス全ての機能をフルアクセス全ての機能をフルアクセス","専任のサポートチームが対応","カスタム機能の追加が可能カスタム機能の追加が可能カスタム機能の追加が可能"],f=()=>{ne().open({name:"message",options:{title:"ビジネスプラン",content:"このプランは<br /><mark>まもなく登場予定</mark>です。",icon:"building",buttonName:"閉じる"}})};return(u,d)=>{const o=z,i=C,l=x,_=U,h=$,g=Y;return s(),r(ae,{class:"pricingEnterprise",icon:"building",headline:"利用回数に応じた支払いプラン"},{default:e(()=>[t(i,{"max-w":"440",w:"100%",pt:"28",pb:"28",pr:"24",pl:"24",r:"24",mr:"auto",ml:"auto",color:"dark03"},{default:e(()=>[t(h,{justify:"center",align:"center",gap:"32"},{default:e(()=>[t(l,{justify:"center",align:"end",gap:"4"},{default:e(()=>[t(o,{"font-size":"48",extrabold:"","baseline-height":""},{default:e(()=>[m(I(Ye))]),_:1}),t(i,{pb:"3.2"},{default:e(()=>[t(o,{caption1:"",extrabold:"","baseline-height":""},{default:e(()=>[m(I(Je))]),_:1})]),_:1})]),_:1}),t(h,{tag:"ul",gap:"8"},{default:e(()=>[(s(),R(j,null,M(c,(k,p)=>t(l,{key:`pricingEnterprise-feature-${p}`,tag:"li",gap:"8",nowrap:""},{default:e(()=>[t(i,{pt:"4"},{default:e(()=>[t(_,{name:"check",size:"12",color:"primary"})]),_:1}),t(o,{caption1:""},{default:e(()=>[m(I(k),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),t(g,{disabled:"",rounded:"",w:"100%",onDisabledClick:f},{default:e(()=>d[0]||(d[0]=[m(" 営業担当に問い合わせる ")])),_:1})]),_:1})]),_:1})]),_:1})}}}),Xe=v({__name:"TransitionAcordion",setup(a){const c=o=>{o.style.height="0"},f=o=>{o.style.height=o.scrollHeight+"px"},u=o=>{o.style.height=o.scrollHeight+"px"},d=o=>{o.style.height="0"};return(o,i)=>{const l=oe;return s(),r(l,null,{default:e(()=>[t(ue,{name:"accordion",onBeforeEnter:c,onEnter:f,onBeforeLeave:u,onLeave:d},{default:e(()=>[K(o.$slots,"default")]),_:3})]),_:3})}}}),Ze={class:"faq"},et=v({__name:"FAQ",props:{q:{type:String,default:""},a:{type:String,default:""}},setup(a){const c=E(!1),f=E(0),u=()=>{c.value=!c.value};return(d,o)=>{const i=z,l=U,_=x,h=C,g=Xe,k=Q("resize");return s(),R("div",Ze,[t(_,{class:"faq-header",justify:"between",align:"center",gap:"8",onClick:u},{default:e(()=>[t(i,{class:"faq-header-txt",lead:"",bold:"",lineclamp:"1"},{default:e(()=>[m(I(a.q),1)]),_:1}),t(l,{class:"faq-header-icon",name:n(c)?"arrowUp":"arrowDown",size:"16"},null,8,["name"])]),_:1}),t(h,{h:n(f)},{default:e(()=>[t(g,null,{default:e(()=>[V((s(),r(h,{class:"faq-children"},{default:e(()=>[t(h,{h:"12"}),t(i,{body:"",normal:""},{default:e(()=>[m(I(a.a),1)]),_:1})]),_:1})),[[_e,n(c)],[k,p=>f.value=p.height]])]),_:1})]),_:1},8,["h"])])}}}),tt=v({__name:"MoreInformation",setup(a){const c=[{q:"使い方を覚えるのに時間がかかりますか？",a:"いいえ、時間はかかりません。直感的なインターフェースを採用しているため、専門知識がなくても簡単に操作できます。ワンクリックで高品質な背景を生成できるので、すぐに使いこなせるようになります。"},{q:"生成された背景の著作権は誰に帰属しますか？",a:"生成された背景の著作権は、サービスを利用したクリエイターに帰属します。AIが生成したコンテンツですが、クリエイターの創造的な入力に基づいて作成されるため、クリエイターが自由に使用・編集・商用利用することができます。"},{q:"カスタマイズは可能ですか？",a:"はい、可能です。各プロジェクトに合わせた設定を事前に行うことができ、最適な背景美術を提供します。さらに、生成後も必要に応じて調整や編集が可能なので、より細かなニーズにも対応できます。"},{q:"従来の制作方法と比べてどれくらい時間が短縮できますか？",a:"大幅な時間短縮が可能です。従来の手作業による背景制作と比べ、ワンクリックで50〜100点の多様な背景を自動生成できるため、制作時間を最大90%程度削減できる可能性があります。これにより、クリエイターはより創造的な作業に時間を割くことができます。"}];return(f,u)=>{const d=$,o=C;return s(),r(o,{class:"moreInformation","max-w":"720",w:"100%"},{default:e(()=>[t(d,{justify:"center",align:"center",gap:"44"},{default:e(()=>[(s(),R(j,null,M(c,(i,l)=>t(et,S({key:`faq-${l}`,class:"moreInformation-item",ref_for:!0},i),null,16)),64))]),_:1})]),_:1})}}}),nt={class:"footer-com"},ot=v({__name:"TheFooter",setup(a){const c=L(),{isBaseScreenSizeAbove:f}=B(),u=b(()=>[{name:"Honoo",path:"",url:c.HONOO},{name:"Terms of use",path:"",url:c.HONOO_TERMS_OF_USE},{name:"Privacy policy",path:"",url:c.HONOO_PRIVACY_POLICY},{name:"Company",path:"",url:""},{name:"Act on specified commercial transactions",path:"",url:c.HONOO_SPECIFIED_COMMERCIAL_TRANSACTIONS}]);return(d,o)=>{const i=z,l=ee,_=x,h=$;return s(),r(h,{tag:"footer",class:"footer",align:"center",justify:"center",gap:"18"},{default:e(()=>[t(_,{tag:"nav",class:"footer-policies",justify:"center",gap:n(f)()?[24,8]:[16,6]},{default:e(()=>[(s(!0),R(j,null,M(n(u),(g,k)=>(s(),r(l,{key:`tabmenu-${k}`,class:"footer-policies-item",to:g.path||g.url,blank:!!g.url},{default:e(()=>[t(i,{footnote:"",center:""},{default:e(()=>[m(I(g.name),1)]),_:2},1024)]),_:2},1032,["to","blank"]))),128))]),_:1},8,["gap"]),J("div",nt,[t(i,{footnote:"",center:"",color:"60"},{default:e(()=>o[0]||(o[0]=[m(" ©2024 Honoo - All rights reserved ")])),_:1})])]),_:1})}}}),at={key:0,class:"pageIndex"},ct=v({__name:"index",setup(a){const c=[{icon:"touch",headline:"ワンクリックで高品質な背景美術を生成",content:`AI技術を活用し、ボタン一つで
プロフェッショナルな背景美術を自動生成します。`},{icon:"equalizer",headline:"プロジェクト毎にカスタマイズされた設定",content:`各プロジェクトに合わせた設定を事前に行い、
最適な背景美術を提供します。`},{icon:"shine",headline:"50〜100点の多様な背景を自動生成",content:`一度の操作で50〜100点の異なる背景を生成し、
選択肢を広げます。`},{icon:"checkCircleLine",headline:"簡単な操作で専門知識不要",content:`直感的なインターフェースで、
専門知識がなくても簡単に操作できます。`}],f=E(0),u=E(!1),d=E(!0),o=b(()=>be().design.page.spinner.size);return de(async()=>{const{sns_id:i,access_token:l}=fe().query;if(i&&l)try{const{token:_}=await pe().register.processGoogleAuth({snsId:i,token:l});await Z().login(_),await me(F().dashboard())}catch{return ge({statusCode:Number(he.BadRequest),statusMessage:"ログインに失敗しました。"})}await ye(),d.value=!1}),(i,l)=>{const _=C,h=ke,g=te,k=Ne,p=x,T=$,y=P,D=Se,A=Ie,N=oe,w=Q("resize"),W=Q("intersect");return s(),r(N,null,{default:e(()=>[n(d)?(s(),r(_,{key:1,h:"100vh"},{default:e(()=>[t(g,null,{default:e(()=>[t(A,{size:n(o)},null,8,["size"])]),_:1})]),_:1})):(s(),R("div",at,[t(_,{relative:""},{default:e(()=>[V((s(),r(_,{sticky:"",top:"0",w:"100%","z-index":"1"},{default:e(()=>[t(Oe,{bg:n(u)},null,8,["bg"])]),_:1})),[[w,H=>f.value=H.height]]),V((s(),r(_,{relative:"",w:"100vw",h:"100vh",mt:-n(f),mb:"80",onIntersect:l[0]||(l[0]=H=>u.value=!H.isIntersecting)},{default:e(()=>[t(_,{absolute:"",top:"0","z-index":"-1",w:"100%",h:"100%"},{default:e(()=>[t(h,{src:n($e),alt:"",cover:""},null,8,["src"])]),_:1}),t(g,null,{default:e(()=>[t(G,{color:"light",subheadline:"Let’s make YOUR ART",headline:"アニメ制作をもっと簡単に",content:`AI技術を活用して、背景美術制作の効率を飛躍的に向上させます。${("useMediaQuery"in i?i.useMediaQuery:n(B))().isBaseScreenSizeAbove()?`
`:""}ワンクリックで高品質な背景を生成し、${("useMediaQuery"in i?i.useMediaQuery:n(B))().isBaseScreenSizeAbove()?`
`:""}クリエイターがより自由に創作できる環境を提供します。`},null,8,["content"])]),_:1}),t(_,{absolute:"",bottom:"0",w:"100%","z-index":"1"},{default:e(()=>[t(p,{justify:"center"},{default:e(()=>[t(k,{h:"160",color:"light"})]),_:1})]),_:1})]),_:1},8,["mt"])),[[W,{threshold:0},void 0,{each:!0}]]),t(G,{id:"solution",subheadline:"What’s Honoo Technologies ?",headline:"AIで変える、アニメ制作の未来"},{default:e(()=>[t(y,{wide:""},{default:e(()=>[t(T,{justify:"center",gap:"40",fit:""},{default:e(()=>[(s(),R(j,null,M(c,(H,le)=>t(Le,S({key:`solution-${le}`,ref_for:!0},H),null,16)),64))]),_:1})]),_:1})]),_:1}),t(G,{id:"pricing",subheadline:"Pricing",headline:"2つの料金プラン"},{default:e(()=>[t(y,{wide:""},{default:e(()=>[t(T,{justify:"center",gap:"64",fit:""},{default:e(()=>[t(Ve),t(y,null,{default:e(()=>[t(D)]),_:1}),t(Ke)]),_:1})]),_:1})]),_:1}),t(G,{subheadline:"More Infomation",headline:"もっと詳しく"},{default:e(()=>[t(y,null,{default:e(()=>[t(tt)]),_:1})]),_:1}),t(_,{w:"100%",pt:"56",pb:"16"},{default:e(()=>[t(ot)]),_:1})]),_:1})]))]),_:1})}}});export{ct as default};