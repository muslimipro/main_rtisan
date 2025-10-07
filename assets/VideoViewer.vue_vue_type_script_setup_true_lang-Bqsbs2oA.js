import{B as I,a6 as x,O as K,a7 as A,a8 as O,a9 as M,aa as z,w as Z,ab as P,L as T,M as S,ac as U,o,p,D,c as l,m as c,h as V,a1 as F,a0 as N,Q as b,F as $,j as L,n as j,t as q,q as y,N as X,s as Y,e as k,r as h,g as E,z as R,l as Q}from"./index-CRcQ_LZd.js";import{s as G}from"./index-5sqcVIC2.js";import{s as H}from"./index-Cb3Rqpbh.js";import{s as J}from"./index-X1kAbo_w.js";var W=function(t){var n=t.dt;return`
.p-drawer {
    display: flex;
    flex-direction: column;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(n("drawer.background"),`;
    color: `).concat(n("drawer.color"),`;
    border: 1px solid `).concat(n("drawer.border.color"),`;
    box-shadow: `).concat(n("drawer.shadow"),`;
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: `).concat(n("drawer.content.padding"),`;
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(n("drawer.header.padding"),`;
}

.p-drawer-footer {
    padding: `).concat(n("drawer.footer.padding"),`;
}

.p-drawer-title {
    font-weight: `).concat(n("drawer.title.font.weight"),`;
    font-size: `).concat(n("drawer.title.font.size"),`;
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-drawer-left .p-drawer {
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right .p-drawer {
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-block-end-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-block-start-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}
`)},ee={mask:function(t){var n=t.position,i=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center",pointerEvents:i?"auto":"none"}},root:{pointerEvents:"auto"}},te={mask:function(t){var n=t.instance,i=t.props,a=["left","right","top","bottom"],r=a.find(function(s){return s===i.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":i.modal,"p-drawer-open":n.containerVisible,"p-drawer-full":n.fullScreen},r?"p-drawer-".concat(r):""]},root:function(t){var n=t.instance;return["p-drawer p-component",{"p-drawer-full":n.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ne=I.extend({name:"drawer",theme:W,classes:te,inlineStyles:ee}),re={name:"BaseDrawer",extends:Y,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:ne,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},oe={name:"Drawer",extends:re,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&x.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&x.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&K(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&x.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(a){return a&&a.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.$slots.footer&&t(this.footerContainer),n||(n=this.closeButton))),n&&A(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&O()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&M()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:z},components:{Button:Z,Portal:P,TimesIcon:T}},ae=["aria-modal"];function ie(e,t,n,i,a,r){var s=S("Button"),w=S("Portal"),d=U("focustrap");return o(),p(w,null,{default:D(function(){return[a.containerVisible?(o(),l("div",c({key:0,ref:r.maskRef,onMousedown:t[0]||(t[0]=function(){return r.onMaskClick&&r.onMaskClick.apply(r,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal})},e.ptm("mask")),[V(F,c({name:"p-drawer",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},e.ptm("transition")),{default:D(function(){return[e.visible?N((o(),l("div",c({key:0,ref:r.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?b(e.$slots,"container",{key:0,closeCallback:r.hide}):(o(),l($,{key:1},[L("div",c({ref:r.headerContainerRef,class:e.cx("header")},e.ptm("header")),[b(e.$slots,"header",{class:j(e.cx("title"))},function(){return[e.header?(o(),l("div",c({key:0,class:e.cx("title")},e.ptm("title")),q(e.header),17)):y("",!0)]}),e.showCloseIcon?(o(),p(s,c({key:0,ref:r.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":r.closeAriaLabel,unstyled:e.unstyled,onClick:r.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:D(function(u){return[b(e.$slots,"closeicon",{},function(){return[(o(),p(X(e.closeIcon?"span":"TimesIcon"),c({class:[e.closeIcon,u.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):y("",!0)],16),L("div",c({ref:r.contentRef,class:e.cx("content")},e.ptm("content")),[b(e.$slots,"default")],16),e.$slots.footer?(o(),l("div",c({key:0,ref:r.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[b(e.$slots,"footer")],16)):y("",!0)],64))],16,ae)),[[d]]):y("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):y("",!0)]}),_:3})}oe.render=ie;const _=k({__name:"MdViewer",props:{text:{}},setup(e){const t=e;return(n,i)=>{const a=S("v-md-preview");return o(),p(a,{text:t.text},null,8,["text"])}}}),we=k({__name:"ArticleViewer",props:{article:{}},setup(e){const t=e;return(n,i)=>(o(),p(_,{text:t.article.text},null,8,["text"]))}}),ve=k({__name:"OpenViewer",props:{state:{}},emits:["save-answer"],setup(e,{emit:t}){const n=e,i=t,a=h("");return E(()=>{a.value=n.state.answer.open}),R(a,()=>{i("save-answer",{open:a.value})}),(r,s)=>{const w=G;return o(),p(w,{type:"text",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=d=>a.value=d),class:"w-full",size:"small"},null,8,["modelValue"])}}}),se={class:"flex flex-col gap-4 pl-4"},be=k({__name:"OptionsViewer",props:{optionsData:{},state:{}},emits:["save-answer"],setup(e,{emit:t}){const n=e,i=t,a=h(!1),r=h(!1),s=h(!1),w=h([]),d=h([]),u=h();return E(()=>{var B,f,g,C,m,v;a.value=((B=n.optionsData)==null?void 0:B.shuffle)??!1,r.value=((f=n.optionsData)==null?void 0:f.feedback)??!1,s.value=((g=n.optionsData)==null?void 0:g.single)??!1,w.value=((C=n.optionsData)==null?void 0:C.options)??[],d.value=((m=n.state.answer)==null?void 0:m.options)??[],u.value=n.state.answer&&n.state.answer.options&&n.state.answer.options.length>0?(v=n.state)==null?void 0:v.answer.options[0]:void 0}),R([u,d,r],()=>{s.value&&u.value?i("save-answer",{options:[u.value],feedback:r.value}):i("save-answer",{options:d.value,feedback:r.value})},{deep:!0}),(B,f)=>{const g=J,C=H;return o(),l("div",se,[(o(!0),l($,null,Q(w.value,m=>(o(),l("div",{key:m.id,class:"flex gap-2 items-center"},[s.value?(o(),p(g,{key:0,modelValue:u.value,"onUpdate:modelValue":f[0]||(f[0]=v=>u.value=v),value:m.id},null,8,["modelValue","value"])):(o(),p(C,{key:1,modelValue:d.value,"onUpdate:modelValue":f[1]||(f[1]=v=>d.value=v),value:m.id},null,8,["modelValue","value"])),V(_,{text:m.text},null,8,["text"])]))),128))])}}}),le={key:0,style:{position:"relative",width:"100%",height:"0","padding-bottom":"56.25%"}},de=["src"],ce={key:1,style:{position:"relative","margin-left":"5%",width:"90%",height:"0","padding-bottom":"160%"}},ue=["src"],ye=k({__name:"VideoViewer",props:{video:{}},setup(e){const t=e;function n(i){return i.replace("shorts","embed")}return(i,a)=>t.video.url.includes("embed")?(o(),l("div",le,[L("iframe",{credentialless:"",src:n(t.video.url),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,de)])):(o(),l("div",ce,[L("iframe",{credentialless:"",src:n(t.video.url??""),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin"},null,8,ue)]))}});export{we as _,be as a,ve as b,ye as c,_ as d,oe as s};
