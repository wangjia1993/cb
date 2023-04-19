import{_ as e,c as t,i as r,g as s,b as l}from"./reset-e7aca517.js";import{a,C as o,u as n}from"./user-c36758de.js";import{B as i}from"./index-08495c02.js";import{a as u,D as p,H as d,w as m,m as c,b as f,e as y,c as g,k as h,S as v,Y as b,Q as _,j as w,f as S,g as j,s as A,t as x,l as k,h as E,d as q,r as P,U as M,V,I as $,Z as B,$ as O,_ as C}from"./index-1ab7716b.js";import{p as L}from"./pxCheck-c6b9f6b7-16d9b9c6.js";import"./style_icon-301b516b.js";import"./useAxiosApi-e46a504e.js";import"./index-743a3d48.js";import"./index-7cd0b65e.js";import"./on-popup-reopen-a0f5d33e.js";const{create:T}=t("form");var U;const W=e(T((U={[a.name]:a},{props:{modelValue:{type:Object,default:{}},rules:{type:Object,default:{}}},components:U,emits:["validate"],setup(e,{emit:t,slots:a}){const o=u((()=>p({})));d("formErrorTip",o);const n=()=>{Object.keys(o.value).forEach((e=>{o.value[e]=""}))};m((()=>e.modelValue),(()=>{n()}),{immediate:!0});const i=e=>{let t=[];return e.forEach((e=>{var s,l,a,o;let n=e.type;n=n.name||n,"nut-form-item"==n||(null==n?void 0:n.toString().endsWith("form-item"))?t.push({prop:null==(s=e.props)?void 0:s.prop,rules:(null==(l=e.props)?void 0:l.rules)||[]}):Array.isArray(e.children)&&(null==(a=e.children)?void 0:a.length)?t=t.concat(i(e.children)):r(e.children)&&Object.keys(e.children)&&(null==(o=e.children)?void 0:o.default)&&(e.children=e.children.default(),t=t.concat(i(e.children)))})),t},c=e=>{e.message&&t("validate",e),o.value[e.prop]=e.message},f=t=>{const{rules:r,prop:a}=t,o=e=>new Promise(((t,r)=>{try{c(e),t(e)}catch(s){r(s)}})),n=s(e.modelValue,a||"");c({prop:a,message:""});const i=e.rules||{},u=[...(null==i?void 0:i[a])||[],...r];for(;u.length;){const e=u.shift(),{validator:t,...r}=e,{required:s,regex:i,message:p}=r,d={prop:a,message:p};if(s&&!n&&0!==n)return o(d);if(i&&!i.test(String(n)))return o(d);if(t){const e=t(n,r);if(l(e))return new Promise(((t,r)=>{e.then((e=>{e?t(!0):(c(d),t(d))})).catch((e=>r(e)))}));if(!e)return o(d)}}return Promise.resolve(!0)},y=(e="")=>new Promise(((t,r)=>{try{const r=i(a.default()).map((t=>e?e==t.prop?f(t):Promise.resolve(!0):f(t)));Promise.all(r).then((e=>{const r={valid:!0,errors:[]};(e=e.filter((e=>1!=e))).length&&(r.valid=!1,r.errors=e),t(r)}))}catch(s){r(s)}}));return{validate:y,reset:()=>{n()},submit:()=>(y(),!1),formErrorTip:o}}})),[["render",function(e,t,r,s,l,a){const o=c("nut-cell-group");return f(),y("form",{class:"nut-form",action:"#",onSubmit:t[0]||(t[0]=b((()=>!1),["prevent"]))},[g(o,null,{default:h((()=>[v(e.$slots,"default")])),_:3})],32)}]]),{componentName:I,create:N}=t("form-item"),D=N({inheritAttrs:!1,props:{prop:{type:String,default:""},label:{type:String,default:""},rules:{type:Array,default:()=>[]},required:{type:Boolean,default:!1},showErrorMessage:{type:Boolean,default:!0},showErrorLine:{type:Boolean,default:!0},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessageAlign:{type:String,default:""},bodyAlign:{type:String,default:""}},components:{[o.name]:o},emits:[""],setup(e,{emit:t,slots:r}){const s=_("formErrorTip");d("form",{props:e});return{parent:s,labelStyle:u((()=>({width:L(e.labelWidth),textAlign:e.labelAlign}))),bodyStyle:u((()=>({textAlign:e.bodyAlign}))),errorMessageStyle:u((()=>({textAlign:e.errorMessageAlign}))),getSlots:e=>r[e]}}}),F={class:"nut-cell__value nut-form-item__body"};const H=e(D,[["render",function(e,t,r,s,l,a){const o=c("nut-cell");return f(),w(o,{class:S(["nut-form-item",[{error:e.parent[e.prop],line:e.showErrorLine},e.$attrs.class]]),style:j(e.$attrs.style)},{default:h((()=>[e.label||e.getSlots("label")?(f(),y("view",{key:0,class:S(["nut-cell__title nut-form-item__label",{required:e.required}]),style:j(e.labelStyle)},[v(e.$slots,"label",{},(()=>[A(x(e.label),1)]))],6)):k("",!0),E("view",F,[E("view",{class:"nut-form-item__body__slots",style:j(e.bodyStyle)},[v(e.$slots,"default")],4),e.parent[e.prop]&&e.showErrorMessage?(f(),y("view",{key:0,class:"nut-form-item__body__tips",style:j(e.errorMessageStyle)},x(e.parent[e.prop]),5)):k("",!0)])])),_:3},8,["class","style"])}]]),Q={class:"login"},Y=(e=>(M("data-v-daad2c76"),e=e(),V(),e))((()=>E("h2",null,"登录",-1))),Z=q({name:"LoginPage"}),z=C(q({...Z,setup(e){const t=n(),r=p({name:"",pwd:""}),s=P(null),l=()=>{s.value.validate().then((async({valid:e,errors:r})=>{if(e){await t.login()&&O.push({path:"/home"})}}))};return(e,t)=>{const a=H,o=i,n=W;return f(),y("div",Q,[Y,g(n,{ref_key:"ruleForm",ref:s,"model-value":r},{default:h((()=>[g(a,{required:"",prop:"name",rules:[{required:!0,message:"请输入用户名"}]},{default:h((()=>[$(E("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.name=e),class:"nut-input-text",placeholder:"请输入用户名",type:"text"},null,512),[[B,r.name]])])),_:1}),g(a,{required:"",prop:"pwd",rules:[{required:!0,message:"请填写联系电话"}]},{default:h((()=>[$(E("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.pwd=e),class:"nut-input-text",placeholder:"请输入密码",type:"password"},null,512),[[B,r.pwd]])])),_:1}),g(o,{block:"",type:"info",onClick:l},{default:h((()=>[A(" 登录 ")])),_:1})])),_:1},8,["model-value"])])}}}),[["__scopeId","data-v-daad2c76"]]);export{z as default};
