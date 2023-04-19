import{D as e,r as t,d as a}from"./index-1ab7716b.js";let s=class{};var o=Object.defineProperty,r=(e,t,a)=>(((e,t,a)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);var i=Object.defineProperty,n=(e,t,a)=>(((e,t,a)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);var d=Object.defineProperty;const l=e=>null!==e&&"object"==typeof e,c=(e,t)=>(Object.keys(t).forEach((a=>{let s=e[a],o=t[a];l(s)&&l(o)?c(s,o):e[a]=o})),e),u=e({"zh-CN":new class extends s{constructor(){super(...arguments),r(this,"save","保存"),r(this,"confirm","确认"),r(this,"cancel","取消"),r(this,"done","完成"),r(this,"noData","暂无数据"),r(this,"placeholder","请输入"),r(this,"select","请选择"),r(this,"video",{errorTip:"视频加载失败",clickRetry:"点击重试"}),r(this,"fixednav",{activeText:"收起导航",unActiveText:"快速导航"}),r(this,"pagination",{prev:"上一页",next:"下一页"}),r(this,"calendaritem",{weekdays:["日","一","二","三","四","五","六"],end:"结束",start:"开始",title:"日期选择",monthTitle:(e,t)=>`${e}年${t}月`,today:"今天"}),r(this,"shortpassword",{title:"请输入密码",desc:"您使用了虚拟资产，请进行验证",tips:"忘记密码"}),r(this,"uploader",{ready:"准备完成",readyUpload:"准备上传",waitingUpload:"等待上传",uploading:"上传中",success:"上传成功",error:"上传失败"}),r(this,"countdown",{day:"天",hour:"时",minute:"分",second:"秒"}),r(this,"address",{selectRegion:"请选择所在地区",deliveryTo:"配送至",chooseAnotherAddress:"选择其他地址"}),r(this,"signature",{reSign:"重签",unSupportTpl:"对不起，当前浏览器不支持Canvas，无法使用本控件！"}),r(this,"ecard",{chooseText:"请选择电子卡面值",otherValueText:"其他面值",placeholder:"请输入1-5000整数"}),r(this,"timeselect",{pickupTime:"取件时间"}),r(this,"sku",{buyNow:"立即购买",buyNumber:"购买数量",addToCart:"加入购物车"}),r(this,"skuheader",{skuId:"商品编号"}),r(this,"addresslist",{addAddress:"新建地址",default:"默认"}),r(this,"comment",{complaintsText:"我要投诉",additionalReview:e=>`购买${e}天后追评`,additionalImages:e=>`${e}张追评图片`}),r(this,"infiniteloading",{loading:"加载中...",pullTxt:"松开刷新",loadMoreTxt:"哎呀，这里是底部了啦"}),r(this,"datepicker",{year:"年",month:"月",day:"日",hour:"时",min:"分",seconds:"秒"}),r(this,"audiooperate",{back:"倒退",start:"开始",pause:"暂停",forward:"快进",mute:"静音"}),r(this,"pullrefresh",{pulling:"下拉刷新",loosing:"释放刷新",loading:"加载中..."})}},"en-US":new class extends s{constructor(){super(...arguments),n(this,"save","Save"),n(this,"confirm","Confirm"),n(this,"cancel","Cancel"),n(this,"done","Done"),n(this,"noData","No Data"),n(this,"placeholder","Placeholder"),n(this,"select","Select"),n(this,"video",{errorTip:"Error Tip",clickRetry:"Click Retry"}),n(this,"fixednav",{activeText:"Close Nav",unActiveText:"Open Nav"}),n(this,"pagination",{prev:"Previous",next:"Next"}),n(this,"calendaritem",{weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],end:"End",start:"Start",title:"Calendar",monthTitle:(e,t)=>`${e}/${t}`,today:"Today"}),n(this,"shortpassword",{title:"Please input a password",desc:"Verify",tips:"Forget password"}),n(this,"uploader",{ready:"Ready",readyUpload:"Ready to upload",waitingUpload:"Waiting for upload",uploading:"Uploading",success:"Upload successful",error:"Upload failed"}),n(this,"countdown",{day:" Day ",hour:" Hour ",minute:" Minute ",second:" Second "}),n(this,"address",{selectRegion:"Select Region",deliveryTo:"Delivery To",chooseAnotherAddress:"Choose Another Address"}),n(this,"signature",{reSign:"Re Sign",unSupportTpl:"Sorry, the current browser doesn't support canvas, so we can't use this control!"}),n(this,"ecard",{chooseText:"Select",otherValueText:"Other Value",placeholder:"Placeholder"}),n(this,"timeselect",{pickupTime:"Pickup Time"}),n(this,"sku",{buyNow:"Buy Now",buyNumber:"Buy Number",addToCart:"Add to Cart"}),n(this,"skuheader",{skuId:"Sku Number"}),n(this,"addresslist",{addAddress:"Add New Address",default:"default"}),n(this,"comment",{complaintsText:"I have a complaint",additionalReview:e=>`Review after ${e} days of purchase`,additionalImages:e=>`There are ${e} follow-up comments`}),n(this,"infiniteloading",{loading:"Loading...",pullTxt:"Loose to refresh",loadMoreTxt:"Oops, this is the bottom"}),n(this,"datepicker",{year:"Year",month:"Month",day:"Day",hour:"Hour",min:"Minute",seconds:"Second"}),n(this,"audiooperate",{back:"Back",start:"Start",pause:"Pause",forward:"Forward",mute:"Mute"}),n(this,"pullrefresh",{pulling:"Pull to refresh...",loosing:"Loose to refresh...",loading:"Loading..."})}}});class h{static languages(){return u[this.currentLang.value]}static use(e,t){t&&(u[e]=new t),this.currentLang.value=e}static merge(e,t){t&&(u[e]?c(u[e],t):this.use(e,t))}}var p,m,y;p=h,m="currentLang",y=t("zh-CN"),((e,t,a)=>{t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(p,"symbol"!=typeof m?m+"":m,y);const f=e=>"function"==typeof e,g=e=>null!==e&&"object"==typeof e,v=e=>g(e)&&f(e.then)&&f(e.catch),b=(e,t)=>{try{return t.split(".").reduce(((e,t)=>e[t]),e)}catch(a){return""}},T=(e,t,a)=>Math.min(Math.max(e,t),a);function w(e){const t="nut-"+e;return{componentName:t,translate(t,...a){const s=h.languages(),o=b(s,`${e.replace("-","")}.${t}`)||b(s,t);return f(o)?o(...a):o},create:function(s){return s.baseName=e,s.name=t,s.install=e=>{e.component(s.name,s)},a(s)},createDemo:function(t){return t.baseName=e,t.name="demo-"+e,a(t)}}}const x=(e,t)=>{const a=e.__vccOpts||e;for(const[s,o]of t)a[s]=o;return a};export{x as _,T as a,v as b,w as c,b as g,g as i};
