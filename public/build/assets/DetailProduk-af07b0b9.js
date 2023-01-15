import{r as f,a as o,j as d,H as O}from"./app-f5a35749.js";import{g as x,a as w,s as v,P as q,u as S,_ as A,b as c,c as N,d as $,T as m,e as B,r as U,i as E,f as L,h as G,I as k,j as W,k as J,C as K}from"./MoreVert-4091ed50.js";import{A as Q}from"./AuthenticatedLayout-cce9a80c.js";import"./ApplicationLogo-e8f394f8.js";import"./transition-a799b737.js";function V(e){return x("MuiCard",e)}w("MuiCard",["root"]);const X=["className","raised"],Y=e=>{const{classes:t}=e;return $({root:["root"]},V,t)},Z=v(q,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),ee=f.forwardRef(function(t,r){const a=S({props:t,name:"MuiCard"}),{className:i,raised:n=!1}=a,l=A(a,X),s=c({},a,{raised:n}),u=Y(s);return o(Z,c({className:N(u.root,i),elevation:n?8:void 0,ref:r,ownerState:s},l))}),te=ee;function ae(e){return x("MuiCardHeader",e)}const re=w("MuiCardHeader",["root","avatar","action","content","title","subheader"]),j=re,oe=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],se=e=>{const{classes:t}=e;return $({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},ae,t)},ne=v("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>c({[`& .${j.title}`]:t.title,[`& .${j.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),ie=v("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),ce=v("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),le=v("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),de=f.forwardRef(function(t,r){const a=S({props:t,name:"MuiCardHeader"}),{action:i,avatar:n,className:l,component:s="div",disableTypography:u=!1,subheader:M,subheaderTypographyProps:y,title:g,titleTypographyProps:_}=a,R=A(a,oe),p=c({},a,{component:s,disableTypography:u}),h=se(p);let C=g;C!=null&&C.type!==m&&!u&&(C=o(m,c({variant:n?"body2":"h5",className:h.title,component:"span",display:"block"},_,{children:C})));let b=M;return b!=null&&b.type!==m&&!u&&(b=o(m,c({variant:n?"body2":"body1",className:h.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:b}))),d(ne,c({className:N(h.root,l),as:s,ref:r,ownerState:p},R,{children:[n&&o(ie,{className:h.avatar,ownerState:p,children:n}),d(le,{className:h.content,ownerState:p,children:[C,b]}),i&&o(ce,{className:h.action,ownerState:p,children:i})]}))}),ue=de;function me(e){return x("MuiCardMedia",e)}w("MuiCardMedia",["root","media","img"]);const pe=["children","className","component","image","src","style"],ve=e=>{const{classes:t,isMediaComponent:r,isImageComponent:a}=e;return $({root:["root",r&&"media",a&&"img"]},me,t)},fe=v("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{isMediaComponent:a,isImageComponent:i}=r;return[t.root,a&&t.media,i&&t.img]}})(({ownerState:e})=>c({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),ge=["video","audio","picture","iframe","img"],he=["picture","img"],Ce=f.forwardRef(function(t,r){const a=S({props:t,name:"MuiCardMedia"}),{children:i,className:n,component:l="div",image:s,src:u,style:M}=a,y=A(a,pe),g=ge.indexOf(l)!==-1,_=!g&&s?c({backgroundImage:`url("${s}")`},M):M,R=c({},a,{component:l,isMediaComponent:g,isImageComponent:he.indexOf(l)!==-1}),p=ve(R);return o(fe,c({className:N(p.root,n),as:l,role:!g&&s?"img":void 0,ref:r,style:_,ownerState:R,src:g?s||u:void 0},y,{children:i}))}),be=Ce;function ye(e){return x("MuiCardContent",e)}w("MuiCardContent",["root"]);const Me=["className","component"],Re=e=>{const{classes:t}=e;return $({root:["root"]},ye,t)},xe=v("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),we=f.forwardRef(function(t,r){const a=S({props:t,name:"MuiCardContent"}),{className:i,component:n="div"}=a,l=A(a,Me),s=c({},a,{component:n}),u=Re(s);return o(xe,c({as:n,className:N(u.root,i),ownerState:s,ref:r},l))}),T=we;function Se(e){return x("MuiCardActions",e)}w("MuiCardActions",["root","spacing"]);const Ae=["disableSpacing","className"],Ne=e=>{const{classes:t,disableSpacing:r}=e;return $({root:["root",!r&&"spacing"]},Se,t)},$e=v("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:e})=>c({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),_e=f.forwardRef(function(t,r){const a=S({props:t,name:"MuiCardActions"}),{disableSpacing:i=!1,className:n}=a,l=A(a,Ae),s=c({},a,{disableSpacing:i}),u=Ne(s);return o($e,c({className:N(u.root,n),ownerState:s,ref:r},l))}),ke=_e,Ie=B(o("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Pe(e){return x("MuiAvatar",e)}w("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const He=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],De=e=>{const{classes:t,variant:r,colorDefault:a}=e;return $({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},Pe,t)},je=v("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>c({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.variant==="square"&&{borderRadius:0},t.colorDefault&&c({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),Te=v("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Ue=v(Ie,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function Ee({crossOrigin:e,referrerPolicy:t,src:r,srcSet:a}){const[i,n]=f.useState(!1);return f.useEffect(()=>{if(!r&&!a)return;n(!1);let l=!0;const s=new Image;return s.onload=()=>{l&&n("loaded")},s.onerror=()=>{l&&n("error")},s.crossOrigin=e,s.referrerPolicy=t,s.src=r,a&&(s.srcset=a),()=>{l=!1}},[e,t,r,a]),i}const Le=f.forwardRef(function(t,r){const a=S({props:t,name:"MuiAvatar"}),{alt:i,children:n,className:l,component:s="div",imgProps:u,sizes:M,src:y,srcSet:g,variant:_="circular"}=a,R=A(a,He);let p=null;const h=Ee(c({},u,{src:y,srcSet:g})),C=y||g,b=C&&h!=="error",I=c({},a,{colorDefault:!b,component:s,variant:_}),P=De(I);return b?p=o(Te,c({alt:i,src:y,srcSet:g,sizes:M,ownerState:I,className:P.img},u)):n!=null?p=n:C&&i?p=i[0]:p=o(Ue,{className:P.fallback}),o(je,c({as:s,ownerState:I,className:N(P.root,l),ref:r},R,{children:p}))}),ze=Le;var H={},Fe=E;Object.defineProperty(H,"__esModule",{value:!0});var z=H.default=void 0,Oe=Fe(U()),qe=L,Be=(0,Oe.default)((0,qe.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");z=H.default=Be;var D={},Ge=E;Object.defineProperty(D,"__esModule",{value:!0});var F=D.default=void 0,We=Ge(U()),Je=L,Ke=(0,We.default)((0,Je.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");F=D.default=Ke;const Qe=v(e=>{const{expand:t,...r}=e;return o(k,{...r})})(({theme:e,expand:t})=>({transform:t?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})}));function Ve(e){console.log(e.movie);const[t,r]=f.useState(!1),a=()=>{r(!t)};return d(te,{children:[o(ue,{avatar:o(ze,{sx:{bgcolor:G[500]},"aria-label":"recipe",children:"R"}),action:o(k,{"aria-label":"settings",children:o(W,{})}),title:e.movie.Title,subheader:e.movie.Released}),o(be,{component:"img",height:"194",image:e.movie.Poster,alt:e.movie.Title}),o(T,{children:o(m,{variant:"body2",color:"text.secondary",children:e.movie.Plot})}),d(ke,{disableSpacing:!0,children:[o(k,{"aria-label":"add to favorites",children:o(z,{})}),o(k,{"aria-label":"share",children:o(F,{})}),o(Qe,{expand:t,onClick:a,"aria-expanded":t,"aria-label":"show more",children:o(J,{})})]}),o(K,{in:t,timeout:"auto",unmountOnExit:!0,children:d(T,{children:[d(m,{paragraph:!0,children:["Actors: ",e.movie.Actors]}),d(m,{paragraph:!0,children:["Awards: ",e.movie.Awards]}),d(m,{paragraph:!0,children:["Country: ",e.movie.Country]}),d(m,{paragraph:!0,children:["Director: ",e.movie.Director]}),d(m,{paragraph:!0,children:["Genre: ",e.movie.Genre]}),d(m,{paragraph:!0,children:["Language: ",e.movie.Language]}),d(m,{paragraph:!0,children:["Writer: ",e.movie.Writer]}),d(m,{paragraph:!0,children:["Rated: ",e.movie.Rated]}),d(m,{paragraph:!0,children:["imdbRating: ",e.movie.imdbRating]})]})})]})}function at(e){const[t,r]=f.useState([]);f.useEffect(()=>{a(e.movieId)},[]);const a=async i=>{try{const l=await(await fetch(`https://www.omdbapi.com/?apikey=94fc83a4&i=${i}`)).json();l&&r(l)}catch(n){console.log(n)}};return d(Q,{auth:e.auth,errors:e.errors,children:[o(O,{title:"Detail Movies"}),o("div",{className:"py-12",children:o("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 lg:w-2/4",children:o("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:o(Ve,{movie:t})})})})]})}export{at as default};
