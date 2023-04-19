import{w as e,a as t,u as l,c as a,n as r,t as s,H as i,B as n,I as c,g as o,b as u}from"./index-743a3d48.js";import{r as p,o as m,n as d,w as h,c as f,d as g,a as y,b as w,e as b,f as v,u as S,g as k,h as x,i as z,j as N,k as C,l as _,F as H,m as B,K as T,p as M,_ as A}from"./index-1ab7716b.js";import"./style_icon-301b516b.js";import{o as I}from"./on-popup-reopen-a0f5d33e.js";function L(a,r){const s=((a,r)=>{const s=p(),i=()=>{s.value=l(a).height};return m((()=>{if(d(i),r)for(let e=1;e<=3;e++)setTimeout(i,100*e)})),I((()=>d(i))),h([e,t],i),s})(a,!0);return e=>f("div",{class:r("placeholder"),style:{height:s.value?`${s.value}px`:void 0}},[e()])}const[$,V]=a("nav-bar");const j=u(g({name:$,props:{title:String,fixed:Boolean,zIndex:r,border:s,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:s},emits:["clickLeft","clickRight"],setup(e,{emit:t,slots:l}){const a=p(),r=L(a,V),s=e=>t("clickLeft",e),u=e=>t("clickRight",e),m=()=>{const{title:t,fixed:r,border:p,zIndex:m}=e,d=o(m),h=e.leftArrow||e.leftText||l.left,g=e.rightText||l.right;return f("div",{ref:a,style:d,class:[V({fixed:r}),{[n]:p,"van-safe-area-top":e.safeAreaInsetTop}]},[f("div",{class:V("content")},[h&&f("div",{class:[V("left"),e.clickable?i:""],onClick:s},[l.left?l.left():[e.leftArrow&&f(c,{class:V("arrow"),name:"arrow-left"},null),e.leftText&&f("span",{class:V("text")},[e.leftText])]]),f("div",{class:[V("title"),"van-ellipsis"]},[l.title?l.title():t]),g&&f("div",{class:[V("right"),e.clickable?i:""],onClick:u},[l.right?l.right():f("span",{class:V("text")},[e.rightText])])])])};return()=>e.fixed&&e.placeholder?r(m):m()}})),R=["aria-labelledby"],F=[x("path",{d:"M761.436 1024H262.564c-131.282 0-236.308-105.026-236.308-236.308V404.35c0-52.513 26.257-102.4 68.267-131.282L467.364 21.005c26.257-18.38 60.39-18.38 89.272 0l372.84 252.062c42.011 28.882 68.268 78.769 68.268 131.282v383.343c0 131.282-105.026 236.308-236.308 236.308zM139.159 338.708c-21.005 15.754-34.133 39.384-34.133 65.64v383.344c0 86.646 70.892 157.539 157.538 157.539h498.872c86.646 0 157.538-70.893 157.538-157.539V404.35c0-26.257-13.128-49.887-34.133-65.641L512 86.646 139.159 338.708zm451.61 396.471H433.231c-21.005 0-39.385-18.379-39.385-39.384s18.38-39.385 39.385-39.385h157.538c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.384-39.385 39.384z",fill:"currentColor","fill-opacity":"0.9"},null,-1)],K=g({__name:"Home",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const l=e,a=e=>{t("click",e)},r=e=>{if(e)return isNaN(Number(e))?String(e):e+"px"},s=y((()=>{const e="nut-icon";return{[l.class]:l.class,[e]:!0,[e+"-"+l.name]:l.name}})),i=y((()=>{const e={};return e.height=r(l.height),e.width=r(l.width),e.color=l.color,e}));return(t,l)=>(w(),b("svg",{class:v(S(s)),style:k(S(i)),onClick:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},F,14,R))}}),P=["aria-labelledby"],q=[x("path",{d:"M977.455 124.121H46.545C21.721 124.121 0 102.4 0 77.576S21.721 31.03 46.545 31.03h930.91c24.824 0 46.545 21.722 46.545 46.546s-21.721 46.545-46.545 46.545zm0 868.849H46.545C21.721 992.97 0 971.248 0 946.424s21.721-46.545 46.545-46.545h930.91c24.824 0 46.545 21.721 46.545 46.545s-21.721 46.546-46.545 46.546zm0-434.425H356.848c-24.824 0-46.545-21.72-46.545-46.545s21.721-46.545 46.545-46.545h620.607c24.824 0 46.545 21.72 46.545 46.545s-21.721 46.545-46.545 46.545z",fill:"currentColor","fill-opacity":"0.9"},null,-1)],D=g({__name:"Horizontal",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const l=e,a=e=>{t("click",e)},r=e=>{if(e)return isNaN(Number(e))?String(e):e+"px"},s=y((()=>{const e="nut-icon";return{[l.class]:l.class,[e]:!0,[e+"-"+l.name]:l.name}})),i=y((()=>{const e={};return e.height=r(l.height),e.width=r(l.width),e.color=l.color,e}));return(t,l)=>(w(),b("svg",{class:v(S(s)),style:k(S(i)),onClick:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1090 1024","aria-labelledby":e.name,role:"presentation"},q,14,P))}}),E=["aria-labelledby"],G=[x("path",{d:"M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",fill:"currentColor","fill-opacity":"0.9"},null,-1)],J=g({__name:"Location",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const l=e,a=e=>{t("click",e)},r=e=>{if(e)return isNaN(Number(e))?String(e):e+"px"},s=y((()=>{const e="nut-icon";return{[l.class]:l.class,[e]:!0,[e+"-"+l.name]:l.name}})),i=y((()=>{const e={};return e.height=r(l.height),e.width=r(l.width),e.color=l.color,e}));return(t,l)=>(w(),b("svg",{class:v(S(s)),style:k(S(i)),onClick:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},G,14,E))}}),O=["aria-labelledby"],Q=[x("path",{d:"M512 813.949c-225.805 0-406.974-183.795-406.974-406.975S286.195 0 512 0s406.974 181.17 406.974 406.974S735.18 813.95 512 813.95zm0-735.18c-181.17 0-328.205 147.036-328.205 328.205S330.83 735.18 512 735.18s328.205-147.035 328.205-328.205S693.17 78.77 512 78.77zm202.174 939.98c-21.005 0-39.384-18.38-39.384-39.385 0-89.272-73.518-162.79-162.79-162.79-89.272 0-162.79 73.518-162.79 162.79 0 21.005-18.38 39.385-39.384 39.385s-39.385-18.38-39.385-39.385c0-133.908 107.651-241.559 241.559-241.559s241.559 107.651 241.559 241.56c0 21.004-15.754 39.384-39.385 39.384zM512 525.129c-39.385 0-78.77-13.129-105.026-36.76-15.753-13.128-18.38-39.384-2.625-55.138 13.128-15.754 39.384-18.38 55.138-2.626 23.63 21.005 81.395 21.005 105.026 0 15.754-13.128 42.01-13.128 55.138 5.251 13.128 15.754 13.128 42.01-5.251 55.139C590.77 512 551.385 525.128 512 525.128z",fill:"currentColor","fill-opacity":"0.9"},null,-1)],U=g({__name:"My",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const l=e,a=e=>{t("click",e)},r=e=>{if(e)return isNaN(Number(e))?String(e):e+"px"},s=y((()=>{const e="nut-icon";return{[l.class]:l.class,[e]:!0,[e+"-"+l.name]:l.name}})),i=y((()=>{const e={};return e.height=r(l.height),e.width=r(l.width),e.color=l.color,e}));return(t,l)=>(w(),b("svg",{class:v(S(s)),style:k(S(i)),onClick:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},Q,14,O))}}),W=g({name:"BasicLayoutPage"}),X=A(g({...W,setup(e){const t=[{key:"home",icon:K},{key:"list",icon:D},{key:"member",icon:U},{key:"demo",icon:J}],l=z(),a=p(0),r=p(!0),s=p(!0);h((()=>l),(()=>{const e=t.some((e=>e.key===l.currentRoute.value.path.replace("/","")));a.value=t.findIndex((e=>e.key===l.currentRoute.value.path.replace("/",""))),r.value=e,s.value=e}),{deep:!0,immediate:!0});const i=()=>{l.go(-1)};return(e,t)=>{const l=j,a=B("RouterView");return w(),b(H,null,[f(l,{title:e.$t(e.$route.meta.title),"left-arrow":!r.value,onClickLeft:i},null,8,["title","left-arrow"]),x("div",{class:v(["main-page",{tabbar:r.value,border:s.value}])},[e.$route.meta.keepAlive?(w(),N(a,{key:0},{default:C((({Component:t})=>[(w(),N(T,null,[(w(),N(M(t),{key:e.$route.path}))],1024))])),_:1})):_("",!0),e.$route.meta.keepAlive?_("",!0):(w(),N(a,{key:e.$route.path}))],2)],64)}}}),[["__scopeId","data-v-5d48866d"]]);export{X as default};
