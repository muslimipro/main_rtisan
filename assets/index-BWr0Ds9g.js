import{s as Z}from"./index-aOvCueU7.js";import{B as ee,s as te,o as t,c as o,m as se,d as ne,u as oe,r as b,a as z,b as ae,e as J,f as le,g as y,h as e,i as s,t as p,j as re,F as C,k as X,n as Q,l as h,p as ie,q as ce,v as de,w as ue}from"./index-CRqy2v5g.js";import{U as Y,u as me,_ as fe}from"./MainHeader.vue_vue_type_script_setup_true_lang-B6pK3-mT.js";import{R as pe,m as he}from"./mapRouteFromDto-BkFEQubd.js";import{g as ge,f as A}from"./groupRoutesByType-B8LQ_TR7.js";import"./index-DK15Ya2N.js";import"./index-DHTXTWdU.js";import"./index-CtlvT3kO.js";import"./logo-D1-3uCnC.js";import"./mapLessonFromDto-Dr_nbTzq.js";import"./mapUnitFromDto-BXFFFlEW.js";var xe=function(l){var i=l.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(i("skeleton.background"),`;
    border-radius: `).concat(i("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(i("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},ye={root:{position:"relative"}},ve={root:function(l){var i=l.props;return["p-skeleton p-component",{"p-skeleton-circle":i.shape==="circle","p-skeleton-animation-none":i.animation==="none"}]}},_e=ee.extend({name:"skeleton",theme:xe,classes:ve,inlineStyles:ye}),be={name:"BaseSkeleton",extends:te,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:_e,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},r={name:"Skeleton",extends:be,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function ke(c,l,i,P,T,L){return t(),o("div",se({class:c.cx("root"),style:[c.sx("root"),L.containerStyle],"aria-hidden":"true"},c.ptmi("root")),null,16)}r.render=ke;const we=ne("home-store",()=>{const c=oe(),l=b([]),i=b(!1);async function P(){try{i.value=!0;const{data:n}=await pe.getRoutes();l.value=(n==null?void 0:n.map(he))??[]}catch(n){c.add({severity:"error",summary:n,life:2e3})}finally{i.value=!1}}const T=z(()=>ge(l.value)),L=z(()=>A(l.value,"main")),F=z(()=>A(l.value,"side")),v=z(()=>A(l.value,"one_kit")),D=z(()=>A(l.value,"hackathon"));let $={};const U=b(0),B=b(!1);async function M(){try{B.value=!0;const{data:n}=await Y.getUserProgress();U.value=n.xp,$=n.attempts.reduce((m,a)=>(m[a.date]={date:a.date,count:a.count,success:a.success},m),{})}catch(n){c.add({severity:"error",summary:n,life:2e3})}finally{B.value=!1}}const w=new Date,j=w.toISOString().slice(0,10),I=(w.getDay()+6)%7,x=new Date(w);x.setDate(w.getDate()-I-14);const N=x;function _(n,m){const a=(n-1)*7+(m-1),u=new Date(N);return u.setDate(N.getDate()+a),u.toISOString().slice(0,10)}function q(n,m){const a=_(n,m);if(a>j)return"bg-white";const u=$[a];return u?u.success?"bg-green-400":"bg-green-100":"bg-gray-200"}function E(n,m){const a=_(n,m);if(a>j)return"";const u=$[a];return u?`${a}
attempts: ${u.count}
success: ${u.success}`:`${a}: no attempts`}const g=b(),d=b(""),S=b(""),R=b(!1);async function V(){try{R.value=!0;const{data:n}=await Y.getUserLastLesson();g.value=n,d.value="Continue"}catch(n){g.value.lesson_name="Default lesson",g.value.lesson_level_name="Default level",g.value.route_name="Default route",g.value.lesson_id=1,g.value.route_id=1,d.value="Start",c.add({severity:"error",summary:n,life:2e3})}finally{R.value=!1,S.value="/v2/lesson/"+g.value.lesson_id+"?route_id="+g.value.route_id}}return{routes:l,isRoutesLoading:i,loadRoutes:P,groupedRoutes:T,mainRoutes:L,sideRoutes:F,oneKitRoutes:v,hackathonRoutes:D,isProgressLoading:B,loadProgress:M,getDayClass:q,getDayTooltip:E,xp:U,isLastLessonLoading:R,lastLesson:g,lastButtonLabel:d,lastButtonURL:S,loadLastLesson:V}}),Se={class:"flex flex-col items-center h-screen"},Re={class:"w-full h-full max-w-screen-xl px-4 md:px-28 py-8"},Le={class:"flex flex-col gap-8 py-8"},De={class:"flex gap-8"},$e={class:"flex flex-col gap-8"},Be={class:"flex flex-col w-[400px] h-[286px] bg-white border border-gray-100 rounded-3xl p-8"},ze={key:0,class:"text-4xl font-sans font-light text-gray-500 mb-4"},Ce={key:1,class:"text-4xl font-sans font-light text-gray-500 mb-4"},Pe={class:"flex"},Te={class:"flex-grow flex gap-2 justify-between items-end text-gray-500"},Ue={class:"grid grid-rows-6 grid-cols-7 gap-0.5 w-full h-full"},je=["title"],Ie={class:"w-[400px] h-[180px] bg-purple-50 border border-gray-100 rounded-3xl p-8"},Ne={key:0},Ve={key:1,class:"flex flex-col justify-between gap-5"},Xe={class:"flex flex-col gap-8 w-full"},Ae={class:"relative flex items-center bg-slate-50 border border-gray-100 rounded-3xl p-5"},Fe={class:"flex flex-col"},Me={key:1,class:"text-2xl"},qe={class:"flex flex-col absolute right-5 top-3 items-end"},Ee={key:1,class:"text-gray-400"},He={key:3,class:"text-gray-500"},Oe={class:"flex-grow flex flex-col justify-between items-center bg-white border border-gray-100 rounded-3xl px-8 pb-4 pt-10"},We={class:"flex flex-col items-center"},Ke={key:1,class:"text-2xl font-semibold mb-2"},Ge={key:3,class:"text-blue-400 font-sans"},Je={key:1,class:"text-[100px]"},Qe={class:"flex flex-col items-center w-full min-w-full"},Ye={key:1,class:"text-gray-500 font-sans mb-4"},Ze={class:"flex gap-4 bg-gray-50 rounded-3xl p-8 overflow-x-scroll"},et={key:0,class:"flex flex-row gap-4"},tt={class:"flex flex-col items-center"},st={class:"text-lg font-semibold"},nt={class:"text-sm text-gray-500 text-center"},gt=ae({__name:"HomePage",setup(c){const l=de(),i=we(),{isRoutesLoading:P,mainRoutes:T,sideRoutes:L,isProgressLoading:F,isLastLessonLoading:v,lastLesson:D,lastButtonLabel:$,lastButtonURL:U}=J(i),{loadRoutes:B,loadProgress:M,getDayClass:w,getDayTooltip:j,loadLastLesson:H}=i,I=me(),{userInfo:x,userLabel:N,isUserInfoLoading:_}=J(I),{loadUserInfo:q}=I,E=["pi pi-microchip","pi pi-arrow-up-right","pi pi-code","pi pi-box"];return le(()=>{q(),M(),H(),B()}),(g,d)=>{var V,n,m,a,u,O,W,K,G;const S=ue,R=Z;return t(),o("div",Se,[y(e(fe)),s("div",Re,[s("div",Le,[s("div",De,[s("div",$e,[s("div",Be,[e(F)?(t(),o("div",ze,[y(e(r),{width:"11rem",height:"49px"})])):(t(),o("div",Ce,d[1]||(d[1]=[s("span",{class:"font-normal text-black"},p("Progress"),-1),re(" bar ")]))),s("div",Pe,[(t(),o(C,null,X(["Mo","Tu","We","Th","Fr","Sa","Su"],(f,k)=>s("div",{key:`day-${k}`,class:"w-full h-full flex items-center justify-center rounded text-xs text-gray-500 font-medium"},p(f),1)),64))]),s("div",Te,[s("div",Ue,[(t(),o(C,null,X(3,f=>(t(),o(C,null,[(t(),o(C,null,X(7,k=>s("div",{key:`cell-${f}-${k}`,class:Q(["aspect-square flex items-center justify-center rounded m-1",e(w)(f,k)]),title:e(j)(f,k)},null,10,je)),64))],64))),64))])])]),s("div",Ie,[e(_)?(t(),o("div",Ne,[e(v)?(t(),h(e(r),{key:0,height:"115px",class:"w-full mb-2"})):ie("",!0)])):(t(),o("div",Ve,[d[2]||(d[2]=ce('<div class="flex items-center justify-center gap-4"><i class="pi pi-crown text-orange-300" style="font-size:28px;"></i><div class="flex flex-col"><div class="text-lg">Unlock all learning with Premium</div><div class="text-gray-500">to get more ...</div></div></div>',1)),y(S,{label:"Explore Premium",severity:"help",class:"rounded-full"})]))])]),s("div",Xe,[s("div",Ae,[e(_)?(t(),h(e(r),{key:0,class:"mr-6",shape:"circle",size:"4rem"})):(V=e(x))!=null&&V.small_avatar_url?(t(),h(R,{key:1,class:"mr-6",size:"xlarge",shape:"circle",image:(n=e(x))==null?void 0:n.small_avatar_url},null,8,["image"])):(t(),h(R,{key:2,label:e(N),class:"mr-6",size:"xlarge",shape:"circle"},null,8,["label"])),s("div",Fe,[d[3]||(d[3]=s("span",{class:"italic text-gray-500"},"Welcome back,",-1)),e(_)?(t(),h(e(r),{key:0,width:"15rem",height:"33px"})):(t(),o("div",Me,p((m=e(x))==null?void 0:m.surname)+" "+p((a=e(x))==null?void 0:a.name),1))]),s("div",qe,[e(_)?(t(),h(e(r),{key:0,width:"12rem",height:"25px",class:"mb-1"})):(t(),o("div",Ee,p((u=e(x))==null?void 0:u.school_name),1)),e(_)?(t(),h(e(r),{key:2,width:"3rem",height:"25px"})):(t(),o("div",He,p((O=e(x))==null?void 0:O.class_name),1))])]),s("div",Oe,[s("div",We,[e(v)?(t(),h(e(r),{key:0,width:"15rem",height:"30px",class:"mb-2"})):(t(),o("div",Ke,p((W=e(D))==null?void 0:W.lesson_name),1)),e(v)?(t(),h(e(r),{key:2,width:"10rem",height:"20px",class:"mb-2"})):(t(),o("div",Ge,p((K=e(D))==null?void 0:K.lesson_level_name),1))]),e(v)?(t(),h(e(r),{key:0,width:"10rem",height:"9rem",class:"mb-2"})):(t(),o("div",Je,"🚀")),s("div",Qe,[e(v)?(t(),h(e(r),{key:0,width:"10rem",height:"20px",class:"mb-4"})):(t(),o("div",Ye,p((G=e(D))==null?void 0:G.route_name),1)),y(S,{label:e($),class:"rounded-full h-12 min-w-full",disabled:e(v),onClick:d[0]||(d[0]=f=>e(l).push(e(U)))},null,8,["label","disabled"])])])])]),s("div",Ze,[e(P)?(t(),o("div",et,[y(e(r),{height:"16rem",width:"18rem"}),y(e(r),{height:"16rem",width:"18rem"}),y(e(r),{height:"16rem",width:"18rem"}),y(e(r),{height:"16rem",width:"18rem"})])):(t(!0),o(C,{key:1},X([...e(T),...e(L)],(f,k)=>(t(),o("div",{key:f.id,class:"flex-shrink-0 flex flex-col items-center justify-between h-64 w-72 bg-white rounded-xl p-4"},[s("div",tt,[s("div",st,p(f.name),1),s("div",nt,p(f.description),1)]),s("div",{class:Q(["text-[64px] text-gray-500",E[k]])},null,2),y(S,{label:"Start",class:"rounded-full w-full",severity:"info",variant:"outlined",onClick:ot=>e(l).push({name:"route",params:{id:f.id}})},null,8,["onClick"])]))),128))])])])])}}});export{gt as default};
