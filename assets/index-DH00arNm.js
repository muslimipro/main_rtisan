import{s as te}from"./index-DCO4yQdo.js";import{B as se,s as ne,o as t,c as a,m as oe,d as ae,u as le,r as _,a as z,b as re,e as J,f as ie,g as x,h as e,i as s,t as g,j as ce,F as C,k as N,n as Q,l as h,p as de,q as ue,v as me,w as pe}from"./index-B0HcSKKu.js";import{U as Y,u as fe,_ as he}from"./MainHeader.vue_vue_type_script_setup_true_lang-BmjzMMYH.js";import{R as Z,m as ee}from"./mapRouteFromDto-6NEucW0o.js";import{g as ge,f as V}from"./groupRoutesByType-B8LQ_TR7.js";import{L as xe}from"./lessonApi-DnoDjubi.js";import{m as ye}from"./mapLessonFromDto-BRb_Xlqa.js";import"./index-IYpNXtcb.js";import"./index-boxG6XjL.js";import"./index-9Fhw9YjP.js";import"./logo-D1-3uCnC.js";import"./mapUnitFromDto-BRBO9875.js";var ve=function(l){var i=l.dt;return`
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
`)},_e={root:{position:"relative"}},be={root:function(l){var i=l.props;return["p-skeleton p-component",{"p-skeleton-circle":i.shape==="circle","p-skeleton-animation-none":i.animation==="none"}]}},ke=se.extend({name:"skeleton",theme:ve,classes:be,inlineStyles:_e}),we={name:"BaseSkeleton",extends:ne,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:ke,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},r={name:"Skeleton",extends:we,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function Se(u,l,i,T,U,R){return t(),a("div",oe({class:u.cx("root"),style:[u.sx("root"),R.containerStyle],"aria-hidden":"true"},u.ptmi("root")),null,16)}r.render=Se;const Le=ae("home-store",()=>{const u=le(),l=_([]),i=_(!1);async function T(){try{i.value=!0;const{data:n}=await Z.getRoutes();l.value=(n==null?void 0:n.map(ee))??[]}catch(n){u.add({severity:"error",summary:n,life:2e3})}finally{i.value=!1}}const U=z(()=>ge(l.value)),R=z(()=>V(l.value,"main")),X=z(()=>V(l.value,"side")),M=z(()=>V(l.value,"one_kit")),y=z(()=>V(l.value,"hackathon"));let b={};const P=_(0),$=_(!1);async function q(){try{$.value=!0;const{data:n}=await Y.getUserProgress();P.value=n.xp,b=n.attempts.reduce((d,o)=>(d[o.date]={date:o.date,count:o.count,success:o.success},d),{})}catch(n){u.add({severity:"error",summary:n,life:2e3})}finally{$.value=!1}}const L=new Date,j=L.toISOString().slice(0,10),E=(L.getDay()+6)%7,B=new Date(L);B.setDate(L.getDate()-E-14);const v=B;function I(n,d){const o=(n-1)*7+(d-1),c=new Date(v);return c.setDate(v.getDate()+o),c.toISOString().slice(0,10)}function k(n,d){const o=I(n,d);if(o>j)return"bg-white";const c=b[o];return c?c.success?"bg-green-400":"bg-green-100":"bg-gray-200"}function H(n,d){const o=I(n,d);if(o>j)return"";const c=b[o];return c?`${o}
attempts: ${c.count}
success: ${c.success}`:`${o}: no attempts`}const m=_({lesson_id:0,lesson_level_name:"",lesson_name:"",lesson_type:"learn",route_id:0,route_name:""}),A=_(""),p=_(""),w=_(!1);async function F(){try{w.value=!0;const{data:n}=await Y.getUserLastLesson();m.value=n,A.value="Continue"}catch(n){const{data:d}=await xe.getLessonById(5,"1",void 0),o=ye(d),{data:c}=await Z.getRouteById(1),D=ee(c);m.value.lesson_id=o.id,m.value.lesson_level_name=D.levels[0].name,m.value.lesson_name=o.name,m.value.route_id=1,m.value.route_name=D.name,A.value="Start",u.add({severity:"error",summary:n,life:2e3})}finally{w.value=!1,p.value="/v2/lesson/"+m.value.lesson_id+"?route_id="+m.value.route_id}}return{routes:l,isRoutesLoading:i,loadRoutes:T,groupedRoutes:U,mainRoutes:R,sideRoutes:X,oneKitRoutes:M,hackathonRoutes:y,isProgressLoading:$,loadProgress:q,getDayClass:k,getDayTooltip:H,xp:P,isLastLessonLoading:w,lastLesson:m,lastButtonLabel:A,lastButtonURL:p,loadLastLesson:F}}),Re={class:"flex flex-col items-center h-screen"},$e={class:"w-full h-full max-w-[1400px] px-4 md:px-28 py-8"},Be={class:"flex flex-col gap-8 py-8"},De={class:"flex gap-8"},ze={class:"flex flex-col gap-8"},Ce={class:"flex flex-col w-[400px] h-[286px] bg-white border border-gray-100 rounded-3xl p-8"},Te={key:0,class:"text-4xl font-sans font-light text-gray-500 mb-4"},Ue={key:1,class:"text-4xl font-sans font-light text-gray-500 mb-4"},Pe={class:"font-normal text-5xl text-black"},je={class:"flex"},Ie={class:"flex-grow flex gap-2 justify-between items-end text-gray-500"},Ae={class:"grid grid-rows-6 grid-cols-7 gap-0.5 w-full h-full"},Fe=["title"],Ne={class:"w-[400px] h-[180px] bg-purple-50 border border-gray-100 rounded-3xl p-8"},Ve={key:0},Xe={key:1,class:"flex flex-col justify-between gap-5"},Me={class:"flex flex-col gap-8 w-full"},qe={class:"relative flex items-center bg-slate-50 border border-gray-100 rounded-3xl p-5"},Ee={class:"flex flex-col"},He={key:1,class:"text-2xl"},Oe={class:"flex flex-col absolute right-5 top-3 items-end"},We={key:1,class:"text-gray-400"},Ke={key:3,class:"text-gray-500"},Ge={class:"flex-grow flex flex-col justify-between items-center bg-white border border-gray-100 rounded-3xl px-8 pb-4 pt-10"},Je={class:"flex flex-col items-center"},Qe={key:1,class:"text-2xl font-semibold mb-2"},Ye={key:3,class:"text-blue-400 font-sans"},Ze={key:1,class:"text-[100px]"},et={class:"flex flex-col items-center w-full min-w-full"},tt={key:1,class:"text-gray-500 font-sans mb-4"},st={class:"flex gap-4 bg-gray-50 rounded-3xl p-8 overflow-x-scroll"},nt={key:0,class:"flex flex-row gap-4"},ot={class:"flex flex-col items-center"},at={class:"text-lg font-semibold"},lt={class:"text-sm text-gray-500 text-center"},_t=re({__name:"HomePage",setup(u){const l=me(),i=Le(),{isRoutesLoading:T,mainRoutes:U,sideRoutes:R,isProgressLoading:X,xp:M,isLastLessonLoading:y,lastLesson:b,lastButtonLabel:P,lastButtonURL:$}=J(i),{loadRoutes:q,loadProgress:L,getDayClass:j,getDayTooltip:O,loadLastLesson:E}=i,B=fe(),{userInfo:v,userLabel:I,isUserInfoLoading:k}=J(B),{loadUserInfo:H}=B,m=["pi pi-microchip","pi pi-arrow-up-right","pi pi-code","pi pi-box"];return ie(()=>{H(),L(),E(),q()}),(A,p)=>{var n,d,o,c,D,W,K,G;const w=pe,F=te;return t(),a("div",Re,[x(e(he)),s("div",$e,[s("div",Be,[s("div",De,[s("div",ze,[s("div",Ce,[e(X)?(t(),a("div",Te,[x(e(r),{width:"11rem",height:"49px"})])):(t(),a("div",Ue,[s("span",Pe,g(e(M)),1),p[1]||(p[1]=ce(" xp "))])),s("div",je,[(t(),a(C,null,N(["Mo","Tu","We","Th","Fr","Sa","Su"],(f,S)=>s("div",{key:`day-${S}`,class:"w-full h-full flex items-center justify-center rounded text-xs text-gray-500 font-medium"},g(f),1)),64))]),s("div",Ie,[s("div",Ae,[(t(),a(C,null,N(3,f=>(t(),a(C,null,[(t(),a(C,null,N(7,S=>s("div",{key:`cell-${f}-${S}`,class:Q(["aspect-square flex items-center justify-center rounded m-1",e(j)(f,S)]),title:e(O)(f,S)},null,10,Fe)),64))],64))),64))])])]),s("div",Ne,[e(k)?(t(),a("div",Ve,[e(y)?(t(),h(e(r),{key:0,height:"115px",class:"w-full mb-2"})):de("",!0)])):(t(),a("div",Xe,[p[2]||(p[2]=ue('<div class="flex items-center justify-center gap-4"><i class="pi pi-crown text-orange-300" style="font-size:28px;"></i><div class="flex flex-col"><div class="text-lg">Unlock all learning with Premium</div><div class="text-gray-500">to get more ...</div></div></div>',1)),x(w,{label:"Explore Premium",severity:"help",class:"rounded-full"})]))])]),s("div",Me,[s("div",qe,[e(k)?(t(),h(e(r),{key:0,class:"mr-6",shape:"circle",size:"4rem"})):(n=e(v))!=null&&n.small_avatar_url?(t(),h(F,{key:1,class:"mr-6",size:"xlarge",shape:"circle",image:(d=e(v))==null?void 0:d.small_avatar_url},null,8,["image"])):(t(),h(F,{key:2,label:e(I),class:"mr-6",size:"xlarge",shape:"circle"},null,8,["label"])),s("div",Ee,[p[3]||(p[3]=s("span",{class:"italic text-gray-500"},"Welcome back,",-1)),e(k)?(t(),h(e(r),{key:0,width:"15rem",height:"33px"})):(t(),a("div",He,g((o=e(v))==null?void 0:o.name),1))]),s("div",Oe,[e(k)?(t(),h(e(r),{key:0,width:"12rem",height:"25px",class:"mb-1"})):(t(),a("div",We,g((c=e(v))==null?void 0:c.school_name),1)),e(k)?(t(),h(e(r),{key:2,width:"3rem",height:"25px"})):(t(),a("div",Ke,g((D=e(v))==null?void 0:D.class_name),1))])]),s("div",Ge,[s("div",Je,[e(y)?(t(),h(e(r),{key:0,width:"15rem",height:"30px",class:"mb-2"})):(t(),a("div",Qe,g((W=e(b))==null?void 0:W.lesson_name),1)),e(y)?(t(),h(e(r),{key:2,width:"10rem",height:"20px",class:"mb-2"})):(t(),a("div",Ye,g((K=e(b))==null?void 0:K.lesson_level_name),1))]),e(y)?(t(),h(e(r),{key:0,width:"10rem",height:"9rem",class:"mb-2"})):(t(),a("div",Ze,"🚀")),s("div",et,[e(y)?(t(),h(e(r),{key:0,width:"10rem",height:"20px",class:"mb-4"})):(t(),a("div",tt,g((G=e(b))==null?void 0:G.route_name),1)),x(w,{label:e(P),class:"rounded-full h-12 min-w-full",disabled:e(y),onClick:p[0]||(p[0]=f=>e(l).push(e($)))},null,8,["label","disabled"])])])])]),s("div",st,[e(T)?(t(),a("div",nt,[x(e(r),{height:"16rem",width:"18rem"}),x(e(r),{height:"16rem",width:"18rem"}),x(e(r),{height:"16rem",width:"18rem"}),x(e(r),{height:"16rem",width:"18rem"})])):(t(!0),a(C,{key:1},N([...e(U),...e(R)],(f,S)=>(t(),a("div",{key:f.id,class:"flex-shrink-0 flex flex-col items-center justify-between h-64 w-72 bg-white rounded-xl p-4"},[s("div",ot,[s("div",at,g(f.name),1),s("div",lt,g(f.description),1)]),s("div",{class:Q(["text-[64px] text-gray-500",m[S]])},null,2),x(w,{label:"Start",class:"rounded-full w-full",severity:"info",variant:"outlined",onClick:rt=>e(l).push({name:"route",params:{id:f.id}})},null,8,["onClick"])]))),128))])])])])}}});export{_t as default};
