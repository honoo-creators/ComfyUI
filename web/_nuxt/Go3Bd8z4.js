import{d as v,f as c,g as R,z as t,m as S,E as O,b as X,at as le,au as ce,x as w,h as b,w as e,Y as n,i as r,A as m,l as C,c as F,p as se,av as H,aw as j,_ as z,H as Z,t as x,a2 as Y,ax as ie,V as P,k as J,B as A,r as ee,U as $,D as U,a6 as te,G as M,F as G,a0 as ne,y as Q,j as V,I as re,o as ue,u as _e,a as de,n as fe,s as pe,C as me,ay as ge,a8 as he,az as ye,aA as be,aB as ke,aC as Se}from"./543exzgI.js";import{_ as Ae}from"./U6P34mNz.js";import{_ as Ie}from"./SP3M1n2i.js";const Te={class:"indicatorScroll"},Ne=v({__name:"IndicatorScroll",props:{h:{type:[Number,String],default:100},color:{type:String,default:"dark"}},setup(o){return(i,p)=>(c(),R("div",Te,[t(O,S({class:"indicatorScroll-bg"},{color:o.color}),null,16),t(O,S({class:"indicatorScroll-bar"},{h:o.h,color:o.color}),null,16)]))}}),K=110,Ce=v({__name:"TheTopHeader",props:{bg:{type:Boolean,default:!1}},setup(o){const{loggedIn:i}=X(),{face:p}=le(ce()),{isBaseScreenSizeAbove:_}=H(),f=o,l=w(!1),s=w(!1),a=w(!1),u=b(()=>({_bg:f.bg})),h=()=>{l.value=!0,a.value=!0,location.href=j().signup(j().loginRedirect())},g=()=>{s.value=!0,a.value=!0,location.href=j().login(j().loginRedirect())};return(k,d)=>{const I=Ae,y=O,D=z,T=Z,N=x,E=Y,W=ie,B=P;return c(),R("header",{class:se(["theTopHeader",n(u)])},[t(B,{wide:""},{default:e(()=>[t(N,{justify:"between",align:"center",nowrap:""},{default:e(()=>[t(y,{class:"theTopHeader-left",w:n(_)()?K:"100%"},{default:e(()=>[t(I,{size:"34",color:o.bg?"dark":"light"},null,8,["color"])]),_:1},8,["w"]),n(_)()?(c(),r(y,{key:0,class:"theTopHeader-center",w:"100%"},{default:e(()=>[t(N,{justify:"center",gap:"32",nowrap:""},{default:e(()=>[t(T,{to:"#solution"},{default:e(()=>[t(D,{body:"",bold:"",color:o.bg?"dark":"light"},{default:e(()=>d[0]||(d[0]=[m(" ソリューション ")])),_:1},8,["color"])]),_:1}),t(T,{to:"#pricing"},{default:e(()=>[t(D,{body:"",bold:"",color:o.bg?"dark":"light"},{default:e(()=>d[1]||(d[1]=[m(" 料金 ")])),_:1},8,["color"])]),_:1})]),_:1})]),_:1})):C("",!0),t(y,{class:"theTopHeader-right",w:n(_)()?K:"100%",ml:"auto"},{default:e(()=>[n(i)?(c(),r(N,{key:0,justify:"end",align:"center",gap:"20",nowrap:""},{default:e(()=>[t(E,{info:"",h:"100%",loading:n(s),disabled:n(a),to:("useConstantsPath"in k?k.useConstantsPath:n(F))().dashboard()},{default:e(()=>d[2]||(d[2]=[m(" 生成する ")])),_:1},8,["loading","disabled","to"]),t(y,{mt:"1"},{default:e(()=>[t(T,{to:("useConstantsPath"in k?k.useConstantsPath:n(F))().dashboard({showMenu:!0})},{default:e(()=>[t(W,{src:n(p),size:"28"},null,8,["src"])]),_:1},8,["to"])]),_:1})]),_:1})):(c(),r(N,{key:1,justify:"end",align:"center",gap:"0",nowrap:""},{default:e(()=>[t(y,{"min-w":"106",h:"32"},{default:e(()=>[t(E,{info:"",w:"100%",h:"100%",loading:n(s),disabled:n(a),onClick:g},{default:e(()=>d[3]||(d[3]=[m(" ログイン ")])),_:1},8,["loading","disabled"])]),_:1}),t(y,{"min-w":"120",h:"32"},{default:e(()=>[t(E,{rounded:"",w:"100%",h:"100%",loading:n(l),disabled:n(a),onClick:h},{default:e(()=>d[4]||(d[4]=[m(" アカウント作成 ")])),_:1},8,["loading","disabled"])]),_:1})]),_:1}))]),_:1},8,["w"])]),_:1})]),_:1})],2)}}}),Oe=160,ve=160,De=160,we=160,Ee=32,Re=32,L=v({__name:"Sentence",props:{subheadline:{type:String,default:""},headline:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"dark",validator:o=>["dark","light"].includes(o)}},setup(o){const i={fontSize:16},p={fontSize:14},_={fontSize:44,lineHeight:56/40},f={fontSize:32,lineHeight:44/32},l={fontSize:18,lineHeight:1.6},s={fontSize:16,lineHeight:1.6},{isBaseScreenSizeAbove:a}=H(),u=b(()=>a()?Oe:De),h=b(()=>a()?ve:we),g=b(()=>a()?Ee:Re),k=b(()=>a()?i:p),d=b(()=>a()?_:f),I=b(()=>a()?l:s);return(y,D)=>{const T=z,N=P,E=O,W=$;return c(),r(E,S({class:"sentence",w:"100%"},{pt:n(u),pb:n(h)}),{default:e(()=>[t(W,S({justify:"center",align:"center"},{gap:n(g)}),{default:e(()=>[o.subheadline?(c(),r(N,{key:0,full:n(a)()},{default:e(()=>[t(T,S({lead:"",extrabold:"",center:""},{...n(k)}),{default:e(()=>[J("mark",null,A(o.subheadline),1)]),_:1},16)]),_:1},8,["full"])):C("",!0),o.headline?(c(),r(N,{key:1,full:n(a)()},{default:e(()=>[t(E,{mt:"-8"},{default:e(()=>[t(T,S({extrabold:"",center:"",linebreak:""},{...n(d),color:o.color}),{default:e(()=>[m(A(o.headline),1)]),_:1},16)]),_:1})]),_:1},8,["full"])):C("",!0),o.content?(c(),r(N,{key:2,full:n(a)()},{default:e(()=>[t(T,S({lead:"",bold:"",center:"",linebreak:""},{...n(I),color:o.color}),{default:e(()=>[m(A(o.content),1)]),_:1},16)]),_:1},8,["full"])):C("",!0),t(E,{w:"100%",mt:"12"},{default:e(()=>[ee(y.$slots,"default")]),_:3})]),_:3},16)]),_:3},16)}}}),$e=""+new URL("main.D3t7aDJG.jpg",import.meta.url).href,ze=48,Be=48,He=56,xe=56,Pe=10,We=10,je=v({__name:"Solution",props:{icon:{type:String,default:""},headline:{type:String,default:""},content:{type:String,default:""}},setup(o){const i={fontSize:28,lineHeight:1.6},p={fontSize:24,lineHeight:1.6},_={fontSize:14,lineHeight:1.6},f={fontSize:13,lineHeight:1.6},{isBaseScreenSizeAbove:l}=H(),s=b(()=>l()?ze:He),a=b(()=>l()?Be:xe),u=b(()=>l()?Pe:We),h=b(()=>l()?i:p),g=b(()=>l()?_:f);return(k,d)=>{const I=U,y=z,D=O,T=P,N=$;return c(),r(D,S({class:"solution","max-w":"720",w:"100%",r:"24"},{pt:n(s),pb:n(a)}),{default:e(()=>[t(N,S({justify:"center",align:"center"},{gap:n(u)}),{default:e(()=>[o.icon?(c(),r(I,{key:0,name:o.icon,size:"40",color:"gradationHorizontal"},null,8,["name"])):C("",!0),o.headline?(c(),r(T,{key:1,full:n(l)()},{default:e(()=>[t(D,{mt:"2"},{default:e(()=>[t(y,S({extrabold:"",center:"",linebreak:""},{...n(h)}),{default:e(()=>[m(A(o.headline),1)]),_:1},16)]),_:1})]),_:1},8,["full"])):C("",!0),o.content?(c(),r(T,{key:2,full:n(l)()},{default:e(()=>[t(y,S({body:"",center:"",linebreak:""},{...n(g)}),{default:e(()=>[m(A(o.content),1)]),_:1},16)]),_:1},8,["full"])):C("",!0)]),_:1},16)]),_:1},16)}}}),Me=0,Ge=0,Le=0,qe=0,Ue=10,Fe=10,oe=v({__name:"Pricing",props:{icon:{type:String,default:""},headline:{type:String,default:""},content:{type:String,default:""}},setup(o){const i={fontSize:28,lineHeight:1.6},p={fontSize:24,lineHeight:1.6},_={fontSize:14,lineHeight:1.6},f={fontSize:13,lineHeight:1.6},{isBaseScreenSizeAbove:l}=H(),s=b(()=>l()?Me:Le),a=b(()=>l()?Ge:qe),u=b(()=>l()?Ue:Fe),h=b(()=>l()?i:p),g=b(()=>l()?_:f);return(k,d)=>{const I=U,y=z,D=O,T=P,N=$;return c(),r(D,S({class:"pricingTicket","max-w":"720",w:"100%",r:"24"},{pt:n(s),pb:n(a)}),{default:e(()=>[t(N,S({justify:"center",align:"center"},{gap:n(u)}),{default:e(()=>[o.icon?(c(),r(I,{key:0,name:o.icon,size:"40",color:"gradationHorizontal"},null,8,["name"])):C("",!0),o.headline?(c(),r(T,{key:1,full:n(l)()},{default:e(()=>[t(D,{mt:"2"},{default:e(()=>[t(y,S({extrabold:"",center:"",linebreak:""},{...n(h)}),{default:e(()=>[m(A(o.headline),1)]),_:1},16)]),_:1})]),_:1},8,["full"])):C("",!0),o.content?(c(),r(T,{key:2,full:n(l)()},{default:e(()=>[t(y,S({body:"",center:"",linebreak:""},{...n(g)}),{default:e(()=>[m(A(o.content),1)]),_:1},16)]),_:1},8,["full"])):C("",!0),ee(k.$slots,"default")]),_:3},16)]),_:3},16)}}}),q=4,Qe=v({__name:"Ticket",props:{count:{type:String,default:""},price:{type:String,default:""},caption:{type:String,default:""},active:{type:Boolean,default:!1}},setup(o){const i=w(!1);return(p,_)=>{const f=z,l=$,s=te,a=O;return c(),r(a,{class:"ticket",r:"24",pt:q,pb:q,pr:q,pl:q,color:o.active||n(i)?"gradationHorizontal":"light",animation:"",onMouseover:_[0]||(_[0]=u=>i.value=!0),onMouseleave:_[1]||(_[1]=u=>i.value=!1)},{default:e(()=>[t(a,{r:"20",color:"light"},{default:e(()=>[t(a,{r:"20",pt:"24",color:"dark03"},{default:e(()=>[t(l,{justify:"center",gap:"12"},{default:e(()=>[o.count?(c(),r(l,{key:0,justify:"center",gap:"6"},{default:e(()=>[t(f,{"font-size":"48",extrabold:"",center:"","baseline-height":"",unselectable:""},{default:e(()=>[m(A(o.count),1)]),_:1}),t(f,{caption1:"",extrabold:"",center:"","baseline-height":"",unselectable:""},{default:e(()=>_[2]||(_[2]=[m(" チケット ")])),_:1})]),_:1})):C("",!0),o.price?(c(),r(f,{key:1,extrabold:"",center:"",unselectable:""},{default:e(()=>[m(A(o.price),1)]),_:1})):C("",!0)]),_:1}),t(a,{w:"100%",h:"56"},{default:e(()=>[o.caption?(c(),r(s,{key:0},{default:e(()=>[t(f,{extrabold:"",center:"",unselectable:""},{default:e(()=>[J("mark",null,A(o.caption),1)]),_:1})]),_:1})):C("",!0)]),_:1})]),_:1})]),_:1})]),_:1},8,["color"])}}}),Ve=v({__name:"PricingTicket",setup(o){const i=w([{count:"10",price:"0円",caption:"初回限定",active:!0,first:!0},{count:"30",price:"15,000円",caption:"",active:!1,first:!1},{count:"50",price:"20,000円",caption:"5,000円お得",active:!1,first:!1},{count:"100",price:"30,000円",caption:"20,000円お得",active:!1,first:!1}]),p=b(()=>i.value.find(l=>l.active)),_=l=>{i.value=i.value.map((s,a)=>({...s,active:a===l}))},f=()=>{ne().open({name:"message",options:{title:"チケットプラン",content:"このプランは<br /><mark>まもなく登場予定</mark>です。",icon:"ticket",buttonName:"閉じる"}})};return(l,s)=>{const a=x,u=O,h=Y,g=P,k=$;return c(),r(oe,{class:"pricingTicket",icon:"ticket",headline:"必要な時に必要な分だけ利用するプラン"},{default:e(()=>[t(k,{justify:"center",align:"center",gap:"32"},{default:e(()=>[t(u,{w:"100%",mt:"8"},{default:e(()=>[t(a,{justify:"center",align:"stretch",gap:"12"},{default:e(()=>[(c(!0),R(G,null,M(n(i),(d,I)=>(c(),r(Qe,S({key:`ticket-${I}`,class:"pricingTicket-item",ref_for:!0},d,{onClick:y=>_(I)}),null,16,["onClick"]))),128))]),_:1})]),_:1}),t(g,{narrow:""},{default:e(()=>[t(h,{disabled:"",rounded:"",w:"100%",onDisabledClick:f},{default:e(()=>{var d,I;return[m(A((d=n(p))==null?void 0:d.price)+"で"+A((I=n(p))!=null&&I.first?"お試し":"")+"購入 ",1)]}),_:1})]),_:1})]),_:1})]),_:1})}}}),Ye="¥50,000",Je="〜/月",Ke=v({__name:"PricingEnterprise",setup(o){const i=["無制限に背景美術を生成可能","全ての機能をフルアクセス全ての機能をフルアクセス全ての機能をフルアクセス","専任のサポートチームが対応","カスタム機能の追加が可能カスタム機能の追加が可能カスタム機能の追加が可能"],p=()=>{ne().open({name:"message",options:{title:"ビジネスプラン",content:"このプランは<br /><mark>まもなく登場予定</mark>です。",icon:"building",buttonName:"閉じる"}})};return(_,f)=>{const l=z,s=O,a=x,u=U,h=$,g=Y;return c(),r(oe,{class:"pricingEnterprise",icon:"building",headline:"利用回数に応じた支払いプラン"},{default:e(()=>[t(s,{"max-w":"440",w:"100%",pt:"28",pb:"28",pr:"24",pl:"24",r:"24",mr:"auto",ml:"auto",color:"dark03"},{default:e(()=>[t(h,{justify:"center",align:"center",gap:"32"},{default:e(()=>[t(a,{justify:"center",align:"end",gap:"4"},{default:e(()=>[t(l,{"font-size":"48",extrabold:"","baseline-height":""},{default:e(()=>[m(A(Ye))]),_:1}),t(s,{pb:"3.2"},{default:e(()=>[t(l,{caption1:"",extrabold:"","baseline-height":""},{default:e(()=>[m(A(Je))]),_:1})]),_:1})]),_:1}),t(h,{tag:"ul",gap:"8"},{default:e(()=>[(c(),R(G,null,M(i,(k,d)=>t(a,{key:`pricingEnterprise-feature-${d}`,tag:"li",gap:"8",nowrap:""},{default:e(()=>[t(s,{pt:"4"},{default:e(()=>[t(u,{name:"check",size:"12",color:"primary"})]),_:1}),t(l,{caption1:""},{default:e(()=>[m(A(k),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),t(g,{disabled:"",rounded:"",w:"100%",onDisabledClick:p},{default:e(()=>f[0]||(f[0]=[m(" 営業担当に問い合わせる ")])),_:1})]),_:1})]),_:1})]),_:1})}}}),Xe={class:"faq"},Ze=v({__name:"FAQ",props:{q:{type:String,default:""},a:{type:String,default:""}},setup(o){const i=w(!1),p=w(0),_=()=>{i.value=!i.value};return(f,l)=>{const s=z,a=U,u=x,h=O,g=Ie,k=Q("resize");return c(),R("div",Xe,[t(u,{class:"faq-header",justify:"between",align:"center",gap:"8",onClick:_},{default:e(()=>[t(s,{class:"faq-header-txt",lead:"",bold:"",lineclamp:"1"},{default:e(()=>[m(A(o.q),1)]),_:1}),t(a,{class:"faq-header-icon",name:n(i)?"arrowUp":"arrowDown",size:"16"},null,8,["name"])]),_:1}),t(h,{h:n(p)},{default:e(()=>[t(g,null,{default:e(()=>[V((c(),r(h,{class:"faq-children"},{default:e(()=>[t(h,{h:"12"}),t(s,{body:"",normal:""},{default:e(()=>[m(A(o.a),1)]),_:1})]),_:1})),[[re,n(i)],[k,d=>p.value=d.height]])]),_:1})]),_:1},8,["h"])])}}}),et=v({__name:"MoreInformation",setup(o){const i=[{q:"使い方を覚えるのに時間がかかりますか？",a:"いいえ、時間はかかりません。直感的なインターフェースを採用しているため、専門知識がなくても簡単に操作できます。ワンクリックで高品質な背景を生成できるので、すぐに使いこなせるようになります。"},{q:"生成された背景の著作権は誰に帰属しますか？",a:"生成された背景の著作権は、サービスを利用したクリエイターに帰属します。AIが生成したコンテンツですが、クリエイターの創造的な入力に基づいて作成されるため、クリエイターが自由に使用・編集・商用利用することができます。"},{q:"カスタマイズは可能ですか？",a:"はい、可能です。各プロジェクトに合わせた設定を事前に行うことができ、最適な背景美術を提供します。さらに、生成後も必要に応じて調整や編集が可能なので、より細かなニーズにも対応できます。"},{q:"従来の制作方法と比べてどれくらい時間が短縮できますか？",a:"大幅な時間短縮が可能です。従来の手作業による背景制作と比べ、ワンクリックで50〜100点の多様な背景を自動生成できるため、制作時間を最大90%程度削減できる可能性があります。これにより、クリエイターはより創造的な作業に時間を割くことができます。"}];return(p,_)=>{const f=$,l=O;return c(),r(l,{class:"moreInformation","max-w":"720",w:"100%"},{default:e(()=>[t(f,{justify:"center",align:"center",gap:"44"},{default:e(()=>[(c(),R(G,null,M(i,(s,a)=>t(Ze,S({key:`faq-${a}`,class:"moreInformation-item",ref_for:!0},s),null,16)),64))]),_:1})]),_:1})}}}),tt={class:"footer-com"},nt=v({__name:"TheFooter",setup(o){const i=j(),{isBaseScreenSizeAbove:p}=H(),_=b(()=>[{name:"Honoo",path:"",url:i.HONOO},{name:"Terms of use",path:"",url:i.HONOO_TERMS_OF_USE},{name:"Privacy policy",path:"",url:i.HONOO_PRIVACY_POLICY},{name:"Company",path:"",url:""},{name:"Act on specified commercial transactions",path:"",url:i.HONOO_SPECIFIED_COMMERCIAL_TRANSACTIONS}]);return(f,l)=>{const s=z,a=Z,u=x,h=$;return c(),r(h,{tag:"footer",class:"footer",align:"center",justify:"center",gap:"18"},{default:e(()=>[t(u,{tag:"nav",class:"footer-policies",justify:"center",gap:n(p)()?[24,8]:[16,6]},{default:e(()=>[(c(!0),R(G,null,M(n(_),(g,k)=>(c(),r(a,{key:`tabmenu-${k}`,class:"footer-policies-item",to:g.path||g.url,blank:!!g.url},{default:e(()=>[t(s,{footnote:"",center:""},{default:e(()=>[m(A(g.name),1)]),_:2},1024)]),_:2},1032,["to","blank"]))),128))]),_:1},8,["gap"]),J("div",tt,[t(s,{footnote:"",center:"",color:"60"},{default:e(()=>l[0]||(l[0]=[m(" ©2024 Honoo - All rights reserved ")])),_:1})])]),_:1})}}}),ot={key:0,class:"pageIndex"},st=v({__name:"index",setup(o){const i=[{icon:"touch",headline:"ワンクリックで高品質な背景美術を生成",content:`AI技術を活用し、ボタン一つで
プロフェッショナルな背景美術を自動生成します。`},{icon:"equalizer",headline:"プロジェクト毎にカスタマイズされた設定",content:`各プロジェクトに合わせた設定を事前に行い、
最適な背景美術を提供します。`},{icon:"shine",headline:"50〜100点の多様な背景を自動生成",content:`一度の操作で50〜100点の異なる背景を生成し、
選択肢を広げます。`},{icon:"checkCircleLine",headline:"簡単な操作で専門知識不要",content:`直感的なインターフェースで、
専門知識がなくても簡単に操作できます。`}],p=w(0),_=w(!1),f=w(!0),l=b(()=>Se().design.page.spinner.size);return ue(async()=>{const{sns_id:s,access_token:a}=_e().query;if(s&&a)try{const{token:u}=await de().register.processGoogleAuth({snsId:s,token:a});await X().login(u),await fe(F().dashboard())}catch{return pe({statusCode:Number(me.BadRequest),statusMessage:"ログインに失敗しました。"})}await ge(),f.value=!1}),(s,a)=>{const u=O,h=he,g=te,k=Ne,d=x,I=$,y=P,D=ye,T=be,N=ke,E=Q("resize"),W=Q("intersect");return c(),r(N,null,{default:e(()=>[n(f)?(c(),r(u,{key:1,h:"100vh"},{default:e(()=>[t(g,null,{default:e(()=>[t(T,{size:n(l)},null,8,["size"])]),_:1})]),_:1})):(c(),R("div",ot,[t(u,{relative:""},{default:e(()=>[V((c(),r(u,{sticky:"",top:"0",w:"100%","z-index":"1"},{default:e(()=>[t(Ce,{bg:n(_)},null,8,["bg"])]),_:1})),[[E,B=>p.value=B.height]]),V((c(),r(u,{relative:"",w:"100vw",h:"100vh",mt:-n(p),mb:"80",onIntersect:a[0]||(a[0]=B=>_.value=!B.isIntersecting)},{default:e(()=>[t(u,{absolute:"",top:"0","z-index":"-1",w:"100%",h:"100%"},{default:e(()=>[t(h,{src:n($e),alt:"",cover:""},null,8,["src"])]),_:1}),t(g,null,{default:e(()=>[t(L,{color:"light",subheadline:"Let’s make YOUR ART",headline:"アニメ制作をもっと簡単に",content:`AI技術を活用して、背景美術制作の効率を飛躍的に向上させます。${("useMediaQuery"in s?s.useMediaQuery:n(H))().isBaseScreenSizeAbove()?`
`:""}ワンクリックで高品質な背景を生成し、${("useMediaQuery"in s?s.useMediaQuery:n(H))().isBaseScreenSizeAbove()?`
`:""}クリエイターがより自由に創作できる環境を提供します。`},null,8,["content"])]),_:1}),t(u,{absolute:"",bottom:"0",w:"100%","z-index":"1"},{default:e(()=>[t(d,{justify:"center"},{default:e(()=>[t(k,{h:"160",color:"light"})]),_:1})]),_:1})]),_:1},8,["mt"])),[[W,{threshold:0},void 0,{each:!0}]]),t(L,{id:"solution",subheadline:"What’s Honoo Technologies ?",headline:"AIで変える、アニメ制作の未来"},{default:e(()=>[t(y,{wide:""},{default:e(()=>[t(I,{justify:"center",gap:"40",fit:""},{default:e(()=>[(c(),R(G,null,M(i,(B,ae)=>t(je,S({key:`solution-${ae}`,ref_for:!0},B),null,16)),64))]),_:1})]),_:1})]),_:1}),t(L,{id:"pricing",subheadline:"Pricing",headline:"2つの料金プラン"},{default:e(()=>[t(y,{wide:""},{default:e(()=>[t(I,{justify:"center",gap:"64",fit:""},{default:e(()=>[t(Ve),t(y,null,{default:e(()=>[t(D)]),_:1}),t(Ke)]),_:1})]),_:1})]),_:1}),t(L,{subheadline:"More Infomation",headline:"もっと詳しく"},{default:e(()=>[t(y,null,{default:e(()=>[t(et)]),_:1})]),_:1}),t(u,{w:"100%",pt:"56",pb:"16"},{default:e(()=>[t(nt)]),_:1})]),_:1})]))]),_:1})}}});export{st as default};